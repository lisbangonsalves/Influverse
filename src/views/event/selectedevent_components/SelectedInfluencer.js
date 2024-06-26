import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function SelectedInfluencer({ influencerName, userName }) {
  // slug, event, influencerId , reloadInfluencers

  return (
    <>
      <Card
        sx={{ display: "flex", margin: "10px", backgroundColor: "#eef2f6" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image="https://images.unsplash.com/photo-1585580419885-2fab1d6dce62?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 1,
            padding: "20px",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
              {influencerName}
            </Typography>
            <Typography>{userName}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "red",
                borderColor: "red",
                "&:hover": {
                  borderColor: "red",
                },
                marginRight: "10px",
              }}
            >
              Remove
            </Button>
            <Button variant="outlined">View Profile</Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default SelectedInfluencer;
