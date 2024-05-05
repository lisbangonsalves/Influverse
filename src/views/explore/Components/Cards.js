"use client";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Cards({ name, industry, country, id ,image}) {

  

  return (
    <Card
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        width: 1,
        
        maxWidth: "400px",
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
            alt={id}
            src={image}
            sx={{ width: 100, height: 100, marginRight: "20px" }}
          />
          <Box>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {name}
            </Typography>
                   <Typography>{industry.join(', ')}</Typography>
            <Typography sx={{ fontStyle: "italic", fontSize: "14px", display:"flex", justifyContent:"flex-start", alignItem:"center", marginY:"10px" }}>
             <LocationOnIcon fontSize="inherit"/>{country}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: 1, marginTop: "20px" }}>
          
        </Box>
        <Box sx={{ width: 1, marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button sx={{ width: 1 }} variant="outlined">
                View Profile
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button sx={{ width: 1 }} variant="contained">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
