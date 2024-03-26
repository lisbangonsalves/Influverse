import { lazy } from "react";

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
const CreateEvent = Loadable(lazy(() => import("views/event/CreateEvent")));
const SelectedEvent = Loadable(lazy(() => import("views/event/SelectedEvent")));


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

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/view",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element: <DashboardDefault />,
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
          element: <Event />,
        },
        {
          path: "create-event",
          element: <CreateEvent />,
        },
        {
          path: ":slug/:id",
          element: <SelectedEvent />,
        },
      ],
    },
    {
      path: "campaign",
      children: [
        {
          path: "create-campaign",
          element: <CreateCampaign />,
        },
        {
          path: "campaign-list",
          element: <CampaignList />,
        },
        {
          path: "selected-campaign",
          element: <SelectedCampaign />,
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
      ],
    },
    {
      path: "Setting",
      element: <Setting />,
    },
    {
      path: "account",
      element: <AccountPage />,
    },
    {
      path: "completeprofile",
      children:[
        {
          path:"business",
          element : <CompleteProfileBusiness/>
        },
        {
          path:"Influencer",
          element:<CompleteProfileInfluencer/>
        }
      ]
    },
    
  ],
};

export default MainRoutes;
