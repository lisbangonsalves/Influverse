import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Cards from "./Components/Cards";
import { Typography } from "@mui/material";
import Lottie from 'lottie-react';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

// Import your loader animation JSON file
import loaderAnimation from './Components/loader.json';



export default function ExploreCampaign() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true); // State to track loading
  const [influencers, setInfluencers] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"))
  const [searchQuery, setSearchQuery] = useState("");
// eslint-disable-next-line
  const { campaignId } = useParams();
  const [age, setAge] = React.useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    setLoading(true);
    let url = '';
    if (age === 1) {
      url = "https://influverse-backend.onrender.com/api/interface-influence/influencer/list";
    } else if (age === 2) {
      // Recommendation based on your profile
      url = `https://influverse-backend.onrender.com/data/get-recommendations/campaign/${campaignId}/`;
    } else if (age === 3 ){
      url = `https://influverse-backend.onrender.com/data/get-recommendations/${user.business[0].id}/`;
    } else {
      url = "https://influverse-backend.onrender.com/api/interface-influence/influencer/list";
    }
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setInfluencers(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [age, campaignId]);
  

  // Function to handle search query change
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter influencers based on search query
  const filteredInfluencers = influencers.filter((influencer) =>
    influencer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <Box sx={{width:1}}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TextField
          sx={{ width: "75%" }}
          placeholder="Explore"
          id="outlined-search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box
        sx={{
          width:"23%"
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleAgeChange}
          >
            <MenuItem value={1}>All Influencer</MenuItem>
            <MenuItem value={2}>Recommendation based on Campaign</MenuItem>
            <MenuItem value={3}>Recommendation based on your profile</MenuItem>
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
        {loading ? ( // Display loader when loading is true
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5%",width:1  }}>
          <Lottie animationData={loaderAnimation} style={{ width: "60%", height: "60%" }} />
        </Box>
      ) : (
        <Box sx={{ width: 1 }}>
          <Box sx={{marginBottom:"15px"}}>
            <Typography sx={{fontSize:18, fontWeight:"bold"}}>Find Influencer for your Campaign</Typography>
          </Box>
          <Grid container spacing={2}>
          {filteredInfluencers.map((influencer) => (
                <Grid item xs={4} key={influencer.id}>
                  <Cards
                    name={influencer.name}
                    industry={influencer.industry}
                    country={influencer.country}
                    id={influencer.id}
                    campaignId={campaignId}
                    image={influencer.image}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
    )}
      </Box>
    </Box>
  );
}
