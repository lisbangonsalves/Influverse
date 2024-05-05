import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import {  Typography, Grid ,Chip, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import axios from "axios"; // Import axios for making HTTP requests
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";


export default function SelectedEvent() {
  const { slug,id } = useParams();
  const [eventData, setEventData] = useState(null); // State to store event data
 
  useEffect(() => {
    // Fetch event data from the API
    axios
      .get(
        `https://influverse-backend.onrender.com/api/interface-buisness/${slug}/campaigns/${id}`,
      )
      .then((response) => {
        setEventData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });


  }, [ id, slug]); // Empty dependency array to run the effect only once on component mount

  



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
              <Grid item xs={12}>
                <Box sx={{
                    width: 1,
                    backgroundColor: "white",
                    paddingX: "20px",
                    paddingY: "15px",
                    borderRadius: "10px",
                  }}>
                    <Box sx={{display:"flex", width:1, justifyContent:"space-between", alignItems:"center"}}>
                    <Typography sx={{fontSize:16, fontWeight:"bold"}}>
                      Message From {eventData.name}
                    </Typography>
                    <Button variant="contained" sx={{backgroundColor:"#161A30"}} component = {NavLink} to = {`/influencer/campaign/draft/${id}/${slug}`}>
                      Send Draft
                    </Button>
                    </Box>
                    <Divider sx={{marginY:"10px"}}/>
                    <Typography>
                      {eventData.message}
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
        </Box>
      )}
    </Box>
    </React.Fragment>
  );
}
