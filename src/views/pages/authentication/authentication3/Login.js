import "./login.css";
import img2 from "./assets/Group2.png";
import img3 from "./assets/Group3.png";
// import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';

function Login2() {

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: "100%",
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));


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
          <form>
          <div className="app-title">Login</div>
          <BootstrapInput placeholder="Email" id="bootstrap-input" sx={{width:1, paddingY:"10px"}} />
          <BootstrapInput placeholder="password" type="password" id="bootstrap-input" sx={{width:1, paddingY:"10px"}} />
          <Button variant="contained" size="large" sx={{marginTop:"20px", backgroundColor:"#161A30"}}>
          Login
        </Button>
        <div className="next-bttn">
          New to Platform? 
          <Typography sx={{paddingLeft:'5px'}}  component = {NavLink} to = "/">

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

export default Login2;
