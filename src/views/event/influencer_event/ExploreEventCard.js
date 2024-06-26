import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function EventCard(props) {
  
  const { title, description, location, date,slug,userid } = props;
  const [requested, setRequested] = useState(false);

  const handleJoinClick = async () => {
    try {
      const response = await fetch(`https://influverse-backend.onrender.com/api/interface-influence/${slug}/event/opt-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: userid
        }),
      });
      
      if (response.ok) {
        setRequested(true); // Update state to indicate that the user has requested to join
      } else {
        // Handle error
        console.error("Failed to join event");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error:", error);
    }
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://images.unsplash.com/photo-1462078563783-650e23af549d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Live from space album cover"
      />
      
        <Box sx={{ display: "flex", flexDirection: "column", margin:"20px", width:1 }}>
          <Box sx={{display:'flex', width:1, justifyContent:"space-between", marginBottom:"10px"}}>

          <Typography sx={{fontSize:22, fontWeight:"bold"}}>
          {title}
          </Typography>
          {!requested ? (
            <Button onClick={handleJoinClick} variant="outlined" sx={{padding:0, paddingX:"10px"}}>
              Join
            </Button>
          ) : (
            <Typography sx={{ fontSize: 12, color: "#E98EAD" }}>Requested</Typography>
          )}
          
          
          </Box>
          <Typography sx={{fontSize:12, width:"75%"}}>
          {description}
          </Typography>
          <Box sx={{display:'flex', width:1, justifyContent:"space-between", marginTop:"15px"}}>
            <Box sx={{display:'flex'}}>
              <Box sx={{display:'flex', marginRight:"10px"}}>
              <LocationOnIcon sx={{fontSize:16}}/>
              <Typography sx={{fontSize:12}}>
              {location}
              </Typography>
              </Box>
              <Box sx={{display:'flex'}}>
              <CalendarMonthIcon sx={{fontSize:16}}/>
              <Typography sx={{fontSize:12}}>
              {date}
              </Typography>
              </Box>

            </Box>
            <Button component={NavLink} to={`/influencer/event/${slug}/${userid}`} variant="text" sx={{padding:0, color:"#E98EAD"}}>View Event Details</Button>
          </Box>
        </Box>
      
    </Card>
  );
}
