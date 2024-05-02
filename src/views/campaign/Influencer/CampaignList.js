import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CampaignRequest from "./CampaignRequest";

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/interface-influence/${user.influencer[0].slug}/campaign/status-info-influencer/list/`,
        );
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user.business]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/interface-influence/${user.influencer[0].slug}/campaign/status-info-influencer/list/`
      );
      const data = await response.json();
      setCampaigns(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <React.Fragment>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#161a30" }}
          >
            Manage your Campaign
          </Typography>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#161a30",
              borderColor: "#161a30",
              borderWidth: "2px",
              "&:hover": {
                backgroundColor: "white",
                color: "#161a30",
                borderColor: "#161a30",
                borderWidth: "2px",
              },
            }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Campaign Requests
          </Button>
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
          <DialogTitle>Campaign Request</DialogTitle>
          <DialogContent>
          {campaigns.filter((campaign) => campaign.confirmed === false && campaign.status !="Rejected").map((campaign) => (
              <CampaignRequest
                key={campaign.id}
                businessName={campaign.business.name}
                campaignName={campaign.campaign.name}
                campaignId={campaign.campaign.id}
                slug={user.influencer[0].slug}
                onAccept={fetchData}
              />
            ))}
          </DialogContent>
        </Dialog>

        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {campaigns
                  .filter((campaign) => campaign.confirmed === true)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((campaign) => (
                      <TableRow
                        key={campaign.id}
                        component={NavLink}
                        to={`/business/campaign/${user.influencer[0].slug}/${campaign.id}`}
                        sx={{ cursor: "pointer", textDecoration: "none" }}
                      >
                        <TableCell>{campaign.campaign.name}</TableCell>
                        <TableCell>{campaign.campaign.start_date}</TableCell>
                        <TableCell>{campaign.campaign.end_date}</TableCell>
                        <TableCell>{campaign.campaign.budget}</TableCell>
                        <TableCell>{campaign.confirmed ? "Confirmed" : "Pending"}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={campaigns.filter((campaign) => campaign.confirmed === true).length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </React.Fragment>
  );
}
