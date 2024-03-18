import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function Account() {
  return (
    <Box sx={{ display: "flex", width: 1, backgroundColor: "white" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box className="accountimg">
            <Card>
              <CardMedia
                component="img"
                
                image="https://images.unsplash.com/photo-1603217039863-aa0c865404f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </Card>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
