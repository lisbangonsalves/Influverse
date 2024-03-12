// import { Link } from 'react-router-dom';
import * as React from 'react';
// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
// import IconButton from '@mui/material/IconButton';

// import { NavLink } from 'react-router-dom';


// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';

// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// project imports
import { Grid, Typography } from '@mui/material';
import AuthWrapper1 from './AuthWrapper1';
import { Box } from '@mui/system';
// import TextField from '@mui/material/TextField';
// import Lottie from 'react-lottie';
// import animationData from './assets/Animation1.json';
// import AuthCardWrapper from '../AuthCardWrapper';
// import AuthLogin from '../auth-forms/AuthLogin';
// import Logo from 'ui-component/Logo';
// import AuthFooter from 'ui-component/cards/AuthFooter';
import img1 from './authentication3/assets/register1.png'
import './authentication3/login2.css'
// assets




// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  // const theme = useTheme();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };


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
        <Typography className='font-sty' sx={{fontSize:"24px"}}>
          Choose your account type
        </Typography>
      </Box>
      <Box sx={{margin:'20px', display:"flex", flexDirection:'column', width:1, justifyContent:'center', alignItems:'center'}}>
       <Box sx={{display:'flex', width:1, justifyContent:'center'}}>
        <Box sx={{width:"200px", height:"200px", background:"white", borderRadius:"10px", marginX:"30px"}}>

        </Box>
        <Box sx={{width:"200px", height:"200px", background:"white", borderRadius:"10px", marginX:"30px"}}>
          
        </Box>
        
       </Box>
        
      </Box>

    </Box>
  </Grid>
  
</Grid>

    </AuthWrapper1>
  );
};

export default Login;

