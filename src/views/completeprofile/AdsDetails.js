import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function AdsDetails() {
    const [age, setAge] = React.useState('');

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
            <TextField
              sx={{ width: 1 }}
              id="Objectives"
              label="Advertising Goals : Objectives"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Typography>
                    Taget Audiances
                </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Select
          id="Age"
          sx={{width:1}}
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
          sx={{width:1}}
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
          sx={{width:1}}
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
          <Grid item xs={6}>
          <Select
          id="Location"
          sx={{width:1}}
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
            <TextField
              sx={{ width: 1 }}
              id="Interests"
              label="Interests"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Budget"
              label="Budget"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
          <Select
          id="Communication-Channels"
          sx={{width:1}}
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
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Key-Performance-Indicators"
              label="Key Performance Indicators"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Budget"
              label="Budget"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Budget"
              label="Budget"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="Budget"
              label="Budget"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
