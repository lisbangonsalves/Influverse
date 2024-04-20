import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import { useEffect } from 'react';



function EventRequest({ businessName, campaignName, campaignId, slug, removeCampaign }) {

  const handleAccept = async () => {
    try {
      const response = await fetch(
        `https://influensys.vercel.app/api/interface-influence/${slug}/campaign-confirm/${campaignId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ confirmed: true }),
        }
      );
      if (response.ok) {
        // Handle success (if needed)
        console.log("Campaign accepted successfully!");
        removeCampaign(campaignId);
      } else {
        // Handle error (if needed)
        console.error("Error accepting campaign:", response.statusText);
      }
    } catch (error) {
      console.error("Error accepting campaign:", error.message);
    }
  };


  useEffect(() => {
    // Remove campaign from list after accepting
    removeCampaign(campaignId);
  }, [campaignId, removeCampaign]);


  return (
    <>
    <Card sx={{ display: 'flex', margin:"10px", backgroundColor:"#eef2f6" }}>
    <CardMedia
      component="img"
      sx={{ width: 100 }}
      image="https://images.unsplash.com/photo-1585580419885-2fab1d6dce62?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', justifyContent:"space-between" , width:1, padding:"20px" }}>
      <Box>
        <Typography sx={{fontWeight:"bold", fontSize:16}}>
        {campaignName}
        </Typography>
        <Typography>
        {businessName}
        </Typography>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", }}>
      <Button
            variant="outlined"
            sx={{
              color: "red",
              borderColor: "red",
              "&:hover": {
                borderColor: "red",
              },
              marginRight:"10px"
            }}
          >
            Reject
          </Button>
          <Button variant="outlined" onClick={handleAccept}>Accept</Button>
      </Box>
    </Box>
  </Card>
    
  </>
  )
}

export default EventRequest
