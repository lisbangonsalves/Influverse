// import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Chip } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { industryTypes } from '../../data/industryTypes';
import { countries }from '../../data/countries'
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
    numberOfEmployees: '500',
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
      const response = await fetch(`https://influverse-backend.onrender.com/api/interface-buisness/buisness/${users.business[0].id}`, {
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







