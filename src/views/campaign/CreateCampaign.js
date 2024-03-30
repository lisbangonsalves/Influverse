import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
const moment = require('moment');

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [campaignDescription, setcampaignDescription] = useState("");
  const [campaignName, setcampaignName] = useState("");
  const [campaignObjectives, setcampaignObjectives] = useState("");
  const [channel, setchannel] = useState("");
  const [creativeAsset, setcreativeAsset] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [durations, setdurations] = useState("");
  const [budget, setbudget] = useState("");
  const [breakdown, setbreakdown] = useState("");
  const [targetAge, settargetAge] = useState("");
  const [targetGender, settargetGender] = useState("");
  const [targetIncomeLevel, settargetIncomeLevel] = useState("");
  const [location, setlocation] = useState("");
  const [occupation, setoccupation] = useState("");
  const [communicationChannel, setCommunicationChannel] = useState("");
  const [Interests, setInterests] = useState([]);
  const [contentFormats, setcontentFormats] = useState("");
  const [distributionChannels, setdistributionChannels] = useState("");
  const [offerDescription, setofferDescription] = useState("");
  const [offerTerms, setofferTerms] = useState("");

  const handlecampaignDescriptionChange = (event) => {
    setcampaignDescription(event.target.value);
  };
  const handlecampaignNameChange = (event) => {
    setcampaignName(event.target.value);
  };
  const handlecampaignObjectivesChange = (event) => {
    setcampaignObjectives(event.target.value);
  };
  const handlechannelChange = (event) => {
    setchannel(event.target.value);
  };
  const handlecreativeAssetChange = (event) => {
    setcreativeAsset(event.target.value);
  };
  const handledurationsChange = (event) => {
    setdurations(event.target.value);
  };
  const handlebudgetChange = (event) => {
    setbudget(event.target.value);
  };
  const handlebreakdownChange = (event) => {
    setbreakdown(event.target.value);
  };
  const handletargetAgeChange = (event) => {
    settargetAge(event.target.value);
  };
  const handletargetGenderChange = (event) => {
    settargetGender(event.target.value);
  };
  const handletargetIncomeLevelChange = (event) => {
    settargetIncomeLevel(event.target.value);
  };
  const handlelocationChange = (event) => {
    setlocation(event.target.value);
  };
  const handleoccupationChange = (event) => {
    setoccupation(event.target.value);
  };
  const handlecommunicationChannelChange = (event) => {
    setCommunicationChannel(event.target.value);
  };

  const handleInterestsChange = (event, value) => {
    setInterests(value);
  };

  const handlecontentFormatsChange = (event) => {
    setcontentFormats(event.target.value);
  };
  const handledistributionChannelsChange = (event) => {
    setdistributionChannels(event.target.value);
  };
  const handleofferDescriptionChange = (event) => {
    setofferDescription(event.target.value);
  };
  const handleofferTermsChange = (event) => {
    setofferTerms(event.target.value);
  };

  const handlestartDateChange = (newDate) => {
    const currentDate = dayjs(); // Get the current date
    // Check if newDate is before the current date
    if (newDate.isBefore(currentDate, "day")) {
      // Handle validation error for startDate
      setstartDate({
        value: newDate,
        validationError: "Start date cannot be in the past.",
      });
    } else if (endDate && newDate.isAfter(endDate)) {
      // Check if newDate is after endDate
      // Handle validation error for startDate
      setstartDate({
        value: newDate,
        validationError: "Start date must be before end date.",
      });
    } else {
      // No validation error, update startDate
      setstartDate({
        value: newDate,
      });
    }
  };

  const handleendDateChange = (newDate) => {
    const currentDate = dayjs(); // Get the current date
    // Check if newDate is before the current date
    if (newDate.isBefore(currentDate, "day")) {
      // Handle validation error for endDate
      setendDate({
        value: newDate,
        validationError: "End date cannot be in the past.",
      });
    } else if (startDate && newDate.isBefore(startDate)) {
      // Check if newDate is before startDate
      // Handle validation error for endDate
      setendDate({
        value: newDate,
        validationError: "End date must be after start date.",
      });
    } else {
      // No validation error, update endDate
      setendDate({
        value: newDate,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const user = JSON.parse(localStorage.getItem("user"));
      
      const response = await fetch(
        `https://influensys.vercel.app/api/interface-buisness/${user.business[0].slug}/campaigns/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: campaignDescription,
            name: campaignName,
            objective: campaignObjectives,
            channel_section: channel,
            creative_asset: creativeAsset,
            start_date:moment(startDate).format('YYYY-MM-DD') ,
        end_date:moment(endDate).format('YYYY-MM-DD') ,
            duration: durations,
            budget,
            breakdown,
            target_age: targetAge,
            target_gender: ["male"],
            target_income_level: targetIncomeLevel,
            location,
            occupation,
            communication_channel: communicationChannel,
            interests: Interests,
            content_formats : contentFormats,
            distribution_channels: distributionChannels,
            offer_description: offerDescription,
            offer_terms: offerTerms,
          }),
        },
      );
      if (response.ok) {
        // Handle success
        console.log("Data sent successfully!");
        navigate("/business/campaign/campaign-list");
      } else {
        // Handle error
        console.error("Error while sending data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <form onSubmit={handleSubmit}>
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
                <Typography>Create Campaign</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlecampaignNameChange}
                value={campaignName}
                sx={{ width: 1 }}
                id="Description-of-Campaign-Theme-or-Concept"
                label="Campaign Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlecampaignDescriptionChange}
                value={campaignDescription}
                sx={{ width: 1 }}
                id="Description-of-Campaign-Theme-or-Concept"
                label="Description of Campaign Theme or Concept"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                onChange={handlecampaignObjectivesChange}
                value={campaignObjectives}
                id="Campaign-Objectives"
                sx={{ width: 1 }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Campaign Objectives</em>
                </MenuItem>
                <MenuItem value={1}>Increase brand awareness</MenuItem>
                <MenuItem value={2}>Drive website traffic</MenuItem>
                <MenuItem value={3}>Generate leads</MenuItem>
                <MenuItem value={4}>Boost sales</MenuItem>
                <MenuItem value={5}>
                  Promote a specific product/service
                </MenuItem>
                <MenuItem value={6}>Other </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                id="Channel-Selection"
                sx={{ width: 1 }}
                value={channel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handlechannelChange}
              >
                <MenuItem value="">
                  <em>Channel Selection</em>
                </MenuItem>
                <MenuItem value={"social media"}>Social Media</MenuItem>
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
                value={creativeAsset}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handlecreativeAssetChange}
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Timeline</Typography>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ width: 1 }} components={["DatePicker"]}>
                  <DatePicker
                    value={startDate}
                    onChange={handlestartDateChange}
                    sx={{ width: 1 }}
                    label="Start Date"
                  />
                  {startDate.validationError && (
                    <p style={{ color: "red" }}>{startDate.validationError}</p>
                  )}
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ width: 1 }} components={["DatePicker"]}>
                  <DatePicker
                    value={endDate}
                    onChange={handleendDateChange}
                    sx={{ width: 1 }}
                    label="End Date"
                  />
                  {endDate.validationError && (
                    <p style={{ color: "red" }}>{endDate.validationError}</p>
                  )}
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4}>
              <TextField
                onChange={handledurationsChange}
                value={durations}
                sx={{ width: 1, marginTop: "8px" }}
                id="Duration"
                label="Duration"
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
                <Typography>Budget Allocation</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handlebudgetChange}
                value={budget}
                sx={{ width: 1 }}
                id="Total-Budget"
                label="Total Budget"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handlebreakdownChange}
                value={breakdown}
                sx={{ width: 1 }}
                id="Breakdown"
                label="Breakdown"
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
                onChange={handletargetAgeChange}
                value={targetAge}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
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
                value={targetGender}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handletargetGenderChange}
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
                value={targetIncomeLevel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handletargetIncomeLevelChange}
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
                value={location}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handlelocationChange}
              >
                <MenuItem value="">
                  <em>Location</em>
                </MenuItem>
                <MenuItem value={"mumbai"}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6}>
              <TextField
                onChange={handleoccupationChange}
                value={occupation}
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
                value={communicationChannel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handlecommunicationChannelChange}
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
                onChange={handleInterestsChange}
                value={Interests}
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
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Content Strategy</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handlecontentFormatsChange}
                value={contentFormats}
                sx={{ width: 1 }}
                id="Content-Formats"
                label="Content Formats"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handledistributionChannelsChange}
                value={distributionChannels}
                sx={{ width: 1 }}
                id="Distribution-Channels"
                label="Distribution Channels"
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
                <Typography>Offer or Promotion</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handleofferDescriptionChange}
                value={offerDescription}
                sx={{ width: 1 }}
                id="Description"
                label="Description"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handleofferTermsChange}
                value={offerTerms}
                sx={{ width: 1 }}
                id="Terms-and-Conditions"
                label="Terms and Conditions"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: 1,
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" type="submit">
            Make Changes
          </Button>
        </Box>
      </form>
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
