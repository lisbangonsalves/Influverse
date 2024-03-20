"use client";
import React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import FakeFollowersPie from "./FakeFollowersPie"
import { Typography } from "@mui/material";
// import { Typography } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import { Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";

export default function FakeFollowers() {
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
        <Box>
            <Box>
                <Typography sx={{fontSize:"16px"}}>
                    Fake Followers
                </Typography>
            </Box>
            <Box>
                <FakeFollowersPie/>
            </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
