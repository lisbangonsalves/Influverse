import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicDetails from "./BasicDetails";
import BusinessDetails from "./BusinessDetails";
import SocialIntegration from "./SocialIntegration";
import AdsDetails from "./AdsDetails";
import { useState } from 'react';
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

function CompleteProfile() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // const user =JSON.parse(localStorage.getItem('user'))
      const response = await fetch(
        `https://influverse-backend.onrender.com/user_is`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      setData(jsonData);
      //backupplan:)
      console.log("imbodyyy",response.body)
      localStorage.setItem("user", JSON.stringify(jsonData) );
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchData();
  };

  // Call fetchData when component is opened
  React.useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Basic Details" {...a11yProps(0)} />
            <Tab label="Company Details" {...a11yProps(1)} />
            <Tab label="Social Media Integration" {...a11yProps(2)} />
            <Tab label="Advertising Goals" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <BasicDetails data={data} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <BusinessDetails data={data} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SocialIntegration data={data} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <AdsDetails data={data} />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default CompleteProfile;
