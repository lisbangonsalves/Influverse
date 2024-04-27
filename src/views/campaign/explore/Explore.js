import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterBar from "./Components/FilterBar";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Cards from "./Components/Cards";
import { Typography } from "@mui/material";
import axios from 'axios';

export default function ExploreCampaign() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [influencers, setInfluencers] = useState([]);
  const [influencersRecommendation, setInfluencersRecommendation] = useState([]);
// eslint-disable-next-line
  const { campaignId } = useParams();
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(
      "https://influensys.vercel.app/api/interface-influence/influencer/list",
    )
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setInfluencers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));

      axios.get(`http://127.0.0.1:8000/data/get-recommendations/${user.business[0].id}/`)
      .then((response) => {
        // Update state with the fetched data
        setInfluencersRecommendation(response.data);
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
          <Box sx={{marginBottom:"15px"}}>
            <Typography sx={{fontSize:18, fontWeight:"bold"}}>Top Recommendation for you</Typography>
          </Box>
          <Grid container spacing={2}>
          {influencersRecommendation.map(influencer => (
              <Grid item xs={6} key={influencer.id}>
                {/* Pass relevant information as props to Cards component */}
                <Cards
                  name={influencer.name}
                  industry={influencer.industry}
                  country={influencer.country}
                  id={influencer.id}
                  campaignId={campaignId}
                />
              </Grid>
            ))}
          {influencers.map(influencer => (
              <Grid item xs={6} key={influencer.id}>
                {/* Pass relevant information as props to Cards component */}
                <Cards
                  name={influencer.name}
                  industry={influencer.industry}
                  country={influencer.country}
                  id={influencer.id}
                  campaignId={campaignId}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
