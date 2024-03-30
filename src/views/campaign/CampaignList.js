import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { NavLink } from 'react-router-dom';

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://influensys.vercel.app/api/interface-buisness/${user.business[0].slug}/campaigns/list`);
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold", color: "#161a30" }} >Manage your Campaign</Typography>
        <Button component={NavLink} to="/business/campaign/create-campaign" sx={{ color: "white", backgroundColor: '#161a30', borderColor: "#161a30", borderWidth: "2px", '&:hover': { backgroundColor: "white", color: "#161a30", borderColor: "#161a30", borderWidth: "2px" } }} variant="outlined">Create New Campaign</Button>
      </Box>
      <Box sx={{ width: '100%', marginTop: "30px" }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Campaign Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Budget</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {campaigns
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((campaign) => (
                    <TableRow
                      key={campaign.id}
                      component={NavLink}
                      to={`/business/campaign/${user.business[0].slug}/${campaign.id}`}
                      sx={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                      <TableCell>{campaign.name}</TableCell>
                      <TableCell>{campaign.start_date}</TableCell>
                      <TableCell>{campaign.end_date}</TableCell>
                      <TableCell>{campaign.budget}</TableCell>
                      <TableCell>{campaign.status}</TableCell>
                      <TableCell>{campaign.status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={campaigns.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch />}
          label="Dense padding"
        />
      </Box>
    </Box>
  );
}
