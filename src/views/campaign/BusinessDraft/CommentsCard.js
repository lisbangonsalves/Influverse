import React from 'react'
import {  Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from '@mui/material/Avatar';


export default function CommentsCard({comment, name, image}) {
  return (
    <Card sx={{padding:"10px", marginY:"10px"}}>
    <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"10px"}}>
    <Avatar alt="Remy Sharp" sx={{ width: 26, height: 26, marginRight:"10px" }} src={image} />
      <Typography sx={{fontSize:16, fontWeight:"bold"}}>
        {name}
      </Typography>
    </Box>
    <Typography sx={{fontSize:14}}>
      {comment}
    </Typography>
  </Card>
  )
}
