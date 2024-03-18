import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicDetails from './BasicDetails';
import BusinessDetails from './BusinessDetails';
import SocialIntegration from './SocialIntegration';
import AdsDetails from './AdsDetails';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CompleteProfile() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Basic Details" {...a11yProps(0)} />
          <Tab label="Company Details" {...a11yProps(1)} />
          <Tab label="Social Media Integration" {...a11yProps(2)} />
          <Tab label="Advertising Goals" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BasicDetails/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BusinessDetails/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SocialIntegration/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AdsDetails/>
      </CustomTabPanel>
    </Box>
      
    </div>
  )
}

export default CompleteProfile


