import React from 'react'
import { Box } from '@mui/system'
import { Divider, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {
    const user = JSON.parse(localStorage.getItem("user"))
  return (
    <Box>
        <Box sx={{marginBottom:"20px"}}>
    <Typography sx={{fontSize:18, fontWeight:"bold"}}>Description</Typography>
    <Divider sx={{marginY:"5px"}}/>
    <Typography>
        {user.business[0].description}
    </Typography>
        
    </Box>
        <Box sx={{marginBottom:"20px"}}>
    <Typography sx={{fontSize:18, fontWeight:"bold"}}>Details</Typography>
    <Divider sx={{marginY:"5px"}}/>
    <Typography sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"5px"}} >
    <EmailIcon sx={{marginRight:"5px"}}/>{user.business[0].email}
    </Typography>
    <Typography sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"5px"}}>
        <LocalPhoneIcon sx={{marginRight:"5px"}}/>{user.business[0].phone}
    </Typography>
    <Typography sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"5px"}}>
       <LanguageIcon sx={{marginRight:"5px"}}/> {user.business[0].website}
    </Typography>
        
    </Box>
        <Box sx={{marginBottom:"20px"}}>
    <Typography sx={{fontSize:18, fontWeight:"bold"}}>Socials</Typography>
    <Divider sx={{marginY:"5px"}}/>
    <Typography sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"5px"}}>
    <InstagramIcon sx={{marginRight:"5px"}}/>{user.business[0].instagram}
    </Typography>
    <Typography sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"5px"}}>
     <FacebookIcon sx={{marginRight:"5px"}}/>{user.business[0].facebook}
    </Typography>
        
    </Box>
        <Box sx={{marginBottom:"20px"}}>
    <Typography sx={{fontSize:18, fontWeight:"bold"}}>Additional Details</Typography>
    <Divider sx={{marginY:"5px"}}/>
    <Typography sx={{marginBottom:"5px"}}>
    Company Registration Number : {user.business[0].crn}
    </Typography>
    <Typography sx={{marginBottom:"5px"}}>
    Annual Revenue : {user.business[0].annual_revenue}
    </Typography>

        
    </Box>
    
    </Box>
    
  )
}
