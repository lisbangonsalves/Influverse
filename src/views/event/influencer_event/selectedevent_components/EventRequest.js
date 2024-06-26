import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';



function EventRequest() {
  return (
    <Card sx={{ display: 'flex' }}>
    <CardMedia
      component="img"
      sx={{ width: 100 }}
      image="https://images.unsplash.com/photo-1585580419885-2fab1d6dce62?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', justifyContent:"space-between" , width:1, padding:"20px" }}>
      <Box>
        <Typography sx={{fontWeight:"bold", fontSize:16}}>
            Influencer Name
        </Typography>
        <Typography>
            Influencer Name
        </Typography>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"16%"}}>
      <Button
            variant="outlined"
            sx={{
              color: "red",
              borderColor: "red",
              "&:hover": {
                borderColor: "red",
              },
            }}
          >
            Reject
          </Button>
          <Button variant="outlined">Accept</Button>
      </Box>
    </Box>
  </Card>
  )
}

export default EventRequest
