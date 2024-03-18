import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  borderRadius: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
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

export default function BasicDetails() {
  // const [age, setAge] = React.useState('');

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
        <ImageButton
          focusRipple
          style={{
            width: "200px",
            borderRadius: "100px",
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1684751595365-eeaecf4972f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
              borderRadius: "100px",
            }}
          />

          <Image>
            <CameraAltIcon />
          </Image>
        </ImageButton>
      </Box>
      <Box sx={{ width: 1, display: "flex" , marginTop:"50px" }}>
        <Grid container spacing={4} rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <TextField
            sx={{width:1}}
              id="Full-Name"
              label="Full Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            sx={{width:1}}
              id="Email-Address"
              label="Email Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            sx={{width:1}}
              id="Phone-Number"
              label="Phone Number"
              variant="outlined"
            />
          </Grid>
          {/* <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{width:1}}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={6}>
          <Select
          id="demo-simple-select"
          sx={{width:1,  marginY:"20px"}}
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
          </Grid> */}
          
        </Grid>
      </Box>
    </Box>
  );
}
