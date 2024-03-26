// auth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAuthToken(token);
    } else {
      setAuthToken(null);
    }
  }, []);

  return { authToken };
};
