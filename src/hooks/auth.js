// auth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [userType, setUserType] = useState(null); // Track user type
  const [authToken, setAuthToken] = useState(localStorage.getItem("accessToken"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/user_is', {
          headers: {
            Authorization: `Bearer ${authToken}` // Pass authToken in the headers
          }
        });
        const data = await response.json();
        const { is_business, is_influencer } = data;
        setUserType( is_influencer ? 'influencer' : is_business ? 'business' : null);
        localStorage.setItem("user", JSON.stringify(data) );
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
