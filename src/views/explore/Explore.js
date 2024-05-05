import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

import Grid from "@mui/material/Grid";
import Cards from "./Components/Cards";

export default function Explore() {
  const [influencers, setInfluencers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("");
  
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(
      "https://influverse-backend.onrender.com/api/interface-influence/influencer/list",
    )
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setInfluencers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  //Filter influencers based on search query and country
  const filteredInfluencers = influencers.filter((influencer) => {
    return (
      influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (country === "" || influencer.country === country)
    );
  });
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TextField
          sx={{ width: "75%" }}
          placeholder="Search by name"
          variant="outlined"
          onChange={handleSearchQueryChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{width:"23%"}}>
        <FormControl fullWidth>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country-select"
            value={country}
            onChange={handleCountryChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Canada">India</MenuItem>
            {/* Add more countries as needed */}
          </Select>
        </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingTop: "20px",
          justifyContent: "space-between",
        }}
      >
       
        <Box sx={{ width: 1 }}>
          <Grid container spacing={2}>
          {filteredInfluencers.map((influencer) => (
              <Grid item xs={4} key={influencer.id}>
                <Cards
                  image={influencer.image}
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
