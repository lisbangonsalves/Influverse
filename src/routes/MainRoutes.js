import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// import LandingPage from 'home/landing-page/Landingpage';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const CreateEvent = Loadable(lazy(() => import('views/event/CreateEvent')));
const Explore = Loadable(lazy(() => import('views/explore/Explore')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const CompleteProfile = Loadable(lazy(() => import('views/completeprofile/CompleteProfile')));
const CreateCampaign = Loadable(lazy(() => import('views/campaign/CreateCampaign')));
const CampaignList = Loadable(lazy(() => import('views/campaign/CampaignList')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/view',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
          element: <DashboardDefault />
        
    },
    {
      path: 'event',
      children: [
        {
          path: 'create-event',
          element: <CreateEvent />
        }
      ]
    },
    {
      path: 'campaign',
      children: [
        {
          path: 'create-campaign',
          element: <CreateCampaign />
        },
        {
          path: 'campaign-list',
          element: <CampaignList/>
        }
      ]
    },
    {
      path: 'Explore',
      element:<Explore/>
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'completeprofile',
      element: <CompleteProfile />
    }
  ]
};

export default MainRoutes;
