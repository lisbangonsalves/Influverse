import React,{ useState, useEffect } from "react";
import EventCard from "./EventCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';




export default function Event() {

  const [eventsData, setEventsData] = useState([]);
const user=JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    
    fetch(`http://127.0.0.1:8000/api/interface-influence/${user.influencer[0].slug}/events/opt-in/list`)
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
          Manage your Events
        </Typography>
        <Button
          component={NavLink}
          to="/influencer/event/explore"
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
          Explore Event
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
          sx={{ width: "75%", borderColor: "#161a30", borderWidth: "2px" }}
        />

        <FormControl sx={{ width: "22%" }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={filter}
            label="Age"
            // onChange={handleChange}
          >
            <FormGroup>
              <MenuItem value={10}>
                <FormControlLabel control={<Checkbox />} label="Label" />
              </MenuItem>
              <MenuItem value={20}>
                <FormControlLabel control={<Checkbox />} label="Required" />
              </MenuItem>
              <MenuItem value={30}>
                <FormControlLabel control={<Checkbox />} label="Required" />
              </MenuItem>
            </FormGroup>
          </Select>
        </FormControl>
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
