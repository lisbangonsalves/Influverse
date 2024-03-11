// import { Link } from 'react-router-dom';
import * as React from 'react';
// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';


// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// project imports
import { Grid, Typography } from '@mui/material';
import AuthWrapper1 from '../AuthWrapper1';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
// import Lottie from 'react-lottie';
// import animationData from './assets/Animation1.json';
// import AuthCardWrapper from '../AuthCardWrapper';
// import AuthLogin from '../auth-forms/AuthLogin';
// import Logo from 'ui-component/Logo';
// import AuthFooter from 'ui-component/cards/AuthFooter';
import img1 from './assets/register1.png'
import './login2.css'
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  // const theme = useTheme();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <AuthWrapper1>

     
<Grid container>
  <Grid xs={6}>
    <Box className="image-area"  sx={{height:"100vh", width:1}}>
      <img src={img1} alt='img'/>
    </Box>
  </Grid>
  <Grid xs={6}>
    <Box sx={{padding:"20px",backgroundColor:"#F0ECE5", height:"100vh", display:"flex", justifyContent:"center", flexDirection:"column"}}>
      <Box sx={{width:1, margin:"20px",paddingX:"30px"}}>
        <Typography className='font-sty' sx={{fontSize:"15px"}}>
          Welcome to,
        </Typography>
        <Typography className='font-sty' sx={{fontSize:"30px"}}>
          Influverse
        </Typography>
      </Box>
      <Box sx={{margin:'20px', display:"flex", flexDirection:'column', width:1, justifyContent:'center', alignItems:'center'}}>
       <TextField id="outlined-basic" placeholder='Full Name' variant="outlined" sx={{width:'85%', marginY:"20px"}} />
       <TextField id="outlined-basic" placeholder='Email' type='email' variant="outlined" sx={{width:'85%', marginY:"20px"}} />
       <TextField id="outlined-basic" placeholder='Phone Number' type='text' variant="outlined" sx={{width:'85%', marginY:"20px"}} />
       <FormControl sx={{ width:'85%', marginY:"20px" }} variant="outlined" >
          {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" placeholder='Password'>
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
            placeholder='Password'
          />
        </FormControl>

        <Box sx={{display:"flex", width:1, paddingX:"55px", paddingY:'40px', alignItems:"flex-end", justifyContent:'space-between'}}>
          <Typography sx={{display:'flex'}}>Already a user? <Typography sx={{fontWeight:'bold', paddingLeft:'5px', textDecoration:"none", color:"black"}} component = {NavLink} to = "/signin">SignIn</Typography></Typography>
        <Button variant="contained" size='large' sx={{backgroundColor:"#161A30"}} endIcon={<SendIcon />}>
        Next
      </Button>
        </Box>
      </Box>

    </Box>
  </Grid>
  
</Grid>

    </AuthWrapper1>
  );
};

export default Login;

