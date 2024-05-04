import { lazy } from "react";
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../hooks/auth';
import { useEffect } from 'react';
import PropTypes from 'prop-types'; 
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default")),
);

const Setting = Loadable(lazy(() => import("views/setting/influencer/Setting")));

const CompleteProfileInfluencer = Loadable(
  lazy(() => import("views/completeprofile/influencers/CompleteProfile")),
);
const Campaign = Loadable(
  lazy(() => import("views/campaign/Influencer/CampaignList")),
);
const SelectedCampaign = Loadable(
  lazy(() => import("views/campaign/Influencer/SelectedCampaign")),
);
const CampaignDraft = Loadable(
  lazy(() => import("views/campaign/Influencer/Draft")),
);
const Event = Loadable(
  lazy(() => import("views/event/influencer_event/InfluencerEvent")),
);
const Gifting = Loadable(
  lazy(() => import("views/influencer_gifting/GiftedInfluencerList")),
);
const SelectedEvent = Loadable(
  lazy(() => import("views/event/influencer_event/SelectedEvent")),
);
const ExploreEvent = Loadable(
  lazy(() => import("views/event/influencer_event/ExploreEvent")),
);

const Account = Loadable(lazy(() => import("views/accounts/influencer/account")));

const Try = Loadable(lazy(() => import("views/Try")));
const Youtube = Loadable(lazy(() => import("views/youtube/Youtube")));


const ProtectedRoute = ({ children }) => {
  const { userType, authToken, isLoading } = useAuth(); // Get the user type, auth token, and loading state from the hook
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!authToken || userType !== 'influencer')) {
      navigate('/login'); // Redirect to login if authToken is missing or userType is not 'business' after loading
    }
  }, [authToken, userType, isLoading, navigate]);

  return isLoading ? null : userType === 'influencer' ? children : null; // Render children if isLoading is false and userType is 'business'
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/influencer",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element:<ProtectedRoute ><DashboardDefault/></ProtectedRoute>
    },
    {
      path: "account",
      element: <ProtectedRoute ><Account/></ProtectedRoute>,
    },
    {
      path: "setting",
      element: <ProtectedRoute ><Setting/></ProtectedRoute>,
    },
    {
      path: "try",
      element: <Try />,
    },
    {
      path: "completeprofile",
      element:<ProtectedRoute ><CompleteProfileInfluencer/></ProtectedRoute>
    },
    {
      path: "campaign",
      children: [
        {
          path: "",
          element: <ProtectedRoute ><Campaign /></ProtectedRoute>,
        },
        {
          path: ":slug/:id",
          element: <ProtectedRoute ><SelectedCampaign /></ProtectedRoute>,
        },
        {
          path: "draft/:id/:slug",
          element: <ProtectedRoute ><CampaignDraft /></ProtectedRoute>,
        }
      ],
    },
    {
      path: "event",
      children: [
        {
          path: "",
          element: <ProtectedRoute ><Event /></ProtectedRoute>,
        },
        {
          path: "explore",
          element: <ProtectedRoute ><ExploreEvent /></ProtectedRoute>,
        },
        {
          path: ":slug/:id",
          element: <ProtectedRoute><SelectedEvent /></ProtectedRoute>,
        },
      ],
    },
    {
      path:"gifting",
      children:[
        {
          path:"",
          element:<ProtectedRoute><Gifting/></ProtectedRoute>
        }
      ]
    },
    {
      path:"youtube",
      element:<Youtube/>
    }
    
  ],
};

export default MainRoutes;