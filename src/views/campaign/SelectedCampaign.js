import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { NavLink } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Cards from "./components/cards";
import RequestedCards from "./components/CampaignRequest";
import Chip from "@mui/material/Chip";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

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
        `https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/campaigns/${id}`,
      )
      .then((response) => {
        setEventData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });

    axios
      .get(
        `https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/campaign/status-info-business/${id}/list/`,
      )
      .then((response) => {
        // Filter influencers based on confirmation status
        const confirmed = response.data.filter(
          (influencer) => influencer.confirmed === true,
        );
        const unconfirmed = response.data.filter(
          (influencer) => influencer.confirmed === false,
        );
        setConfirmedInfluencers(confirmed); // Update state with confirmed influencers data
        setUnconfirmedInfluencers(unconfirmed);
      })
      .catch((error) => {
        console.error("Error fetching influencers data:", error);
      });
  }, [id, user.business[0].slug]); // Empty dependency array to run the effect only once on component mount

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(
        `https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/campaigns/${id}`,
      );
      // Handle success, maybe update UI accordingly
      console.log("Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
      // Handle error, maybe show a notification to the user
    }
  };

  return (
    <React.Fragment>
      <Box>
        {eventData && ( // Render the component only when data is available
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="350px"
                    image={eventData.image}
                    alt="Event Image"
                  />
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Box
                  sx={{
                    height: "350px",
                    width: 1,
                    backgroundColor: "white",
                    paddingX: "20px",
                    paddingY: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: "37%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 24,
                          marginTop: "0px",
                          fontWeight: "bold",
                        }}
                      >
                        {eventData.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <IconButton
                        aria-label="delete"
                        size="large"
                        sx={{
                          marginRight: "20px",
                          "&:hover": { backgroundColor: "red", color: "white" },
                        }}
                        onClick={handleDeleteClick}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        component={NavLink}
                        to={`/business/campaign/edit-campaign/${id}`}
                        aria-label="delete"
                        size="large"
                        sx={{
                          "&:hover": {
                            backgroundColor: "#161A30",
                            color: "white",
                          },
                        }}
                      >
                        <CreateIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        color: "#DA2563",
                        alignItems: "center",
                        marginRight: "20px",
                        marginBottom: "5px",
                      }}
                    >
                      <Chip
                        icon={<LocationOnIcon />}
                        label={eventData.location}
                      />
                      <Chip
                        sx={{ marginLeft: "5px" }}
                        icon={<CalendarMonthIcon />}
                        label={
                          eventData.start_date + " to " + eventData.end_date
                        }
                        variant="outlined"
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Chip
                        icon={<CurrencyBitcoinIcon />}
                        label={"Budget : " + eventData.budget + " ETH"}
                        color="success"
                      />
                    </Box>
                  </Box>
                  <Divider sx={{ marginY: "10px" }} />
                  <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                    Description
                  </Typography>

                  <Typography sx={{ marginTop: "10px" }}>
                    {eventData.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    height: "350px",
                    width: 1,
                    backgroundColor: "white",
                    paddingX: "20px",
                    paddingY: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                    Offer Description
                  </Typography>
                  <Divider sx={{marginY:"5px"}}/>
                  <Typography>{eventData.offer_description}</Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold", marginTop: "12px" }}
                  >
                    Offer Terms
                  </Typography>
                  <Divider  sx={{marginY:"5px"}}/>
                  <Typography>{eventData.offer_terms}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    height: "350px",
                    width: 1,
                    backgroundColor: "white",
                    paddingX: "20px",
                    paddingY: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                    Interest
                  </Typography>
                  <Divider  sx={{marginY:"5px"}}/>
                  {eventData.interests.map((interests, index) => (
                    <Chip key={index} label={interests} />
                  ))}
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold", marginTop: "12px" }}
                  >
                    Occupation
                  </Typography>
                  <Divider sx={{marginY:"5px"}}/>
                  <Typography>{eventData.occupation}</Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold", marginTop: "12px" }}
                  >
                    Objective
                  </Typography>
                  <Divider sx={{marginY:"5px"}}/>
                  <Typography>{eventData.objective}</Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold", marginTop: "12px" }}
                  >
                    Communication Channel
                  </Typography>
                  <Divider sx={{marginY:"5px"}}/>
                  <Typography>{eventData.communication_channel}</Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold", marginTop: "12px" }}
                  >
                    Creative Asset

                  </Typography>
                  <Divider sx={{marginY:"5px"}}/>
                  <Typography>{eventData.creative_asset}</Typography>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ marginY: "10px", marginTop: "15px" }} />
            <Box sx={{ marginTop: "15px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginX: "15px",
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight:"bold" }}>
                  List Of Influencer
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="contained"
                    component={NavLink}
                    to={`/business/campaign/explore/${id}`}
                    startIcon={<AddCircleIcon />}
                  >
                    Add Influencer
                  </Button>
                  <Button
                    sx={{ marginLeft: "12px" }}
                    variant="contained"
                    startIcon={<PendingActionsIcon />}
                    onClick={handleClickOpen}
                  >
                    Requested Influencer
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
                        <Grid item xs={12} key={influencer.id}>
                          <RequestedCards
                            influencerName={influencer.influencer.name}
                            userName={influencer.influencer.user}
                            influencerId={influencer.id}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Typography variant="body1">
                      No unconfirmed influencers added.
                    </Typography>
                  )}
                </DialogContent>
              </Dialog>

              <Box sx={{ marginTop: "15px", marginX: "15px" }}>
                {confirmedInfluencers.length > 0 ? (
                  <Grid container spacing={2}>
                    {confirmedInfluencers.map((influencer) => (
                      <Grid item xs={12} key={influencer.id}>
                        <Cards
                          influencerName={influencer.influencer.name}
                          userName={influencer.influencer.user}
                          influencerId={influencer.id}
                          amount={influencer.cost}
                          campaignName={eventData.name}
                          campaignId={eventData.id}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography variant="body1">
                    No confirmed influencers added.
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
}
