import "./login.css";
import img2 from "./assets/Group2.png";
import img3 from "./assets/Group3.png";
// import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";



  function Login() {
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
      "label + &": {
        marginTop: theme.spacing(3),
      },
      "& .MuiInputBase-input": {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
        border: "1px solid",
        borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
        fontSize: 16,
        width: "100%",
        padding: "10px 12px",
        transition: theme.transitions.create([
          "border-color",
          "background-color",
          "box-shadow",
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
      },
    }));







    
      const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("https://influensys.vercel.app/auth/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            // Redirect to dashboard or other page
          } else {
            // Handle login error
          }
        } catch (error) {
          console.error("Error logging in:", error);
        }
      };









    return (
      <div className="app">
        <div className="app-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={img2} alt="img1" />
          </motion.div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="app-title">Login</div>
              <BootstrapInput
                name="username"
                label="Username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                id="bootstrap-input"
                sx={{ width: 1, paddingY: "10px" }}
              />
              <BootstrapInput
                placeholder="Password"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                id="bootstrap-input"
                sx={{ width: 1, paddingY: "10px" }}
              />
              <Button
              type="submit"
                className="font-sty"
                variant="contained"
                size="large"
                sx={{ marginTop: "20px", backgroundColor: "#161A30" }}
              >
                Login
              </Button>
              <div className="next-bttn">
                Create new account
                <Typography
                  sx={{ paddingLeft: "5px" }}
                  component={NavLink}
                  to="/register1"
                >
                  Register
                </Typography>
              </div>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={img3} alt="img1" />
          </motion.div>
        </div>
      </div>
    );
  }

export default Login;
