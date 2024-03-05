// import { lazy } from 'react';

// project imports
// import Loadable from 'ui-component/Loadable';
import Home from 'home/landing-page/Home';
import LandingPage from 'home/landing-page/Landingpage';
import Blog from 'home/landing-page/Blog';

// login option 3 routing
// const landingPage = Loadable(lazy(() => import('../home/landing-page/Landingpage')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LangdingRoutes = {
  path: '/',
  element: <LandingPage />,
  children : [
    {
        path: '/',
        element : <Home/>
    },
    {
        path: '/blog',
        element : <Blog/>
    },
  ]
};

export default LangdingRoutes;
