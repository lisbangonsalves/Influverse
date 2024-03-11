// import { lazy } from 'react';

// project imports
// import Loadable from 'ui-component/Loadable';
import Home from 'home/landing-page/Home';
import LandingPage from 'home/landing-page/Landingpage';
import Blog from 'home/blog/Blog';
import Features from 'home/features/Features';
import Pricing from 'home/pricing/Pricing';

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
    {
        path: '/features',
        element : <Features/>
    },
    {
        path: '/pricing',
        element : <Pricing/>
    },
  ]
};

export default LangdingRoutes;
