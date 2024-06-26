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

//Complete Profile (Business)
const CompleteProfileBusiness = Loadable(
  lazy(() => import("views/completeprofile/marketing/CompleteProfile")),
);
const Youtube = Loadable(lazy(() => import("views/youtube/Youtube")));

// Setting Page
const Setting = Loadable(lazy(() => import("views/setting/business/Setting")));
// Account Page
const AccountPage = Loadable(lazy(() => import("views/accounts/business/Account")));
// events
const Event = Loadable(lazy(() => import("views/event/Event")));
const CreateEvent = Loadable(lazy(() => import("views/event/CreateEvent")));
const SelectedEvent = Loadable(lazy(() => import("views/event/SelectedEvent")));
const EditEvent = Loadable(lazy(() => import("views/event/EditEvent")));

// explore 
const Explore = Loadable(lazy(() => import("views/explore/Explore")));

// influencer gifting 
const GiftedInfluencerList = Loadable(
  lazy(() => import("views/influencer_gifting/GiftedInfluencerList")),
);
const InfluencerProductList = Loadable(
  lazy(() => import("views/influencer_gifting/ProductList")),
);
const AddProduct = Loadable(
  lazy(() => import("views/influencer_gifting/AddProduct")),
);
const SendGift = Loadable(
  lazy(() => import("views/influencer_gifting/components/SendGift")),
);
const GiftingExplore = Loadable(
  lazy(() => import("views/influencer_gifting/explore_gifting/Explore")),
);

// campaign 

const CreateCampaign = Loadable(
  lazy(() => import("views/campaign/CreateCampaign")),
);
const EditCampaign = Loadable(
  lazy(() => import("views/campaign/EditCampaign")),
);
const ExploreCampaign = Loadable(
  lazy(() => import("views/campaign/explore/Explore")),
);
const SelectedCampaign = Loadable(
  lazy(() => import("views/campaign/SelectedCampaign")),
);
const CampaignDraft = Loadable(
  lazy(() => import("views/campaign/BusinessDraft/Draft")),
);
const CampaignList = Loadable(
  lazy(() => import("views/campaign/CampaignList")),
);

// try 
const Try = Loadable(lazy(() => import("views/Try")));


const ProtectedRoute = ({ children }) => {
    const { userType, authToken, isLoading } = useAuth(); // Get the user type, auth token, and loading state from the hook
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isLoading && (!authToken || userType !== 'business')) {
        navigate('/login'); // Redirect to login if authToken is missing or userType is not 'business' after loading
      }
    }, [authToken, userType, isLoading, navigate]);
  
    return isLoading ? null : userType === 'business' ? children : null; // Render children if isLoading is false and userType is 'business'
  };
  
  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/business",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element:<ProtectedRoute ><DashboardDefault  /></ProtectedRoute>
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
          path: ":id",
          element: <ProtectedRoute><SelectedEvent /></ProtectedRoute>,
        },
      ],
    },
    {
      path: "campaign",
      children: [
        {
          path: "create-campaign",
          element: <ProtectedRoute ><CreateCampaign /> </ProtectedRoute> ,
        },
        {
          path: "edit-campaign/:campaignId",
          element: <ProtectedRoute ><EditCampaign /> </ProtectedRoute> ,
        },
        {
          path: "explore/:campaignId",
          element: <ProtectedRoute ><ExploreCampaign/> </ProtectedRoute> ,
        },
        {
          path: "campaign-list",
          element: <ProtectedRoute ><CampaignList /></ProtectedRoute>,
        },
        {
          path: ":slug/:id",
          element: <ProtectedRoute ><SelectedCampaign /></ProtectedRoute>,
        },
        {
          path: "draft/:influencerId/:campaignId/:amount",
          element: <ProtectedRoute ><CampaignDraft /></ProtectedRoute>,
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
          element: <GiftedInfluencerList />,
        },
        {
          path: "productlist",
          element: <InfluencerProductList />,
        },
        {
          path: "addproduct",
          element: <AddProduct />,
        },
        {
          path: "sendgift/:id",
          element: <SendGift />,
        },
        {
          path: "explore",
          element: <GiftingExplore />,
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
          path:"",
          element : <ProtectedRoute><CompleteProfileBusiness/></ProtectedRoute>
        },
      ]
    },
    {
      path:"youtube",
      element:<Youtube/>
    }
    
  ],
};

export default MainRoutes;