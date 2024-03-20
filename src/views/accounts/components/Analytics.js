import { Box } from "@mui/system";
import React from "react";
import Cards from "./Cards";
import { Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CardGraph from "./CardGraph";
import FakeFollowers from "./FakeFollowers";

export default function Analytics() {
    const data = [
        { id: 1, followers: '3.4M', increase: '+6.2%', icon: <InstagramIcon/>, graph:<CardGraph/> },
        { id: 2, followers: '3.4M', increase: '+6.2%', icon: <FacebookIcon/>, graph:<CardGraph/> }
      ];
  return (
    <Box>
      <Grid container spacing={2}>
       
        {data.map(item => (
        <Grid item key={item.id} xs={6} >
            <Cards key={item.id} followers={item.followers} icon={item.icon} graph={item.graph} increase={item.increase}/>
            </Grid>
      ))}
      <Grid item xs={12}>
        <FakeFollowers/>
      </Grid>
      </Grid>
    </Box>
  );
}
