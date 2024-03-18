import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterBar from "./Components/FilterBar";
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Grid from '@mui/material/Grid';
import Cards from "./Components/Cards";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function Explore() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          sx={{ width: "75%" }}
          placeholder="Explore"
          id="outlined-search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl sx={{ width: "23%" }}>
          <InputLabel id="demo-multiple-checkbox-label">Filter</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{display:"flex", paddingTop:"20px", justifyContent:'space-between'}}>
        <Box sx={{ width:"28%", backgroundColor:"white", padding:'20px'}}>
          <FilterBar/>
        </Box>
        <Box sx={{ width:"70%"}}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        <Grid item xs={6}>
          <Cards/>
        </Grid>
        
      </Grid>
        </Box>
      </Box>
    </Box>
  );
}
