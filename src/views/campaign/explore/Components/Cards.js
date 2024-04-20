"use client";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";


const AddInfluencerButton = ({ campaignId, influencerId }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const handleClick = async () => {
    try {
      const response = await fetch(`https://influensys.vercel.app/api/interface-buisness/lisban-company-576BXZ/campaigns/${campaignId}/add-influencer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ influencer: influencerId }),
      });
      // Handle response
      if (response.ok) {
        // If response is ok, navigate to the campaign page
        navigate(`/business/campaign/${user.business[0].slug}/${campaignId}`);
      } else {
        console.error('Error adding influencer:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding influencer:', error);
    }
  };

  return (
    <Button sx={{ width: 1 }} variant="contained" onClick={handleClick}>
      Add Influencer
    </Button>
  );
};


export default function Cards({ name, industry, country, id, campaignId }) {

  

  return (
    <Card
      sx={{
        width: 1,
        maxWidth: "100%",
        boxShadow:
          "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="image"
            src="https://images.unsplash.com/photo-1621573321410-bf4db2a65ff1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            sx={{ width: 100, height: 100, marginRight: "20px" }}
          />
          <Box>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {name}
            </Typography>
            <Typography>{industry.join(', ')}</Typography>
            <Typography sx={{ fontStyle: "italic", fontSize: "12px" }}>
            {country}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: 1, marginTop: "20px" }}>
          <Grid container spacing={2}>
          <Grid item xs={3} sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}><InstagramIcon/> 2.9K</Grid>
          <Grid item xs={3} sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}><FacebookIcon/> 100K</Grid>
          <Grid item xs={3} sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}} ><YouTubeIcon/> 50K</Grid>
          <Grid item xs={3}  sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}} ><XIcon/> 63K</Grid>
          </Grid>
        </Box>
        <Box sx={{ width: 1, marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button sx={{ width: 1 }} variant="outlined">
                View Profile
              </Button>
            </Grid>
            <Grid item xs={6}>
            <AddInfluencerButton campaignId={campaignId} influencerId={id} />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
