import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import axios from "axios"; // Import axios for making HTTP requests

function EventRequest({ influencerName, userName, influencerId }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleRemoveClick = async () => {
    try {
      // Make a request to remove the influencer from the campaign
      await axios.delete(`http://127.0.0.1:8000/api/interface-buisness/${user.business[0].slug}/campaigns/influencer/${influencerId}`);
      
      // If successful, maybe update UI accordingly or show a success message
    } catch (error) {
      console.error("Error removing influencer:", error);
      // Handle error, maybe show a notification to the user
    }
  };
  return (
    <Card sx={{ display: "flex", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="https://images.unsplash.com/photo-1585580419885-2fab1d6dce62?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 1,
          padding: "20px",
        }}
      >
        <Box sx={{display:"flex", justifyContent:"space-between", width:1}}>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
              {influencerName}
            </Typography>
            <Typography>{userName}</Typography>
          </Box>
          <Box>
            <Button>View Account</Button>
            <Button sx={{color:"red"}} onClick={handleRemoveClick}>Remove</Button>
          </Box>
        
        </Box>
      </Box>
    </Card>
  );
}

export default EventRequest;
