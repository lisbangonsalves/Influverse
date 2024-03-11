import React from 'react';
import { Box } from '@mui/material';
import HomeLanding from './HomeLanding';
import LogoCollection from './LogoCollection';
import Reviews from './Reviews'

function Home() {

  return (
    <Box>
      <HomeLanding/>
      <LogoCollection/>
      <Reviews/>
    </Box>
  );
}

export default Home;
