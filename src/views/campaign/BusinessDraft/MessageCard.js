import React from 'react'
import {  Card, Typography, Divider } from "@mui/material";
// import { Box } from "@mui/system";


export default function MessageCard({message, name}) {
  return (
    <Card sx={{padding:"20px", marginY:"10px"}}>
    
      <Typography sx={{fontSize:20, fontWeight:"bold"}}>
        Message From {name}
      </Typography>

    <Divider sx={{marginY:"10px"}}/>
    <Typography sx={{fontSize:14}}>
    {message}
    </Typography>
  </Card>
  )
}
