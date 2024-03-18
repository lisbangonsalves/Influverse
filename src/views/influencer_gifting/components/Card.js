"use client"
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";


export default function CardEngagement() {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow:
          "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardMedia
        image={
          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        }
        sx={{
          width: "100%",
          height: 0,
          paddingBottom: "min(56.25%, 200px)",
          bgcolor: "rgba(0, 0, 0, 0.08)",
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", paddingBottom:"10px"}}>
            <Typography sx={{fontSize:"16px", fontWeight:"bold"}}>
                Axill Dcunha
            </Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-evenly"}}>
            <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", paddingBottom:"10px" , flexDirection:"column"}} >
                <Typography sx={{fontSize:"12px"}}>
                    Reach
                </Typography>
                <Typography sx={{fontWeight:"bold"}}>
                    300K
                </Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", paddingBottom:"10px" , flexDirection:"column"}} >
                <Typography sx={{fontSize:"12px"}}>
                    Avg. Likes
                </Typography>
                <Typography sx={{fontWeight:"bold"}}>
                    300K
                </Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", paddingBottom:"10px" , flexDirection:"column"}}>
                <Typography sx={{fontSize:"12px"}}>
                    Followers
                </Typography>
                <Typography sx={{fontWeight:"bold"}}>
                    300K
                </Typography>
            </Box>
            
        </Box>
      </CardContent>
      <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", paddingBottom:"10px"}} px={3} pb={3}>
        <AvatarGroup>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300?img=1" />
          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=2" />
          <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/300?img=3" />
          <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/300?img=4" />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pravatar.cc/300?img=5"
            sx={{ mr: "auto" }}
          />
        </AvatarGroup>
      </Box>
    </Card>
  );
}