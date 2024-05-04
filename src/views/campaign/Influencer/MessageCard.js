import React from 'react'
import {  Card, Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function MessageCard({message, name}) {
  return (
    <Card sx={{padding:"10px", marginY:"10px"}}>
    <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"10px"}}>
      <Typography sx={{fontSize:16, fontWeight:"bold"}}>
        Message From {name}
      </Typography>
    </Box>
    <Typography sx={{fontSize:14}}>
    {message}
    </Typography>
  </Card>
  )
}
