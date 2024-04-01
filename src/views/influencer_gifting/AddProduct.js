import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const ImageButton = styled("label")(({ theme }) => ({
  position: "relative",
  height: 200,
  width: 200,
  borderRadius: "10%",
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

export default function BasicDetails() {
// console.log(props.data.business[0].name)
  const [image, setImage] = useState("https://images.unsplash.com/photo-1556764900-fa065610b0e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <Box sx={{ width: 1 }}>
      <form >
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
                backgroundImage: `url(${image})`,
                borderRadius: "10%",
              }}
            />
            <Image>
              <CameraAltIcon />
            </Image>
          </ImageButton>
        </Box>
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
                id="name"
                label="Product Name"
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="specification"
                label="Specification"
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="price"
                label="Price"
                variant="outlined"
    
              />
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
