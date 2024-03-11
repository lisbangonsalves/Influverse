// import { Link } from 'react-router-dom';
import * as React from 'react';
// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';

import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
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
       <TextField id="outlined-basic" placeholder='Company Name' variant="outlined" sx={{width:'85%', marginY:"20px"}} />
       <TextField id="outlined-basic" placeholder='Company registration No' variant="outlined" sx={{width:'85%', marginY:"20px"}} />
       
        <Select
          id="demo-simple-select"
          sx={{width:"85%",  marginY:"20px"}}
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
