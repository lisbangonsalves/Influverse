import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { NavLink } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Cards from "./components/cards";
import Chip from '@mui/material/Chip';


export default function SelectedEvent() {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null); // State to store event data
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    // Fetch event data from the API
    axios
      .get(
        `https://influensys.vercel.app/api/interface-buisness/${user.business[0].slug}/campaigns/${id}`,
      )
      .then((response) => {
        setEventData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
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
          <Chip label={eventData.objective} sx={{marginTop:"30px"}} />

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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                aria-label="delete"
                size="large"
                sx={{
                  marginRight: "20px",
                  "&:hover": { backgroundColor: "red", color: "white" },
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                component={NavLink}
                to={`/view/event/edit-event/${id}`}
                aria-label="delete"
                size="large"
                sx={{
                  "&:hover": { backgroundColor: "#161A30", color: "white" },
                }}
              >
                <CreateIcon fontSize="inherit" />
              </IconButton>
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
                <Box sx={{color:"#1DBB62", display: "flex", }}>

                <Typography>Budget : </Typography>
                <Typography sx={{fontWeight:"bold"}}>${eventData.budget}</Typography>
                </Box>
              </Box>
            </Box>
          
          <Typography sx={{ marginTop: "10px" }}>
            {eventData.description}
          </Typography>
          <Divider sx={{ marginY: "10px" }} />
          <Box sx={{ marginTop: "15px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>List Of Influencer</Typography>
              <Button variant="contained" startIcon={<AddCircleIcon />}>
                Add Influencer
              </Button>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Cards />
                </Grid>
                <Grid item xs={6}>
                  <Cards />
                </Grid>
                <Grid item xs={6}>
                  <Cards />
                </Grid>
                
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
