import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';

export default function CampaignList() {
  return (
    <Box>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography>Manage your Campaign</Typography>
            <Button variant="outlined">Create New Campaign</Button>
        </Box>
        <Box>

        </Box>
    </Box>
  )
}
