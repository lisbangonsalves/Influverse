import * as React from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import {FormControl, InputLabel } from '@mui/material';

export default function AdsDetails() {
  const users = JSON.parse(localStorage.getItem("nuser"));
  console.log( users?.advGoals?.country)
  const [age, setAge] = useState(users?.advGoals?.age[0] ?? "");
  const [gender, setGender] = useState(users?.advGoals?.gender[0] ?? "");
  const [incomeLevel, setIncomeLevel] = useState(users?.advGoals?.income_level[0] ?? "");
  const [occupation, setOccupation] = useState(users?.advGoals?.occupation ?? "");
  const [communicationChannel, setCommunicationChannel] = useState(users?.advGoals?.communication_channel ?? "");
  const [selectedInterests, setSelectedInterests] = useState(users?.advGoals?.selected_interests ?? []);
  const [objectives, setObjectives] = useState(users?.advGoals?.objectives ?? "");
  const [budget, setBudget] = useState(users?.advGoals?.budget ?? "");
  const [kpi, setKpi] = useState(users?.advGoals?.kpi ?? "");
  const [address, setAddress] = useState(users?.advGoals?.address ?? "");
  const [selectedCountry, setSelectedCountry] = useState(users?.advGoals?.country ?? ""); 

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('usern'));
    console.log(userData?.advGoals?.country)
    if (userData) {
      if (userData?.advGoals?.country) {
        setCountry(userData.advGoals?.country);
      }
    }
  }, []);
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleCountryChange = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    console.log('Selected country:', value);
    // Do something with the selected country
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleKpiChange = (event) => {
    setKpi(event.target.value);
  };
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };
  const handleObjectivesChange = (event) => {
    setObjectives(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleIncomeLevelChange = (event) => {
    setIncomeLevel(event.target.value);
  };

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleCommunicationChannelChange = (event) => {
    setCommunicationChannel(event.target.value);
  };

  const handleSelectedInterestsChange = (event, value) => {
    setSelectedInterests(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(
        `http://127.0.0.1:8000/api/interface-buisness/${user.business[0].slug}/goals/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            objectives,
            budget,
            age:[age],
            kpi,
            country: selectedCountry,
            gender: [gender],
            address,
            income_level: [incomeLevel],
            occupation,
            communication_channel: communicationChannel,
            selected_interests: selectedInterests,
          }),
        },
      );
      if (response.ok) {
        // Handle success
        console.log(response); // Assuming 'response' contains the data you need
        const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage
        const data = await response.json();
        // Assuming 'response.data' is the data you want to append to 'advGoals'
        user.advGoals = data;

        // Logging 'user' directly without attempting to parse it again
        console.log("testing me ", user);

        // Storing updated user back into localStorage
        localStorage.setItem("nuser", JSON.stringify(user));

        console.log("Data sent successfully!");
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
              <TextField
                sx={{ width: 1 }}
                id="Objectives"
                label="Advertising Goals : Objectives"
                variant="outlined"
                value={objectives}
                onChange={handleObjectivesChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="Budget"
                label="Budget"
                variant="outlined"
                value={budget}
                onChange={handleBudgetChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="Key-Performance-Indicators"
                label="Key Performance Indicators"
                variant="outlined"
                value={kpi}
                onChange={handleKpiChange}
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
                onChange={handleAgeChange}
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
                value={gender}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleGenderChange}
              >
                <MenuItem value="">
                  <em>Gender</em>
                </MenuItem>
                {users && users.advGoals && users.advGoals.gender && users.advGoals.gender.map((genderOption, index) => (
        <MenuItem style={{ display: 'none' }} key={index} value={genderOption}>{genderOption}</MenuItem>
      ))}
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
                <MenuItem value={"All"}>All</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                id="Income-Level"
                sx={{ width: 1 }}
                value={incomeLevel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleIncomeLevelChange}
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
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="Address"
                label="Address"
                variant="outlined"
                value={address}
                onChange={handleAddressChange}
              />
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
        <InputLabel id="country-label">Select Country</InputLabel>
        <Select
          labelId="country-label"
          id="country-select"
          value={selectedCountry}
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

            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="Occupation"
                label="Occupation"
                variant="outlined"
                value={occupation}
                onChange={handleOccupationChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                id="Communication-Channels"
                sx={{ width: 1 }}
                value={communicationChannel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleCommunicationChannelChange}
              >
                <MenuItem value="">
                  <em>Communication Channels</em>
                </MenuItem>
                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                <MenuItem value={"Facebook"}>Facebook</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                sx={{ width: 1 }}
                multiple
                id="tags-filled"
                options={Interest.map((option) => option.title)}
                value={selectedInterests}
                onChange={handleSelectedInterestsChange}
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


const countries = [
  { name: 'Afghanistan' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Antigua and Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin' },
  { name: 'Bhutan' },
  { name: 'Bolivia' },
  { name: 'Bosnia and Herzegovina' },
  { name: 'Botswana' },
  { name: 'Brazil' },
  { name: 'Brunei Darussalam' },
  { name: 'Bulgaria' },
  { name: 'Burkina Faso' },
  { name: 'Burundi' },
  { name: 'Cambodia' },
  { name: 'Cameroon' },
  { name: 'Canada' },
  { name: 'Cape Verde' },
  { name: 'Central African Republic' },
  { name: 'Chad' },
  { name: 'Chile' },
  { name: 'China' },
  { name: 'Colombia' },
  { name: 'Comoros' },
  { name: 'Congo, Democratic Republic of the' },
  { name: 'Congo, Republic of the' },
  { name: 'Costa Rica' },
  { name: "Cote d'Ivoire" },
  { name: 'Croatia' },
  { name: 'Cuba' },
  { name: 'Cyprus' },
  { name: 'Czech Republic' },
  { name: 'Denmark' },
  { name: 'Djibouti' },
  { name: 'Dominica' },
  { name: 'Dominican Republic' },
  { name: 'Ecuador' },
  { name: 'Egypt' },
  { name: 'El Salvador' },
  { name: 'Equatorial Guinea' },
  { name: 'Eritrea' },
  { name: 'Estonia' },
  { name: 'Eswatini' },
  { name: 'Ethiopia' },
  { name: 'Fiji' },
  { name: 'Finland' },
  { name: 'France' },
  { name: 'Gabon' },
  { name: 'Gambia' },
  { name: 'Georgia' },
  { name: 'Germany' },
  { name: 'Ghana' },
  { name: 'Greece' },
  { name: 'Grenada' },
  { name: 'Guatemala' },
  { name: 'Guinea' },
  { name: 'Guinea-Bissau' },
  { name: 'Guyana' },
  { name: 'Haiti' },
  { name: 'Honduras' },
  { name: 'Hungary' },
  { name: 'Iceland' },
  { name: 'India' },
  { name: 'Indonesia' },
  { name: 'Iran, Islamic Republic of' },
  { name: 'Iraq' },
  { name: 'Ireland' },
  { name: 'Israel' },
  { name: 'Italy' },
  { name: 'Jamaica' },
  { name: 'Japan' },
  { name: 'Jordan' },
  { name: 'Kazakhstan' },
  { name: 'Kenya' },
  { name: 'Korea' },
  { name: 'Korea, Republic of' },
  { name: 'Kuwait' },
  { name: 'Kyrgyzstan' },
  { name: "Lao People's Democratic Republic" },
  { name: 'Latvia' },
  { name: 'Lebanon' },
  { name: 'Lesotho' },
  { name: 'Liberia' },
  { name: 'Libya' },
  { name: 'Liechtenstein' },
  { name: 'Lithuania' },
  { name: 'Luxembourg' },
  { name: 'Madagascar' },
  { name: 'Malawi' },
  { name: 'Malaysia' },
  { name: 'Maldives' },
  { name: 'Mali' },
  { name: 'Malta' },
  { name: 'Marshall Islands' },
  { name: 'Mauritania' },
  { name: 'Mauritius' },
  { name: 'Mexico' },
  { name: 'Micronesia, Federated States of' },
  { name: 'Moldova, Republic of' },
  { name: 'Monaco' },
  { name: 'Mongolia' },
  { name: 'Montenegro' },
  { name: 'Morocco' },
  { name: 'Mozambique' },
  { name: 'Myanmar' },
  { name: 'Namibia' },
  { name: 'Nauru' },
  { name: 'Nepal' },
  { name: 'Netherlands' },
  { name: 'New Zealand' },
  { name: 'Nicaragua' },
  { name: 'Niger' },
  { name: 'Nigeria' },
  { name: 'North Macedonia' },
  { name: 'Norway' },
  { name: 'Oman' },
  { name: 'Pakistan' },
  { name: 'Palau' },
  { name: 'Panama' },
  { name: 'Papua New Guinea' },
  { name: 'Paraguay' },
  { name: 'Peru' },
  { name: 'Philippines' },
  { name: 'Poland' },
  { name: 'Portugal' },
  { name: 'Qatar' },
  { name: 'Romania' },
  { name: 'Russian Federation' },
  { name: 'Rwanda' },
  { name: 'Saint Kitts and Nevis' },
  { name: 'Saint Lucia' },
  { name: 'Saint Vincent and the Grenadines' },
  { name: 'Samoa' },
  { name: 'San Marino' },
  { name: 'Sao Tome and Principe' },
  { name: 'Saudi Arabia' },
  { name: 'Senegal' },
  { name: 'Serbia' },
  { name: 'Seychelles' },
  { name: 'Sierra Leone' },
  { name: 'Singapore' },
  { name: 'Slovakia' },
  { name: 'Slovenia' },
  { name: 'Solomon Islands' },
  { name: 'Somalia' },
  { name: 'South Africa' },
  { name: 'South Sudan' },
  { name: 'Spain' },
  { name: 'Sri Lanka' },
  { name: 'Sudan' },
  { name: 'Suriname' },
  { name: 'Sweden' },
  { name: 'Switzerland' },
  { name: 'Syrian Arab Republic' },
  { name: 'Taiwan' },
  { name: 'Tajikistan' },
  { name: 'Tanzania, United Republic of' },
  { name: 'Thailand' },
  { name: 'Timor-Leste' },
  { name: 'Togo' },
  { name: 'Tonga' },
  { name: 'Trinidad and Tobago' },
  { name: 'Tunisia' },
  { name: 'Turkey' },
  { name: 'Turkmenistan' },
  { name: 'Tuvalu' },
  { name: 'Uganda' },
  { name: 'Ukraine' },
  { name: 'United Arab Emirates' },
  { name: 'United Kingdom' },
  { name: 'United States' },
  { name: 'Uruguay' },
  { name: 'Uzbekistan' },
  { name: 'Vanuatu' },
  { name: 'Vatican City' },
  { name: 'Venezuela' },
  { name: 'Vietnam' },
  { name: 'Yemen' },
  { name: 'Zambia' },
  { name: 'Zimbabwe' }
];
