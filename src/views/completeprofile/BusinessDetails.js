import * as React from "react";

import Box from "@mui/material/Box";


import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



export default function BusinessDetails() {
  const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ width: 1, display: "flex" , marginTop:"50px" }}>
        <Grid container spacing={4} rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <TextField
            sx={{width:1}}
              id="Company-Name"
              label="Company Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Company-Registration-Number"
              label="Company Registration No"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
          <Select
          id="Industry"
          sx={{width:1}}
          value={age}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleChange}
        >
            <MenuItem value="">
            <em>Industry</em>
          </MenuItem>
          <MenuItem value={10}>Fashion</MenuItem>
          <MenuItem value={20}>Beauty</MenuItem>
          <MenuItem value={30}>Electronics</MenuItem>
          <MenuItem value={30}>Home and Furniture</MenuItem>
          <MenuItem value={30}>Sports and Outdoor</MenuItem>
          <MenuItem value={30}>Health and Wellness</MenuItem>
          <MenuItem value={30}>Technology</MenuItem>
          <MenuItem value={30}>Food and Beverage</MenuItem>
          <MenuItem value={10}>Healthcare and Pharmaceuticals</MenuItem>
          <MenuItem value={10}>Finance and Banking</MenuItem>
          <MenuItem value={10}>Travel and Hospitality</MenuItem>
          <MenuItem value={10}>Entertainment and Media</MenuItem>
          <MenuItem value={10}>Automotive</MenuItem>
          <MenuItem value={10}>Real Estate</MenuItem>
          <MenuItem value={10}>Education</MenuItem>
          <MenuItem value={10}>Non-profit and Social Causes</MenuItem>
          <MenuItem value={10}>E-commerce</MenuItem>
    
        </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
            sx={{width:1}}
              id="Address"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Country"
              label="Country"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="pin-code"
              label="pin code"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            sx={{width:1}}
              id="Company-Description"
              label="Company Description"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Number-of-Employees"
              label="Number of Employees"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Annual-Revenue"
              label="Annual Revenue"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Facebook-Username"
              label="Facebook Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Instagram-Username"
              label="Instagram Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            sx={{width:1}}
              id="Website-URL"
              label="Website URL"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Annual-Revenue"
              label="Annual Revenue"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="Annual-Revenue"
              label="Annual Revenue"
              variant="outlined"
            />
          </Grid>

          
          <Grid item xs={6}>
          <Select
          id="demo-simple-select"
          sx={{width:1}}
          value={age}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleChange}
        >
            <MenuItem value="">
            <em>Industry Type</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
  );
}
