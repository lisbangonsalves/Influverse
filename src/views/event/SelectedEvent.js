import { Box } from '@mui/system'
import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function SelectedEvent() {
  return (
    <Box>
      <Card sx={{width: 1,}}>
        <CardMedia
          component="img"
          height="300px"
          image="https://plus.unsplash.com/premium_photo-1685080293629-692fda8f3bb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
    </Card>
    <Box sx={{display:"flex"}}>
      <Box>
        <LocationOnIcon/>
      <Typography>
      </Typography>

      </Box>
      <Box>

        <CalendarMonthIcon/>
      <Typography>
      </Typography>
      </Box>
      <Box>

        <AccessTimeIcon/>
      <Typography>
      </Typography>
      </Box>
    </Box>

    </Box>
  )
}
