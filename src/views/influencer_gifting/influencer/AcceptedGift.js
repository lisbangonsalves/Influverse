import React,{ useState, useEffect } from "react";
import EventCard from "./AcceptedGiftCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';




export default function Event() {

  const [eventsData, setEventsData] = useState([]);
const user=JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    
    fetch(`https://influverse-backend.onrender.com/api/interface-influence/${user.influencer[0].slug}/events/opt-in/list`)
      .then(response => response.json())
      .then(data => setEventsData(data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", color: "#161a30" }}
        >
          Gifts Received
        </Typography>
        <Button
          component={NavLink}
          to="/influencer/gifting/request"
          sx={{
            color: "white",
            backgroundColor: "#161a30",
            borderColor: "#161a30",
            borderWidth: "2px",
            "&:hover": {
              backgroundColor: "white",
              color: "#161a30",
              borderColor: "#161a30",
              borderWidth: "2px",
            },
          }}
          variant="outlined"
        >
          Gift Requests
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Explore Influvencers"
          variant="outlined"
          sx={{ width: 1, borderColor: "#161a30", borderWidth: "2px" }}
        />
      </Box>
      <Box sx={{ width: "100%", marginTop: "30px" }}>
        <Grid container spacing={2}>
        {eventsData.map(event => (
            <Grid key={event.id} item xs={6}>
              <EventCard
                title={event.event.name}
                description={event.event.description}
                location={event.event.country}
                date={event.event.start_date}
                slug={user.influencer[0].slug}
                userid={event.event.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
