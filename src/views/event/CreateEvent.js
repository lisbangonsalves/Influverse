import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
// import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function CreateEvent() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ width: 1, display: "flex", marginTop: "50px" }}>
        <Grid
          container
          spacing={4}
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Create Event</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: 1 }}
              id="Event-Name"
              label="Event Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: 1 }}
              id="Event-Description"
              label="Event Description"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: 1 }}
              id="Event-Goals-and-Objectives"
              label="Event Goals and Objectives"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Select
              id="Event-Type"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Event Type</em>
              </MenuItem>
              <MenuItem value={1}>Product Launch</MenuItem>
              <MenuItem value={2}>Press Conference</MenuItem>
              <MenuItem value={3}>Trade Show</MenuItem>
              <MenuItem value={4}>Webinar</MenuItem>
              <MenuItem value={5}>Workshop</MenuItem>
              <MenuItem value={6}>Networking Event</MenuItem>
              <MenuItem value={7}>Other</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Event-Date"
              label="Event Date"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Event-Time"
              label="Event Time"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Event-Duration"
              label="Event Duration"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              id="Event-Location"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Event Location</em>
              </MenuItem>
              <MenuItem value={1}>Social Media</MenuItem>
              <MenuItem value={2}>Email Marketing</MenuItem>
              <MenuItem value={3}>Search Engine Marketing (SEM)</MenuItem>
              <MenuItem value={4}>Content Marketing</MenuItem>
              <MenuItem value={5}>Influencer Marketing</MenuItem>
              <MenuItem value={6}>Other </MenuItem>
            </Select>
          </Grid>
          

          <Grid item xs={12}>
            <TextField
              sx={{ width: 1 }}
              id="Budget-and-Resources"
              label="Budget and Resources"
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Target Audiances</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Select
              id="Age"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Age</em>
              </MenuItem>
              <MenuItem value={10}>0-10</MenuItem>
              <MenuItem value={20}>10-20</MenuItem>
              <MenuItem value={30}>20-30</MenuItem>
              <MenuItem value={30}>30-40</MenuItem>
              <MenuItem value={30}>40-50</MenuItem>
              <MenuItem value={30}>50-60</MenuItem>
              <MenuItem value={30}>Above 60</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Select
              id="Gender"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Gender</em>
              </MenuItem>
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
              <MenuItem value={30}>--</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Select
              id="Income-Level"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Income Level</em>
              </MenuItem>
              <MenuItem value={10}>
                Less than ₹3,00,000 (3 lakh) per year
              </MenuItem>
              <MenuItem value={20}>
                ₹3,00,001 - ₹7,00,000 (3-7 lakhs) per year
              </MenuItem>
              <MenuItem value={30}>
                ₹7,00,001 - ₹15,00,000 (7-15 lakhs) per year
              </MenuItem>
              <MenuItem value={30}>
                ₹15,00,001 - ₹30,00,000 (15-30 lakhs) per year
              </MenuItem>
              <MenuItem value={30}>
                More than ₹30,00,000 (30 lakhs) per year
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Select
              id="Location"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Location</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Occupation"
              label="Occupation"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              id="Communication-Channels"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Communication Channels</em>
              </MenuItem>
              <MenuItem value={10}>Instagram</MenuItem>
              <MenuItem value={20}>Facebook</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
          <Autocomplete
                sx={{ width: 1 }}
                multiple
                id="tags-filled"
                options={Interest.map((option) => option.title)}
                
                freeSolo
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      key={index}
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    sx={{ width: 1 }}
                    
                    placeholder="Interest"
                  />
                )}
              />
          </Grid>
          
        </Grid>
      </Box>
    </Box>
  );
}



const Interest = [
  { title: "Parenting Tips and Advice" },
  { title: "Family Activities" },
  { title: "Child Development" },
  { title: "Pregnancy and Childbirth" },
  { title: "Parenting Blogs" },
  { title: "Environmental Conservation" },
  { title: "Human Rights" },
  { title: "Social Justice" },
  { title: "Animal Welfare" },
  { title: "Community Service" },
  { title: "Personal Finance Management" },
  { title: "Stock Market Investing" },
  { title: "Cryptocurrency" },
  { title: "Financial Planning" },
  { title: "Entrepreneurship" },
  { title: "Self-help and Motivation" },
  { title: "Goal Setting" },
  { title: "Time Management" },
  { title: "Leadership Development" },
  { title: "Public Speaking" },
  { title: "Gardening" },
  { title: "Birdwatching" },
  { title: "Camping" },
  { title: "Fishing" },
  { title: "Nature Photography" },
  { title: "Fiction" },
  { title: "Non-fiction" },
  { title: "Book Clubs" },
  { title: "Poetry" },
  { title: "Literary Events" },
  { title: "Meditation and Mindfulness" },
  { title: "Nutrition and Healthy Eating" },
  { title: "Mental Health Awareness" },
  { title: "Alternative Medicine" },
  { title: "Holistic Wellness" },
  { title: "Gadgets and Devices" },
  { title: "Coding and Programming" },
  { title: "Tech Startups" },
  { title: "Virtual Reality (VR)" },
  { title: "Artificial Intelligence (AI)" },
  { title: "Cooking and Baking" },
  { title: "Food Photography" },
  { title: "Culinary Arts" },
  { title: "Recipe Development" },
  { title: "Food Blogging" },
  { title: "Playing Instruments" },
  { title: "Singing" },
  { title: "Dance" },
  { title: "Theater" },
  { title: "Concerts and Music Festivals" },
  { title: "Video Games" },
  { title: "Board Games" },
  { title: "Esports" },
  { title: "Streaming" },
  { title: "Cosplay" },
  { title: "Painting and Drawing" },
  { title: "Photography" },
  { title: "Pottery and Ceramics" },
  { title: "DIY Projects" },
  { title: "Crafting" },
  { title: "Travel Photography" },
  { title: "Hiking and Trekking" },
  { title: "Adventure Sports" },
  { title: "Backpacking" },
  { title: "Cultural Experiences" },
  { title: "Fitness Training" },
  { title: "Running" },
  { title: "Yoga" },
  { title: "Cycling" },
  { title: "Martial Arts" },
  { title: "Makeup" },
  { title: "Skincare" },
  { title: "Fashion Design" },
  { title: "Beauty Influencers" },
  { title: "Hairstyling" },
];