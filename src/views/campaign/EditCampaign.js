import * as React from "react";
import Box from "@mui/material/Box";
import { Typography,Divider } from "@mui/material";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";
import axios from "axios";
const moment = require('moment');
import Web3 from 'web3';
import Web3MarketingSuiteContract from '../../contracts/Web3MarketingSuite.json';
import { Interest } from "views/data/interest";
import { countries } from "views/data/countries";
import { FormControl, InputLabel } from "@mui/material";




const ImageButton = styled("label")(({ theme }) => ({
  position: "relative",
  height: 200,
  width: 200,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid",
  borderColor: theme.palette.primary.main,
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));


export default function CreateCampaign() {
  const navigate = useNavigate();
  const navigater = useNavigate();
  const { campaignId } = useParams();
  const [campaignData, setcampaignData] = useState(null); 
  console.log(campaignData)
  const userx = JSON.parse(localStorage.getItem("user"));
  

  useEffect(() => {
    // Fetch event data from the API
    axios
      .get(
        `https://influverse-backend.onrender.com/api/interface-buisness/${userx.business[0].slug}/campaigns/${campaignId}`,
      )
      .then((response) => {
        setcampaignData(response.data); // Update state with fetched data
        navigater(`/business/campaign/edit-campaign/${campaignId}`);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, [campaignId, userx.slug , navigater]);


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
  const [eventCountry, setEventCountry] = useState();
  const [occupation, setoccupation] = useState("");
  const [communicationChannel, setCommunicationChannel] = useState("");
  const [Interests, setInterests] = useState([]);
  const [contentFormats, setcontentFormats] = useState("");
  const [distributionChannels, setdistributionChannels] = useState("");
  const [offerDescription, setofferDescription] = useState("");
  const [offerTerms, setofferTerms] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (campaignData) {
      setcampaignName(campaignData.name);
      setcampaignDescription(campaignData.description);
      setcampaignObjectives(campaignData.objectives);
      setchannel(campaignData.channel);
      setcreativeAsset(campaignData.creativeAsset);
      setstartDate(dayjs(campaignData.startDate));
      setendDate(dayjs(campaignData.endDate));
      setdurations(campaignData.durations);
      setbudget(campaignData.budget);
      setbreakdown(campaignData.breakdown);
      settargetAge(campaignData.targetAge);
      settargetGender(campaignData.targetGender);
      settargetIncomeLevel(campaignData.targetIncomeLevel);
      setEventCountry(campaignData.country);
      setoccupation(campaignData.occupation);
      setCommunicationChannel(campaignData.communicationChannel);
      setInterests(campaignData.interests);
      setcontentFormats(campaignData.contentFormats);
      setdistributionChannels(campaignData.distributionChannels);
      setofferDescription(campaignData.offerDescription);
      setofferTerms(campaignData.offerTerms);
      setMessage(campaignData.message);
    }
  }, [campaignData]);


  const handlecampaignDescriptionChange = (event) => {
    setcampaignDescription(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
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
  const handleCountryChange = (event) => {
    const value = event.target.value;
    setEventCountry((prevState) => ({
      ...prevState,
      country: value,
    }));
    // Do something with the selected country
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

  const [image, setImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const user = JSON.parse(localStorage.getItem("user"));
      const formData = new FormData();
      formData.append('image', event.target['image-upload'].files[0]);
    formData.append('description', campaignDescription);
    formData.append('name', campaignName);
    formData.append('objective', campaignObjectives);
    formData.append('channel_section', channel);
    formData.append('creative_asset', creativeAsset);
    formData.append('start_date', moment(startDate).format('YYYY-MM-DD'));
    formData.append('end_date', moment(endDate).format('YYYY-MM-DD'));
    formData.append('duration', durations);
    formData.append('budget', budget);
    formData.append('remaining_budget', budget);
    formData.append('breakdown', breakdown);
    formData.append('target_age', targetAge);
    formData.append('target_gender', 'male'); // assuming target_gender is a single value
    formData.append('target_income_level', targetIncomeLevel);
    formData.append('country', eventCountry.country);
    formData.append('occupation', occupation);
    formData.append('communication_channel', communicationChannel);
    formData.append('interests', JSON.stringify(Interests));
    formData.append('content_formats', JSON.stringify(contentFormats));
    formData.append('distribution_channels', JSON.stringify(distributionChannels));
    formData.append('offer_description', offerDescription);
    formData.append('offer_terms', offerTerms);
    formData.append('message', message);

      
      const response = await fetch(
        `https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/campaigns/create`,
        {
          method: "POST",
          body:  formData
        },
      );
      if (response.ok) {
        // Connect to the Ethereum blockchain
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(
          Web3MarketingSuiteContract.abi,
          "0xCd5D3edE163044d653454eAB6d9AdFc9AdD9fEE0",
        );
        const accounts = await web3.eth.getAccounts();
        const defaultAccount = accounts[0];
      const createCampaignTx = await contract.methods.createCampaign(campaignName, user.business[0].name).send({ from: defaultAccount });

      console.log('Campaign created:', createCampaignTx);
        // Handle success
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
        <Box sx={{ width: 1, display: "flex", marginTop: "10px" }}>
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
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 24, fontWeight: "bold", marginLeft: "5px" }}>Create Campaign</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
                <ImageButton htmlFor="image-upload">
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
      
                  />
                  <ImageSrc
                    style={{
                      backgroundImage: `url(${image})`,
                     
                    }}
                  />
                  <Image>
                    <CameraAltIcon />
                  </Image>
                </ImageButton>
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
                <MenuItem value={"Increase brand awareness"}>Increase brand awareness</MenuItem>
                <MenuItem value={"Drive website traffic"}>Drive website traffic</MenuItem>
                <MenuItem value={"Generate leads"}>Generate leads</MenuItem>
                <MenuItem value={"Boost sales"}>Boost sales</MenuItem>
                <MenuItem value={"Promote a specific product/service"}>
                  Promote a specific product/service
                </MenuItem>
                <MenuItem value={"Other"}>Other </MenuItem>
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
                <MenuItem value={"Email Marketing"}>Email Marketing</MenuItem>
                <MenuItem value={"Search Engine Marketing (SEM)"}>Search Engine Marketing (SEM)</MenuItem>
                <MenuItem value={"Content Marketing"}>Content Marketing</MenuItem>
                <MenuItem value={"Influencer Marketing"}>Influencer Marketing</MenuItem>
                <MenuItem value={"Other"}>Other </MenuItem>
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
                <MenuItem value={"Images"}>Images</MenuItem>
                <MenuItem value={"Videos"}>Videos</MenuItem>
                <MenuItem value={"Graphics"}>Graphics</MenuItem>
                <MenuItem value={"Ad Copy"}>Ad Copy</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
            <Divider />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Timeline</Typography>
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
            <Divider />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Budget Allocation</Typography>
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
            <Divider />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Target Audiances</Typography>
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
                <MenuItem value={"0-10"}>0-10</MenuItem>
                <MenuItem value={"10-20"}>10-20</MenuItem>
                <MenuItem value={"20-30"}>20-30</MenuItem>
                <MenuItem value={"30-40"}>30-40</MenuItem>
                <MenuItem value={"40-50"}>40-50</MenuItem>
                <MenuItem value={"50-60"}>50-60</MenuItem>
                <MenuItem value={"Above 60"}>Above 60</MenuItem>
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
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
                <MenuItem value={"--"}>--</MenuItem>
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
                <MenuItem value={"Less than ₹3,00,000 (3 lakh) per year"}>
                  Less than ₹3,00,000 (3 lakh) per year
                </MenuItem>
                <MenuItem value={"₹3,00,001 - ₹7,00,000 (3-7 lakhs) per year"}>
                  ₹3,00,001 - ₹7,00,000 (3-7 lakhs) per year
                </MenuItem>
                <MenuItem value={"₹7,00,001 - ₹15,00,000 (7-15 lakhs) per year"}>
                  ₹7,00,001 - ₹15,00,000 (7-15 lakhs) per year
                </MenuItem>
                <MenuItem value={"₹15,00,001 - ₹30,00,000 (15-30 lakhs) per year"}>
                  ₹15,00,001 - ₹30,00,000 (15-30 lakhs) per year
                </MenuItem>
                <MenuItem value={"More than ₹30,00,000 (30 lakhs) per year"}>
                  More than ₹30,00,000 (30 lakhs) per year
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
            <FormControl fullWidth>
                <InputLabel id="country-label">Select Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  value={eventCountry}
                  label="Select Country"
                  onChange={handleCountryChange}
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <TextField
                onChange={handleoccupationChange}
                value={occupation}
                sx={{ width: 1 }}
                id="Occupation"
                label="Occupation"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
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
                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                <MenuItem value={"Facebook"}>Facebook</MenuItem>
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
            <Divider />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Content Strategy</Typography>
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
            <Divider />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Offer or Promotion</Typography>
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
            <Grid item xs={12}>
            <Divider />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }} >Message for Influencer</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleMessageChange}
                value={message}
                sx={{ width: 1 }}
                id="Message"
                label="Message"
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
