import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register')));
const AuthRegisterBusiness = Loadable(lazy(() => import('views/pages/authentication/authentication3/businessRegister')));
const AccountType = Loadable(lazy(() => import('views/pages/authentication/AccountType')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      children:[
        {
          path:"",
          element: <AuthRegister />,
        },
        {
          path:"business",
          element: <AuthRegisterBusiness />
        },
        {
          path:"influencer",
          element: <AuthRegisterBusiness />
        }
      ]
    },
    {
      path: 'accounttype',
      element: <AccountType />
    }
  ]
};

export default AuthenticationRoutes;
