import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Analytics from "./components/Analytics";
import About from './components/About'
import CompleteProfileCard from "./components/CompleteProfileCard";
import { NavLink } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Account() {
  const [value, setValue] = React.useState(0);
  const user = JSON.parse(localStorage.getItem("user"))

  const isProfileIncomplete = !user ||
  !user.business ||
  !user.business[0] ||
  !user.business[0].image ||
  !user.business[0].name ||
  !user.business[0].user ||
  !user.business[0].industry ||
  user.business[0].industry.length === 0 ||
  !user.business[0].address ||
  !user.business[0].country;


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: "flex", width: 1 }}>
        {isProfileIncomplete ? (
            <Box sx={{width:1}} component={NavLink} to="/business/completeprofile">
            <CompleteProfileCard  />
          </Box>
          ) : (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box
            className="accountimg"
            sx={{
              backgroundColor: "white",
              display: "flex",
              borderRadius: "16px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card>
              <CardMedia
                component="img"
                image={user.business[0].image}
                alt="green iguana"
              />
            </Card>

            <Box
              sx={{
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "24px" }}>{user.business[0].name}</Typography>
              <Typography sx={{ fontSize: "14px" }}>@{user.business[0].user}</Typography>
              <Typography sx={{  fontSize: "12px", marginTop:"10px" }}>
              {user.business[0].industry.map((industry, index) => (
                    <Chip sx={{margin:"3px"}} key={index} label={industry} />
                  ))}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon fontSize="small" />
                <Typography>{user.business[0].address}, {user.business[0].country}</Typography>
              </Box>
              
            </Box>
          </Box>
          
        </Grid>
        <Grid item xs={9}>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              borderRadius: "16px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="Accounts"
                >
                  <Tab label="About" {...a11yProps(0)} />
                  <Tab label="Analytics" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <About/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
              <Analytics/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item 
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                Item 
              </CustomTabPanel>
            </Box>
          </Box>
        </Grid>
      </Grid>
      )}
    </Box>
  );
}
