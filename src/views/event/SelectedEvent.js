import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Button, Divider, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { NavLink } from "react-router-dom";
import EventCard from "./selectedevent_components/EventRequest";
import axios from "axios"; // Import axios for making HTTP requests
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


export default function SelectedEvent() {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null); // State to store event data
  const [confirmedInfluencers, setConfirmedInfluencers] = useState([]); // State to store confirmed influencers data
  const [unconfirmedInfluencers, setUnconfirmedInfluencers] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    // Fetch event data from the API
    axios
      .get(
        `https://influensys.vercel.app/api/interface-buisness/${user.business[0].slug}/events/${id}`,
      )
      .then((response) => {
        setEventData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });

      axios
      .get(
        `https://influensys.vercel.app/api/interface-buisness/${user.business[0].slug}/events/${id}/status-info/list/`
      )
      .then((response) => {
          // Filter influencers based on confirmation status
          const confirmed = response.data.filter(influencer => influencer.confirmed === true);
        const unconfirmed = response.data.filter(influencer => influencer.confirmed === false);
        setConfirmedInfluencers(confirmed); // Update state with confirmed influencers data
        setUnconfirmedInfluencers(unconfirmed);

        
      })
      .catch((error) => {
        console.error("Error fetching influencers data:", error);
      });

  }, [ id, user.business[0].slug]); 


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reloadInfluencers = () => {
    axios
      .get(
        `https://influensys.vercel.app/api/interface-buisness/${user.business[0].slug}/events/${id}/status-info/list/`
      )
      .then((response) => {
        // Filter influencers based on confirmation status
        const confirmed = response.data.filter(influencer => influencer.confirmed === true);
        const unconfirmed = response.data.filter(influencer => influencer.confirmed === false);
        setConfirmedInfluencers(confirmed); // Update state with confirmed influencers data
        setUnconfirmedInfluencers(unconfirmed);
      })
      .catch((error) => {
        console.error("Error fetching influencers data:", error);
      });
  };


  return (
    <React.Fragment>
    <Box>
      {eventData && ( // Render the component only when data is available
        <Box>
          <Card sx={{ width: 1 }}>
            <CardMedia
              component="img"
              height="300px"
              image="https://plus.unsplash.com/premium_photo-1685080293629-692fda8f3bb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event Image"
            />
          </Card>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "30px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                color: "#DA2563",
                width: "37%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ fontSize: 18, marginRight: "1px" }} />
                <Typography> {eventData.country}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CalendarMonthIcon sx={{ fontSize: 18, marginRight: "2px" }} />
                <Typography>
                  {" "}
                  {eventData.start_date} - {eventData.end_date}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 18, marginRight: "2px" }} />
                <Typography>
                  {" "}
                  {eventData.start_time} - {eventData.end_time}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton aria-label="delete" size="large" sx={{marginRight:"20px","&:hover":{backgroundColor:'red', color:"white", }}}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              <IconButton component={NavLink} to={`/business/event/edit-event/${id}`} aria-label="delete" size="large" sx={{"&:hover":{backgroundColor:'#161A30', color:"white"}}}>
                <CreateIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
          <Typography
            sx={{ fontSize: 24, marginTop: "10px", fontWeight: "bold" }}
          >
            {eventData.name}
          </Typography>
          <Typography sx={{ marginTop: "10px" }}>
            {eventData.description}
          </Typography>
          <Divider/>
            
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginX:'15px',
                marginY: '15px'
              }}
            >
              <Typography sx={{fontSize:18,}}>List Of Influencer</Typography>
              <Box sx={{display:"flex"}}>
              <Button onClick={handleClickOpen} sx={{marginLeft:"12px"}} variant="contained" startIcon={<PendingActionsIcon />}>
               Influencer Request
              </Button>
              </Box>
            </Box>
            <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
          }}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Influencer Requested</DialogTitle>
          <DialogContent>
          {unconfirmedInfluencers.length > 0 ? (
              <Grid container spacing={2}>
                {unconfirmedInfluencers.map((influencer) => (
                  <Grid item xs={12} key={id}>
                    <EventCard
                      influencerName={influencer.influencer.name}
                      userName={influencer.influencer.user}
                      slug={user.business[0].slug}
                      event={influencer.event}
                      influencerId={influencer.influencer.id}
                      reloadInfluencers={reloadInfluencers}

                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body1">No unconfirmed influencers added.</Typography>
            )}
          </DialogContent>
        </Dialog>
           

            <Box sx={{ marginTop: "15px",marginX:'15px' }}>
            {confirmedInfluencers.length > 0 ? (
              <Grid container spacing={2}>
                {confirmedInfluencers.map((influencer) => (
                  <Grid item xs={12} key={influencer.id}>
                    <EventCard
                      influencerName={influencer.influencer.name}
                      userName={influencer.influencer.user}
                      slug={user.business[0].slug}
                      event={influencer.event}
                      influencerId={influencer.influencer.id}
                      reloadInfluencers={reloadInfluencers}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body1">No confirmed influencers added.</Typography>
            )}
            </Box>
        </Box>
      )}
    </Box>
    </React.Fragment>
  );
}
