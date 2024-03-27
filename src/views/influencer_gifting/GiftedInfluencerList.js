import React from "react";
import Cards from "./components/Card";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function GiftedInfluencerList() {
  return (
    <Box>
      <Box sx={{paddingBottom:"20px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography sx={{fontSize:24, fontWeight:"bold"}}>
          Influencer Gifting
        </Typography>
        <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}>

        <Button variant="contained" sx={{backgroundColor:"#161A30", marginRight:"10px"}} endIcon={<CardGiftcardIcon />}>Send Gift</Button>
        <Button variant="contained" sx={{backgroundColor:"#161A30"}} endIcon={<InventoryIcon />}>Product List</Button>
        </Box>
        
      </Box>
      <Box sx={{paddingBottom:"20px", display:"flex", justifyContent:"space-between"}}>
        <TextField
          id="outlined-basic"
          placeholder="Explore Influvencers"
          variant="outlined"
          sx={{ width: "75%", borderColor: "#161a30", borderWidth: "2px" }}
        />
        <FormControl sx={{width:"22%"}}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={filter}
          label="Age"
          // onChange={handleChange}
        >
           <FormGroup>
          <MenuItem value={10}><FormControlLabel control={<Checkbox />} label="Label" /></MenuItem>
          <MenuItem value={20}><FormControlLabel control={<Checkbox />} label="Required" /></MenuItem>
          <MenuItem value={30}><FormControlLabel control={<Checkbox />} label="Required" /></MenuItem>
          </FormGroup>
        </Select>
      </FormControl>
      </Box>
      <Cards />
    </Box>
  );
}
