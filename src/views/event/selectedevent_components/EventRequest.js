import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';



function EventRequest({ influencerName, userName, slug, event, influencerId }) {

  const [accepted, setAccepted] = useState(false);

  const handleAccept = async () => {
    try {
      const response = await fetch(`https://influensys.vercel.app/api/interface-buisness/${slug}/events/status-info/${event}/${influencerId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          confirmed: true
        })
      });

      if (response.ok) {
        setAccepted(true);
        // You can perform additional actions here upon successful acceptance
      } else {
        throw new Error('Failed to accept event');
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <>
    <Card sx={{ display: 'flex', margin:"10px", backgroundColor:"#eef2f6" }}>
    <CardMedia
      component="img"
      sx={{ width: 100 }}
      image="https://images.unsplash.com/photo-1585580419885-2fab1d6dce62?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', justifyContent:"space-between" , width:1, padding:"20px" }}>
      <Box>
        <Typography sx={{fontWeight:"bold", fontSize:16}}>
        {influencerName}
        </Typography>
        <Typography>
        {userName}
        </Typography>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", }}>
      {!accepted && (
            <>
              <Button
                variant="outlined"
                sx={{
                  color: "red",
                  borderColor: "red",
                  "&:hover": {
                    borderColor: "red",
                  },
                  marginRight: "10px",
                }}
              >
                Reject
              </Button>
              <Button variant="outlined" onClick={handleAccept}>
                Accept
              </Button>
            </>
          )}
          {accepted && (
            <Typography variant="body2" sx={{ color: 'green' }}>Accepted</Typography>
          )}
      </Box>
    </Box>
  </Card>
    
  </>
  )
}

export default EventRequest
