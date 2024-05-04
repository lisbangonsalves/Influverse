import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import {  Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { NavLink } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { useParams } from "react-router-dom";

import Divider from "@mui/material/Divider";


export default function SelectedEvent() {
  const { slug,id } = useParams();
  const [eventData, setEventData] = useState(null); // State to store event data
 
  useEffect(() => {
    // Fetch event data from the API
    axios
      .get(
        `https://influverse-backend.onrender.com/api/interface-buisness/${slug}/campaigns/${id}`,
      )
      .then((response) => {
        setEventData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });


  }, [ id, slug]); // Empty dependency array to run the effect only once on component mount

  



  return (
    <React.Fragment>
    <Box>
      {eventData && ( // Render the component only when data is available
        <Box>
          <Card sx={{ width: 1 }}>
            <CardMedia
              component="img"
              height="300px"
              image="https://plus.unsplash.com/premium_photo-1685080293629-692fda8f3bb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event Image"
            />
          </Card>
          <Box sx={{backgroundColor:"white",paddingX:"20px",paddingY:"15px", marginTop:"20px", borderRadius:"10px"}}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "37%",
              }}
            >
              <Typography
            sx={{ fontSize: 24, marginTop: "0px", fontWeight: "bold" }}
          >
            {eventData.name}
          </Typography>
              
              
            </Box>
            
          </Box>
          
          <Box>
          <Box
                sx={{
                  display: "flex",
                  color: "#DA2563",
                  alignItems: "center",
                  marginRight: "20px",
                  marginBottom:"5px"
                }}
              >
                <LocationOnIcon sx={{ fontSize: 18, marginRight: "1px" }} />
                <Typography> {eventData.location}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center",color: "#DA2563", marginBottom:"5px"}}>
                <CalendarMonthIcon sx={{ fontSize: 18, marginRight: "2px",  }} />
                <Typography>
                  {" "}
                  {eventData.start_date} - {eventData.end_date}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", }}>
                <Box sx={{color:"white", display: "flex", backgroundColor:"#109636", paddingX:"10px", paddingY:"5px" }}>

                <Typography>Budget : </Typography>
                <Typography sx={{fontWeight:"bold"}}>${eventData.budget}</Typography>
                </Box>
              </Box>
            </Box>
          
          <Typography sx={{ marginTop: "10px" }}>
            {eventData.description}
          </Typography>
          <Button component = {NavLink} to = {`/influencer/campaign/draft/${id}/${slug}`} >
            Send Draft
          </Button>
          </Box>
          <Divider sx={{ marginY: "10px", marginTop:"15px" }} />
        </Box>
      )}
    </Box>
    </React.Fragment>
  );
}
