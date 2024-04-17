import React,{ useState, useEffect } from "react";
import EventCard from "./ExploreEventCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from '@mui/material/Grid';




export default function ExploreEvent() {

  const [eventsData, setEventsData] = useState([]);
const user=JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    
    fetch(`https://influensys.vercel.app/api/interface-buisness/${user.slug}/events/list`)
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
          Explore Events
        </Typography>
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
            <Grid key={event.id} item xs={12}>
              <EventCard
                title={event.name}
                description={event.description}
                location={event.country}
                date={event.start_date}
                slug={user.slug}
                userid={event.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
