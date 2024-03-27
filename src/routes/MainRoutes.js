import { lazy } from "react";


import { useNavigate } from 'react-router-dom'; // Import the useAuth hook
import { useAuth } from '../hooks/auth';
import { useEffect } from 'react';
import PropTypes from 'prop-types'; 
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
// import LandingPage from 'home/landing-page/Landingpage';

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default")),
);

//Complete Profile (Business)
const CompleteProfileBusiness = Loadable(
  lazy(() => import("views/completeprofile/marketing/CompleteProfile")),
);
const CompleteProfileInfluencer = Loadable(
  lazy(() => import("views/completeprofile/influencers/CompleteProfile")),
);

// Setting Page
const Setting = Loadable(lazy(() => import("views/setting/Setting")));
// Account Page
const AccountPage = Loadable(lazy(() => import("views/accounts/Account")));
// events
const Event = Loadable(lazy(() => import("views/event/Event")));
const InfluencerEvent = Loadable(lazy(() => import("views/event/influencer_event/InfluencerEvent")));
const CreateEvent = Loadable(lazy(() => import("views/event/CreateEvent")));
const SelectedEvent = Loadable(lazy(() => import("views/event/SelectedEvent")));
const EditEvent = Loadable(lazy(() => import("views/event/EditEvent")));


const Explore = Loadable(lazy(() => import("views/explore/Explore")));
const GiftedInfluencerList = Loadable(
  lazy(() => import("views/influencer_gifting/GiftedInfluencerList")),
);

const CreateCampaign = Loadable(
  lazy(() => import("views/campaign/CreateCampaign")),
);
const SelectedCampaign = Loadable(
  lazy(() => import("views/campaign/SelectedCampaign")),
);
const CampaignList = Loadable(
  lazy(() => import("views/campaign/CampaignList")),
);
const Try = Loadable(lazy(() => import("views/Try")));

// sample page routing
const ProtectedRoute = ({ children }) => {
  const { authToken } = useAuth(); // Get the authentication token from the hook
  const navigate = useNavigate();

  // Check if user is authenticated on component mount
  useEffect(() => {
    if (!authToken) {
      // Redirect user to login page if not authenticated
      navigate('/login');
    }
  }, [authToken, navigate]);

  // Render the children if authenticated, otherwise render null
  return authToken ? children : null;
};

// Add prop types validation for the children prop
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/view",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element:<ProtectedRoute><DashboardDefault /></ProtectedRoute>
    },
    {
      path: "try",
      element: <Try />,
    },

    {
      path: "event",
      children: [
        {
          path: "",
          element: <ProtectedRoute><Event /></ProtectedRoute>,
        },
        {
          path: "create-event",
          element: <ProtectedRoute><CreateEvent /></ProtectedRoute>,
        },
        {
          path: "edit-event/:id",
          element: <ProtectedRoute><EditEvent /></ProtectedRoute>,
        },
        {
          path: ":slug/:id",
          element: <ProtectedRoute><SelectedEvent /></ProtectedRoute>,
        },
        {
          path: "influencer-event",
          element: <ProtectedRoute><InfluencerEvent /></ProtectedRoute>,
        },
      ],
    },
    {
      path: "campaign",
      children: [
        {
          path: "create-campaign",
          element: <ProtectedRoute><CreateCampaign /> </ProtectedRoute> ,
        },
        {
          path: "campaign-list",
          element: <ProtectedRoute><CampaignList /></ProtectedRoute>,
        },
        {
          path: "selected-campaign",
          element: <ProtectedRoute><SelectedCampaign /></ProtectedRoute>,
        },
      ],
    },
    {
      path: "Explore",
      element: <Explore />,
    },
    {
      path: "gifting",
      children: [
        {
          path: "influencerlist",
          element: <ProtectedRoute><GiftedInfluencerList /></ProtectedRoute>,
        },
      ],
    },
    {
      path: "Setting",
      element: <ProtectedRoute><Setting /></ProtectedRoute>,
    },
    {
      path: "account",
      element: <ProtectedRoute><AccountPage /></ProtectedRoute>,
    },
    {
      path: "completeprofile",
      children:[
        {
          path:"business",
          element : <ProtectedRoute><CompleteProfileBusiness/></ProtectedRoute>
        },
        {
          path:"Influencer",
          element: <ProtectedRoute><CompleteProfileInfluencer/></ProtectedRoute>
        }
      ]
    },
    
  ],
};

export default MainRoutes;