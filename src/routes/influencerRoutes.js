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

const CompleteProfileInfluencer = Loadable(
  lazy(() => import("views/completeprofile/influencers/CompleteProfile")),
);

const Try = Loadable(lazy(() => import("views/Try")));


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
      element:<ProtectedRoute ><DashboardDefault  /></ProtectedRoute>
    },
    {
      path: "try",
      element: <Try />,
    },
    {
      path: "completeprofile",
      element:<ProtectedRoute><CompleteProfileInfluencer/></ProtectedRoute>
    },
    
  ],
};

export default MainRoutes;