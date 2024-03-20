import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Analytics from "./components/Analytics";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: "flex", width: 1 }}>
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
                image="https://images.unsplash.com/photo-1603217039863-aa0c865404f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </Card>

            <Box
              sx={{
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ fontSize: "24px" }}>Sia Menzes</Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "12px" }}>
                Fashion & Beauty
              </Typography>
              <Button variant="contained">Connect</Button>
              <Box
                sx={{
                  marginTop: "30px",
                  width: "70%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InstagramIcon sx={{ fontSize: "24px" }} />
                <FacebookIcon sx={{ fontSize: "24px" }} />
                <YouTubeIcon sx={{ fontSize: "24px" }} />
                <XIcon sx={{ fontSize: "24px" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon fontSize="small" />
                <Typography>Los Angeles, USA</Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontWeight: "bold", marginBottom: "5px" }}>
                  Bio:
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Netus fermentum purus
                  nunc nisl at lacus at aliquam. Volutpat lorem eget a quam
                  tristique varius eget. Tortor magna feugiat integer sed vitae
                  sagittis. Massa amet
                </Typography>
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
                  <Tab label="Analytics" {...a11yProps(0)} />
                  <Tab label="Posts" {...a11yProps(1)} />
                  <Tab label="Campaigns" {...a11yProps(2)} />
                  <Tab label="About" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Analytics/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
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
    </Box>
  );
}
