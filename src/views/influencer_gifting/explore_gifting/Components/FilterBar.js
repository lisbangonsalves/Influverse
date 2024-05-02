import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

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

export default function FilterBar() {

  const [age, setAge] = React.useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

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
      <Box
        sx={{
          backgroundColor: "#f4f8fb",
          padding: "12px",
          marginBottom: "14px",
        }}
      >
        <FormGroup>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Social Platform
          </Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Instagram"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Facebook"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Twitter"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Youtube"
          />
        </FormGroup>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f4f8fb",
          padding: "12px",
          marginBottom: "14px",
        }}
      >
        <Typography sx={{fontSize: "14px", fontWeight: "bold", marginBottom:'14px'}}>
          Sort By
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleAgeChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{
          backgroundColor: "#f4f8fb",
          padding: "12px",
          marginBottom: "14px",
        }}>
      <FormControl sx={{ width: 1 }}>
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
    </Box>
  );
}
