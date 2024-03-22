import React from "react";
import { Box } from "@mui/system";
import Card from "./Card";
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import './blog.css'

export default function Seaction() {
  return (
    <Box
      sx={{
        marginTop:"40px",
        width: "85%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom:"30px"
        }}
      >
        <Typography className="our-font" sx={{color:"white", fontSize:"24px"}} >
            Fashion
        </Typography>
        <Button className="our-font"  variant="text" sx={{color:"white"}}>View more fashion Content</Button>
      </Box>
      <Box
        sx={{
          width: 1,
        }}
      >
        <Grid container columnSpacing={3} rowSpacing={4}>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}>
            <Card />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
