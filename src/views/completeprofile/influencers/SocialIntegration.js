import { Box } from "@mui/system";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { NavLink } from 'react-router-dom';





export default function SocialIntegration() {


    const handleInstagramLogin = () => {
      // Construct the OAuth request URL
      const clientId = '1134098924458353';
      const redirectUri = encodeURIComponent('https://influensys.vercel.app/api/interface-influence/influencer/insta/'); // Replace with your actual redirect URL
      const scope = 'user_profile,user_media'; // Specify required scopes
      const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&slug=jessica-gonsalves-7YVVv1`;
  
      // Redirect the user to Instagram login
      window.location.href = authUrl;
    }
  
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>Integrate your social media</Box>
      <Stack spacing={2} sx={{ marginTop: "50px" }}>
        <Button
          sx={{
            paddingX: "50px",
            paddingY: "10px",
            fontSize: "14px",
            backgroundColor: "#dd2a7b",
          }}
          component="label"
          role={undefined}
          onClick={handleInstagramLogin}
          variant="contained"
          tabIndex={-1}
          startIcon={<InstagramIcon />}
        >
          Connect Instagram
        </Button>
        <Button
          sx={{
            paddingX: "50px",
            paddingY: "10px",
            fontSize: "14px",
            backgroundColor: "darkblue",
          }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<FacebookIcon />}
        >
          Connect Facebook
        </Button>
        <Button
          sx={{
            paddingX: "50px",
            paddingY: "10px",
            fontSize: "14px",
            backgroundColor: "red",
          }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<YouTubeIcon />}
        >
          Connect Youtube
        </Button>
        <Button
        component = {NavLink} to = "http://localhost:7000/login"
          sx={{
            paddingX: "50px",
            paddingY: "10px",
            fontSize: "14px",
            backgroundColor: "black",
          }}
          
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<XIcon />}
        >
          Connect X
        </Button>
      </Stack>
    </Box>
  );
}
