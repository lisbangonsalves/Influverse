import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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

export default function AddProduct() {
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [specification, setSpecification] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user"))

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("image", image);
    formData.append("specification", specification);
    formData.append("price", price);

    try {
      const response = await fetch(
        `https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/product/create`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setMessage("Product added successfully.");
        // Clear form fields
        setProductName("");
        setImage("");
        setSpecification("");
        setPrice("");
      } else {
        // Handle error response
        setMessage("Failed to add product.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to add product.");
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <form onSubmit={handleSubmit}>
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
                backgroundImage: `url(${image ? URL.createObjectURL(image) : ''})`,
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
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="specification"
                label="Specification"
                variant="outlined"
                value={specification}
                onChange={(e) => setSpecification(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="price"
                label="Price"
                variant="outlined"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{display:"flex", width:1, justifyContent:"center" }}>
              <Button variant="contained" type="submit">Add Product</Button>

              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
      {message && <p>{message}</p>}
    </Box>
  );
}
