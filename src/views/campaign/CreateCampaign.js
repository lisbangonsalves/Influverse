import * as React from 'react';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function CreateCampaign() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ width: 1, display: "flex", marginTop: "50px" }}>
        <Grid container spacing={4} rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography>
                Create Campaign
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: 1 }}
              id="Description-of-Campaign-Theme-or-Concept"
              label="Description of Campaign Theme or Concept"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              id="Campaign-Objectives"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Campaign Objectives</em>
              </MenuItem>
              <MenuItem value={1}>Increase brand awareness</MenuItem>
              <MenuItem value={2}>Drive website traffic</MenuItem>
              <MenuItem value={3}>Generate leads</MenuItem>
              <MenuItem value={4}>Boost sales</MenuItem>
              <MenuItem value={5}>Promote a specific product/service</MenuItem>
              <MenuItem value={6}>Other </MenuItem>

            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              id="Channel-Selection"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Channel Selection</em>
              </MenuItem>
              <MenuItem value={1}>Social Media</MenuItem>
              <MenuItem value={2}>Email Marketing</MenuItem>
              <MenuItem value={3}>Search Engine Marketing (SEM)</MenuItem>
              <MenuItem value={4}>Content Marketing</MenuItem>
              <MenuItem value={5}>Influencer Marketing</MenuItem>
              <MenuItem value={6}>Other </MenuItem>

            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              id="Creative-Assets"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Creative Assets</em>
              </MenuItem>
              <MenuItem value={1}>Images</MenuItem>
              <MenuItem value={2}>Videos</MenuItem>
              <MenuItem value={3}>Graphics</MenuItem>
              <MenuItem value={4}>Ad Copy</MenuItem>
              <MenuItem value={5}>Other</MenuItem>

            </Select>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography>
                Timeline
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <TextField
              sx={{ width: 1 }}
              id="Start-Date"
              label="Start Date"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ width: 1 }}
              id="End-Date"
              label="End Date"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ width: 1 }}
              id="Duration"
              label="Duration"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography>
                Budget Allocation
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Total-Budget"
              label="Total Budget"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Breakdown"
              label="Breakdown"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography>
                Target Audiances
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Select
              id="Age"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
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
              inputProps={{ 'aria-label': 'Without label' }}
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
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Income Level</em>
              </MenuItem>
              <MenuItem value={10}>Less than ₹3,00,000 (3 lakh) per year</MenuItem>
              <MenuItem value={20}>₹3,00,001 - ₹7,00,000 (3-7 lakhs) per year</MenuItem>
              <MenuItem value={30}>₹7,00,001 - ₹15,00,000 (7-15 lakhs) per year</MenuItem>
              <MenuItem value={30}>₹15,00,001 - ₹30,00,000 (15-30 lakhs) per year</MenuItem>
              <MenuItem value={30}>More than ₹30,00,000 (30 lakhs) per year</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Select
              id="Location"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
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
              inputProps={{ 'aria-label': 'Without label' }}
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
            <Select
              id="Interest"
              sx={{ width: 1 }}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Interest</em>
              </MenuItem>
              <MenuItem value={1}>Parenting Tips and Advice</MenuItem>
              <MenuItem value={2}>Family Activities</MenuItem>
              <MenuItem value={3}>Child Development</MenuItem>
              <MenuItem value={4}>Pregnancy and Childbirth</MenuItem>
              <MenuItem value={5}>Parenting Blogs</MenuItem>
              <MenuItem value={6}>Environmental Conservation</MenuItem>
              <MenuItem value={7}>Human Rights</MenuItem>
              <MenuItem value={8}>Social Justice</MenuItem>
              <MenuItem value={9}>Animal Welfare</MenuItem>
              <MenuItem value={10}>Community Service</MenuItem>
              <MenuItem value={11}>Personal Finance Management</MenuItem>
              <MenuItem value={12}>Stock Market Investing</MenuItem>
              <MenuItem value={13}>Cryptocurrency</MenuItem>
              <MenuItem value={14}>Financial Planning</MenuItem>
              <MenuItem value={15}>Entrepreneurship</MenuItem>
              <MenuItem value={16}>Self-help and Motivation</MenuItem>
              <MenuItem value={17}>Goal Setting</MenuItem>
              <MenuItem value={18}>Time Management</MenuItem>
              <MenuItem value={19}>Leadership Development</MenuItem>
              <MenuItem value={20}>Public Speaking</MenuItem>
              <MenuItem value={21}>Gardening</MenuItem>
              <MenuItem value={22}>Birdwatching</MenuItem>
              <MenuItem value={23}>Camping</MenuItem>
              <MenuItem value={24}>Fishing</MenuItem>
              <MenuItem value={25}>Nature Photography</MenuItem>
              <MenuItem value={26}>Fiction</MenuItem>
              <MenuItem value={27}>Non-fiction</MenuItem>
              <MenuItem value={28}>Book Clubs</MenuItem>
              <MenuItem value={29}>Poetry</MenuItem>
              <MenuItem value={30}>Literary Events</MenuItem>
              <MenuItem value={31}>Meditation and Mindfulness</MenuItem>
              <MenuItem value={32}>Nutrition and Healthy Eating</MenuItem>
              <MenuItem value={33}>Mental Health Awareness</MenuItem>
              <MenuItem value={34}>Alternative Medicine</MenuItem>
              <MenuItem value={35}>Holistic Wellness</MenuItem>
              <MenuItem value={36}>Gadgets and Devices</MenuItem>
              <MenuItem value={37}>Coding and Programming</MenuItem>
              <MenuItem value={38}>Tech Startups</MenuItem>
              <MenuItem value={39}>Virtual Reality (VR)</MenuItem>
              <MenuItem value={40}>Artificial Intelligence (AI)</MenuItem>
              <MenuItem value={41}>Cooking and Baking</MenuItem>
              <MenuItem value={42}>Food Photography</MenuItem>
              <MenuItem value={43}>Culinary Arts</MenuItem>
              <MenuItem value={44}>Recipe Development</MenuItem>
              <MenuItem value={45}>Food Blogging</MenuItem>
              <MenuItem value={46}>Playing Instruments</MenuItem>
              <MenuItem value={47}>Singing</MenuItem>
              <MenuItem value={48}>Dance</MenuItem>
              <MenuItem value={49}>Theater</MenuItem>
              <MenuItem value={50}>Concerts and Music Festivals</MenuItem>
              <MenuItem value={51}>Video Games</MenuItem>
              <MenuItem value={52}>Board Games</MenuItem>
              <MenuItem value={53}>Esports</MenuItem>
              <MenuItem value={54}>Streaming</MenuItem>
              <MenuItem value={55}>Cosplay</MenuItem>
              <MenuItem value={56}>Painting and Drawing</MenuItem>
              <MenuItem value={57}>Photography</MenuItem>
              <MenuItem value={58}>Pottery and Ceramics</MenuItem>
              <MenuItem value={59}>DIY Projects</MenuItem>
              <MenuItem value={60}>Crafting</MenuItem>
              <MenuItem value={61}>Travel Photography</MenuItem>
              <MenuItem value={62}>Hiking and Trekking</MenuItem>
              <MenuItem value={63}>Adventure Sports</MenuItem>
              <MenuItem value={64}>Backpacking</MenuItem>
              <MenuItem value={65}>Cultural Experiences</MenuItem>
              <MenuItem value={66}>Fitness Training</MenuItem>
              <MenuItem value={67}>Running</MenuItem>
              <MenuItem value={68}>Yoga</MenuItem>
              <MenuItem value={69}>Cycling</MenuItem>
              <MenuItem value={70}>Martial Arts</MenuItem>
              <MenuItem value={71}>Makeup</MenuItem>
              <MenuItem value={72}>Skincare</MenuItem>
              <MenuItem value={73}>Fashion Design</MenuItem>
              <MenuItem value={74}>Beauty Influencers</MenuItem>
              <MenuItem value={75}>Hairstyling</MenuItem>

            </Select>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography>
              Content Strategy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Content-Formats"
              label="Content Formats"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Distribution-Channels"
              label="Distribution Channels"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography>
              Offer or Promotion
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Description"
              label="Description"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Terms-and-Conditions"
              label="Terms and Conditions"
              variant="outlined"
            />
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}
