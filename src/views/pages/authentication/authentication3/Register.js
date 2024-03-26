import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid, Typography } from "@mui/material";
import AuthWrapper1 from "../AuthWrapper1";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import img1 from "./assets/register1.png";
import "./login2.css";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://influensys.vercel.app/auth/registration/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(formData),
        },
      );
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refreshToken", data.refresh_token);
        
        localStorage.setItem("user", JSON.stringify(data.user) );
        console.log(data.user)
        console.log(data)
        console.log("success");
        navigate("/accounttype");
        // Redirect to dashboard or other page
      } else {
        
        const errorResponse = await response.json();
        setError(errorResponse.message || "Something went wrong!");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Network error. Please try again later.");
      setOpenSnackbar(true);
    }
  };

  return (
    <AuthWrapper1>
      <Grid container>
        <Grid xs={6}>
          <Box className="image-area" sx={{ height: "100vh", width: 1 }}>
            <img src={img1} alt="img" />
          </Box>
        </Grid>
        <Grid xs={6}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#F0ECE5",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: 1, margin: "20px", paddingX: "30px" }}>
                <Typography className="font-sty" sx={{ fontSize: "20px" }}>
                  Welcome to,
                </Typography>
                <Typography className="font-sty" sx={{ fontSize: "30px" }}>
                  Influverse
                </Typography>
              </Box>

              <Box
                sx={{
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                  width: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  placeholder="Username"
                  variant="outlined"
                  sx={{ width: "85%", marginY: "20px" }}
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  variant="outlined"
                  sx={{ width: "85%", marginY: "20px" }}
                />

                <Box sx={{ width: "85%", marginY: "20px" }}>
                  <OutlinedInput
                  sx={{width:1}}
                    name="password1"
                    
                    value={formData.password1}
                    onChange={handleChange}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end" placeholder="Password">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Password"
                  />
                </Box>
                <Box sx={{ width: "85%", marginY: "20px" }}>
                  <OutlinedInput
                  sx={{width:1}}
                    name="password2"
                    
                    value={formData.password2}
                    onChange={handleChange}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end" placeholder="Password">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Confirm Password"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    width: 1,
                    paddingX: "55px",
                    paddingY: "40px",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ display: "flex" }}>
                    Already a user?{" "}
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        paddingLeft: "5px",
                        textDecoration: "none",
                        color: "black",
                      }}
                      component={NavLink}
                      to="/login"
                    >
                      LogIn
                    </Typography>
                  </Typography>
                  <Button
                  type="submit"
                    variant="contained"
                    size="large"
                    className="font-sty"
                    sx={{ backgroundColor: "#161A30" }}
                    endIcon={<SendIcon />}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={error}
          />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Register;
