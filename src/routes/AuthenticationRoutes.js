import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login')));
const AuthRegister1 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register1')));
const AuthRegister2 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register2')));
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
      path: '/register1',
      element: <AuthRegister1 />
    },
    {
      path: '/register2',
      element: <AuthRegister2 />
    },
   
    {
      path: 'accounttype',
      element: <AccountType />
    }
  ]
};

export default AuthenticationRoutes;
