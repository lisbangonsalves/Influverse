import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";

const ImageButton = styled("label")(({ theme }) => ({
  position: "relative",
  height: 200,
  width: 200,
  borderRadius: "50%",
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

const users = JSON.parse(localStorage.getItem("user"));
const [name, setFullName] = useState(users?.business[0].name ?? "");
const [email, setEmail] = useState(users?.business[0].email ?? "");
const [phoneNumber, setPhoneNumber] = useState(users?.business[0].phone ?? "");
  const [image, setImage] = useState(users?.business[0].image ?? "");

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    const user = JSON.parse(localStorage.getItem("user"));

      // Check if access token exists
      if (user) {
        // Use the access token for further operations
        console.log("user:", user);
      } else {
        console.log("user not found in local storage.");
      }

    event.preventDefault(); // Prevent default form submission

    // Here you can add the logic to send a POST request to your server
    // along with fullName, email, phoneNumber, and image
    const formData = new FormData();
    // formData.append("detail" , "this is")
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("image", event.target['image-upload'].files[0]);
    // const headers = {
    //   "Content-Type": "application/json",
    //   "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMzkwNTk3LCJqdGkiOiI2ZDQxZGE1NTVmMmQ0ZmIwOTJkNWI1OTg4M2QwYmU4YSIsInVzZXJfaWQiOjR9.P_oEQhrV-lQdGlvjSYFzqAqZlEmcf5Cuo0aOeX36ySk"
    // };

    console.log(formData)
    axios.patch(`https://influverse-backend.onrender.com/api/interface-buisness/buisness/${user.business[0].id}`, formData)
      .then((response) => {
        // Handle success
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error while sending data:", error);
      });
  };

  return (
    <Box sx={{ width: 1 }}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                borderRadius: "50%",
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
                
                label="Full Name"
                variant="outlined"
                value={name}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="Email-Address"
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: 1 }}
                id="Phone-Number"
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <Box sx={{ width: 1, marginTop: '20px', display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button variant="contained" type="submit"  >
            Make Changes
          </Button>
        </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
