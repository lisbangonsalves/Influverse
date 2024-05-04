// http://localhost:3000/influencer/youtube?access_token=ya29.a0Ad52N3-5T7BsIqMoKH1t43tSlxSWj2JV_8DuMr3pUCce9ZhQZqCKvSFukfrr79RjvAMR3HP5GJY3C9UuBQ_vO_-yoDNJMr3GDz7hcxw6rNHk09dG-r7-LM27ehHRJGxtq52-fJ_Q4YwMBUwDVrCm1DyxZI_UalMiE-G6aCgYKAQkSARISFQHGX2MiEqdKKn2PnVfpMB-ULqVXfA0171&refresh_token=1//0gnbyGT92oK0DCgYIARAAGBASNwF-L9IrZspslW2KRLGz7zYevX1vkAAE396hQZebxZHojGgNiOKuHW7Z-dJElmSal1P70Fe3y7E

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RedirectComponent = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line
  const [accessToken, setAccessToken] = useState("");
  // eslint-disable-next-line
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    // Parse query parameters from URL
    const params = new URLSearchParams(window.location.search);
    const accessTokenParam = params.get("access_token");
    const refreshTokenParam = params.get("refresh_token");

    // Store tokens in state or local storage
    if (accessTokenParam && refreshTokenParam) {
      setAccessToken(accessTokenParam);
      setRefreshToken(refreshTokenParam);

      // Optionally, you can store tokens in local storage
      localStorage.setItem("youtubeAccessToken", accessTokenParam);
      localStorage.setItem("youtubeRefreshToken", refreshTokenParam);
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const type =storedUser?.business ? "business" : storedUser?.influencer ? "influencer":"" 
      // Redirect to complete profile page
      navigate(`/${type}/dashboard/`);
    }
  }, [history]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {/* Optionally, you can display loading spinner or message */}
    </div>
  );
};

export default RedirectComponent;
