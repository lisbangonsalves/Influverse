import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterBar from "./Components/FilterBar";

import Grid from "@mui/material/Grid";
import Cards from "./Components/Cards";

export default function Explore() {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(
      "http://127.0.0.1:8000/api/interface-influence/influencer/list",
    )
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setInfluencers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
      <Box
        sx={{
          display: "flex",
          paddingTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "28%", backgroundColor: "white", padding: "20px" }}>
          <FilterBar />
        </Box>
        <Box sx={{ width: "70%" }}>
          <Grid container spacing={2}>
          {influencers.map(influencer => (
              <Grid item xs={6} key={influencer.id}>
                {/* Pass relevant information as props to Cards component */}
                <Cards
                  name={influencer.name}
                  industry={influencer.industry}
                  country={influencer.country}
                  id={influencer.id}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
