"use client";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';






export default function Cards({ name, industry, country, id, campaignId,image }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const [amount, setAmount] = useState("");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleClick = async () => {
    try {
      const response = await fetch(`https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/campaigns/${campaignId}/add-influencer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          influencer: id,
          cost:amount 
        }),
      });
      // Handle response
      if (response.ok) {
        // If response is ok, navigate to the campaign page
        navigate(`/business/campaign/${user.business[0].slug}/${campaignId}`);
      } else {
        console.error('Error adding influencer:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding influencer:', error);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <Card
      sx={{
        width: 1,
        maxWidth: "100%",
        boxShadow:
          "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="image"
            src={image}
            sx={{ width: 100, height: 100, marginRight: "20px" }}
          />
          <Box>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {name}
            </Typography>
            <Typography>{industry.join(', ')}</Typography>
            <Typography sx={{ fontStyle: "italic", fontSize: "12px" }}>
            {country}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: 1, marginTop: "20px" }}>
          <Grid container spacing={2}>
          <Grid item xs={3} sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}><InstagramIcon/> 2.9K</Grid>
          <Grid item xs={3} sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}><FacebookIcon/> 100K</Grid>
          <Grid item xs={3} sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}} ><YouTubeIcon/> 50K</Grid>
          <Grid item xs={3}  sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}} ><XIcon/> 63K</Grid>
          </Grid>
        </Box>
        <Box sx={{ width: 1, marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button sx={{ width: 1 }} variant="outlined">
                View Profile
              </Button>
            </Grid>
            <Grid item xs={6}>
            <Button sx={{ width: 1 }} onClick={handleClickOpen} variant="outlined">
                Add Influencer
              </Button>
            </Grid>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          How Much do you want to pay influencer ?
        </DialogTitle>
        <DialogContent>
        <TextField onChange={handleAmountChange}
                value={amount} id="outlined-basic" placeholder="Amount in ETH" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClick} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
           
          </Grid>
        </Box>
      </CardContent>
    </Card>
    </React.Fragment>
    
  );
}
