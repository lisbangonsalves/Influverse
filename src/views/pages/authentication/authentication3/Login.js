import "./login.css";
import img2 from "./assets/Group2.png";
import img3 from "./assets/Group3.png";
import { motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';


  function Login() {
    







    
      const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
      const [error, setError] = useState('');
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
          const response = await fetch("https://influensys.vercel.app/auth/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          console.log(response)
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            console.log("success")
            navigate('/');
            // Redirect to dashboard or other page
          } else {
            const errorResponse = await response.json();
        setError(errorResponse.message || 'Something went wrong!');
        setOpenSnackbar(true);
          }
        } catch (error) {
          console.error('Error logging in:', error);
          setError('Network error. Please try again later.');
          setOpenSnackbar(true);
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
              <TextField
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                sx={{ width: 1, marginBottom:"15px" }}
              />
              <TextField
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                sx={{ width: 1 }}
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
            <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
      />
  
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
