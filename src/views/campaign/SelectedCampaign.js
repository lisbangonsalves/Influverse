import React from 'react'
import { Box } from '@mui/system'
import BreadCrumbs from './components/BreadCrumbs'
import { Grid, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import './style.css'
// import { NavLink } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import CampaignTab from './components/CampaignTab'

export default function SelectedCampaign() {
  return (
    <Box>
        <BreadCrumbs/>
        <Box sx={{width:1, marginTop:"50px",marginX:'30px'}}>
        <Grid container spacing={2}>
        <Grid item xs={2}>
        <Avatar
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        sx={{ width: 150, height: 150 }}
      />
        </Grid>
        <Grid item xs={9}>
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", height:"100%"}}>
                <Typography className='our-font' sx={{fontSize:"24px", fontWeight:"bold"}}>
                Summer Fashion Week
                </Typography>
                <Typography sx={{marginBottom:"10px"}} >
                Fashion & Lifestyle
                </Typography>
                <Typography sx={{fontSize:"10px", color:'green',fontWeight:"bold"}}>
                Active
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={1}>
        <IconButton aria-label="delete" >
        <SettingsIcon fontSize="inherit" />
      </IconButton>
        </Grid>
      </Grid>
        </Box>
    <Box sx={{ marginTop:'30px', marginX:'30px'}}>
        <CampaignTab/>
    </Box>
    </Box>
  )
}
