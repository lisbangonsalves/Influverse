import { Box } from "@mui/system";
import * as React from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import Section from './Seaction'

export default function Blog() {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        flexDirection:"column"
      }}
    >
      <Box
        sx={{
          width: "85%",
        }}
      >
        <Grid container columnSpacing={3} rowSpacing={4}>
          <Grid item xs={3}>
            <Card />
          </Grid>
        </Grid>
      </Box>
      <Section/>
      <Section/>
    </Box>
  );
}
