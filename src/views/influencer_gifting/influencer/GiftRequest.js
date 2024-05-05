import React,{ useState, useEffect } from "react";
import EventCard from "./GiftCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';




export default function GiftRequest() {

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
