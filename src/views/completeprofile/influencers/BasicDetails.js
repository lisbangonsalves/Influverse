// import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Chip } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import React, { useState } from 'react';
import {FormControl, InputLabel } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { styled } from "@mui/material/styles";
const ImageButton = styled("label")(({ theme }) => ({
  position: "relative",
  height: 200,
  width: 200,
  borderRadius: "50%",
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



export default function BusinessDetails() {
  
  
 
const users = JSON.parse(localStorage.getItem("user"));
// const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    name: users.influencer[0].name,
    email:users.influencer[0].email,
    image:users.influencer[0].image,
    crn: users.influencer[0].crn,
    industry: users.influencer[0].industry,
    address: users.influencer[0].address,
    country: users.influencer[0].country,
    pincode: users.influencer[0].pincode,
    description: users.influencer[0].description,
    phone:users.influencer[0].phone,
    numberOfEmployees: '',
    annual_revenue: users.influencer[0].annual_revenue,
    facebook: users.influencer[0].facebook,
    instagram: users.influencer[0].instagram,
    website: users.influencer[0].website
  });
  
   
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormData(prevState => ({
        ...prevState,
        image:URL.createObjectURL(file)
      }))
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  const handleEmailChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleIndustryTypeChange = (event, newValue) => {
    setFormData(prevState => ({
      ...prevState,
      industry: newValue
    }));
  };

  

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setFormData(prevState => ({
      ...prevState,
      country: value
    }));
    // Do something with the selected country
  };

  const handleSubmit = async (e) => {
     const user = JSON.parse(localStorage.getItem("user"));

  // Check if access token exists
  if (user) {
    // Use the access token for further operations
    console.log("user:", user);
  } else {
    console.log("user not found in local storage.");
  }

    e.preventDefault();

    try {
      console.log(JSON.stringify(formData))
      const response = await fetch(`http://127.0.0.1:8000/api/interface-influence/influencer/${user.influencer[0].id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(response)
      if (response.ok) {
        // Handle success response
        console.log('Form data submitted successfully');
      } else {
        // Handle error response
        console.error('Failed to submit form data');
      
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                backgroundImage: `url(${formData.image})`,
                borderRadius: "50%",
              }}
            />
            <Image>
              <CameraAltIcon />
            </Image>
          </ImageButton>
        </Box>
        <Box sx={{ width: 1, display: "flex", marginTop: "50px" }}>
          <Grid container spacing={4} rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="name"
                label="Full Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                sx={{ width: 1 }}
                id="email"
                label="Email Address"
                variant="outlined"
                value={formData.email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="description"
                value={formData.description}
                onChange={handleChange}
                label="Description"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                sx={{ width: 1 }}
                multiple
                id="industryType"
                options={industryTypes.map((option) => option.title)}
                value={formData.industry}
                onChange={handleIndustryTypeChange}
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
                    placeholder="Industry Type"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="description"
                value={formData.phone}
                onChange={handleChange}
                label="phone"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="address"
                label="Address"
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
        <InputLabel id="country-label">Select Country</InputLabel>
        <Select
          labelId="country-label"
          id="country"
          value={formData.country}
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
                id="pincode"
                label="Pin Code"
                variant="outlined"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </Grid>
            
            {/* <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleChange}
                label="Number of Employees"
                variant="outlined"
              />
            </Grid> */}
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="annual_revenue"
                value={formData.annual_revenue}
                onChange={handleChange}
                label="Annual Revenue"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="facebook"
                value={formData.facebook}
                onChange={handleChange}
                label="Facebook Username"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="instagram"
                value={formData.instagram}
                onChange={handleChange}
                label="Instagram Username"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="website"
                value={formData.website}
                onChange={handleChange}
                label="Website URL"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: 1, marginTop: '20px', display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button variant="contained" type="submit">
            Make Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
}





const industryTypes = [
  { title: "Fashion" },
  { title: "Beauty" },
  { title: "Electronics" },
  { title: "Home and Furniture" },
  { title: "Sports and Outdoor" },
  { title: "Health and Wellness" },
  { title: "Technology" },
  {
    title: "Food and Beverage",
  },
  { title: "Healthcare and Pharmaceuticals" },
  { title: "Finance and Banking" },
  {
    title: "Travel and Hospitality",
  },
  {
    title: "Entertainment and Media",
  },
  { title: "Automotive" },
  { title: "Real Estate" },
  {
    title: "Education",
  },
  { title: "Non-profit and Social Causes" },
  { title: "E-commerce" },
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
