// auth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [userType, setUserType] = useState(null); // Track user type
  const [authToken, setAuthToken] = useState(localStorage.getItem("accessToken"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://influensys.vercel.app/user_is', {
          headers: {
            Authorization: `Bearer ${authToken}` // Pass authToken in the headers
          }
        });
        const data = await response.json();
        const { is_business, is_influencer } = data;
        setUserType(is_business ? 'business' : is_influencer ? 'influencer' : null);
      } catch (error) {
        console.error('Error fetching user type:', error);
      }finally {
      setIsLoading(false); // Set loading state to false after fetching data
    }
    };

    fetchData();
  }, [authToken]);

  // Function to update authToken
  const updateAuthToken = (newToken) => {
    setAuthToken(newToken);
    localStorage.setItem("accessToken", newToken);
  };

  return { userType, authToken, updateAuthToken, isLoading }; // Return authToken along with userType and updateAuthToken function
};
