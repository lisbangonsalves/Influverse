import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";

export default function SelectedEvent() {
  return (
    <Box>
      <Card sx={{ width: 1 }}>
        <CardMedia
          component="img"
          height="300px"
          image="https://plus.unsplash.com/premium_photo-1685080293629-692fda8f3bb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
      </Card>
      <Box
        sx={{
          display: "flex",
          width: 1,
          justifyContent: "space-between",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", color: "#DA2563" ,width:"25%", justifyContent:"space-between" }}>
          <Box sx={{ display: "flex",alignItems: "center" }}>
            <LocationOnIcon  />
            <Typography>Location</Typography>
          </Box>
          <Box sx={{ display: "flex",alignItems: "center" }}>
            <CalendarMonthIcon />
            <Typography>DD-MM-YYYY</Typography>
          </Box>
          <Box sx={{ display: "flex" , alignItems: "center" }}>
            <AccessTimeIcon />
            <Typography>HH:MM</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex",width:"15%", justifyContent:"space-between" }}>
          <Button variant="outlined">Edit</Button>
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Box>
      <Typography sx={{fontSize:24}}>
        Long Event Name
      </Typography>
      <Typography>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      </Typography>
    </Box>
  );
}
