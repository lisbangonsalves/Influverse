"use client";
import React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import { Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";

export default function Cards(props) {
  return (
    <Card
      sx={{
        width: 1,
        maxWidth: "100%",
        boxShadow:
          "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            width: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            {props.icon}
            <Typography sx={{marginLeft:"10px"}}>{props.followers}</Typography>
          </Box>
          <Typography>{props.increase}</Typography>
        </Box>
        {props.graph}
      </CardContent>
    </Card>
  );
}
