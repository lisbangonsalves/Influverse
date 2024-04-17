import React from 'react'
import {  Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from '@mui/material/Avatar';


export default function CommentsCard() {
  return (
    <Card sx={{padding:"10px", marginY:"10px"}}>
    <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"10px"}}>
    <Avatar alt="Remy Sharp" sx={{ width: 26, height: 26, marginRight:"10px" }} src="https://images.unsplash.com/photo-1629114695419-9cd72ac2e32c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Typography sx={{fontSize:16, fontWeight:"bold"}}>
        User Name
      </Typography>
    </Box>
    <Typography sx={{fontSize:14}}>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.
    </Typography>
  </Card>
  )
}
