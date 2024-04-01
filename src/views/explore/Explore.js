import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterBar from "./Components/FilterBar";

import Grid from '@mui/material/Grid';
import Cards from "./Components/Cards";




export default function Explore() {
  

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          sx={{ width: 1 }}
          placeholder="Explore"
          id="outlined-search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
       
      </Box>
      <Box sx={{display:"flex", paddingTop:"20px", justifyContent:'space-between'}}>
        <Box sx={{ width:"28%", backgroundColor:"white", padding:'20px'}}>
          <FilterBar/>
        </Box>
        <Box sx={{ width:"70%"}}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        
      </Grid>
        </Box>
      </Box>
    </Box>
  );
}
