// import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Chip } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import React, { useState } from 'react';
import {FormControl, InputLabel } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function BusinessDetails() {
  
const users = JSON.parse(localStorage.getItem("user"));
// const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    name: users.business[0].name,
    crn: users.business[0].crn,
    industry: users.business[0].industry,
    address: users.business[0].address,
    country: users.business[0].country,
    pincode: users.business[0].pincode,
    description: users.business[0].description,
    numberOfEmployees: '',
    annual_revenue: users.business[0].annual_revenue,
    facebook: users.business[0].facebook,
    instagram: users.business[0].instagram,
    website: users.business[0].website
  });

  const handleChange = (e) => {
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
    e.preventDefault();

    try {
      console.log(JSON.stringify(formData))
      const response = await fetch(`https://influensys.vercel.app/api/interface-buisness/buisness/${users.business[0].id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

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
      <form onSubmit={handleSubmit}>
        <Box sx={{ width: 1, display: "flex", marginTop: "50px" }}>
          <Grid container spacing={4} rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="name"
                label="Company Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="crn"
                label="Company Registration No"
                variant="outlined"
                value={formData.crn}
                onChange={handleChange}
                required
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="description"
                value={formData.description}
                onChange={handleChange}
                label="Company Description"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: 1 }}
                id="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleChange}
                label="Number of Employees"
                variant="outlined"
              />
            </Grid>
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


