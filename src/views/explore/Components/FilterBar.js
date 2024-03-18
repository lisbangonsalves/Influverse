import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
