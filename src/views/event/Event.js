import React,{ useState, useEffect } from "react";
import EventCard from "./EventCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";




export default function Event() {

  const [eventsData, setEventsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
const user=JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    
    fetch(`https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/events/list`)
      .then(response => response.json())
      .then(data => setEventsData(data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);
  
  // Function to check if event date matches selected filter
const checkDateFilter = (eventDate, filter) => {
  const today = new Date();
  const event = new Date(eventDate);
  const diffTime = Math.abs(event - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  switch(filter) {
    case 'today':
      return diffDays === 0;
    case 'thisWeek':
      return diffDays <= 7;
    case 'thisMonth':
      return event.getMonth() === today.getMonth() && event.getFullYear() === today.getFullYear();
    default:
      return true;
  }
};


  // Filter events based on search term
  const filteredEvents = eventsData.filter(event => {
    const nameMatch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatch = dateFilter === 'all' ? true : checkDateFilter(event.start_date, dateFilter);
    return nameMatch && dateMatch;
  });

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
          Manage your Events
        </Typography>
        <Button
          component={NavLink}
          to="/business/event/create-event"
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
          Create New Event
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
          placeholder="Search Event"
          variant="outlined"
          sx={{ width: "75%", borderColor: "#161a30", borderWidth: "2px" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <FormControl sx={{ width: "23%" }}>
          <InputLabel id="date-filter-label">Filter by Date</InputLabel>
          <Select
            labelId="date-filter-label"
            id="date-filter-select"
            value={dateFilter}
            label="Filter by Date"
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="thisWeek">This Week</MenuItem>
            <MenuItem value="thisMonth">This Month</MenuItem>
          </Select>
        </FormControl>

      </Box>
      <Box sx={{ width: "100%", marginTop: "30px" }}>
        <Grid container spacing={2}>
        {filteredEvents.map(event => (
            <Grid key={event.id} item xs={6}>
              <EventCard
              avatar={event.image}
                title={event.name}
                description={event.description}
                location={event.country}
                date={event.start_date}
                slug={user.business[0].slug}
                userid={event.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
