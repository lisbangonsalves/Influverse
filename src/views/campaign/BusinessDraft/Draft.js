import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import CommentsCard from "./CommentsCard";

import { Box } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "react-router-dom";
import Web3 from 'web3';
import Web3MarketingSuiteContract from '../../../contracts/Web3MarketingSuite.json';


function Draft() {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = useState("");
  const [campaignData, setCampaignData] = useState(null);
  const { influencerId, campaignId, amount } = useParams();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("Submit");
  const [buttonColor, setButtonColor] = useState("primary");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendComment = () => {
    // This function updates the comment state with the text from the dialog
    setOpen(false);
    setComment(document.getElementById("commentTextField").value);
  };

  const web3 = new Web3(window.ethereum);

// Define the contract ABI and address
const contract = new web3.eth.Contract(
  Web3MarketingSuiteContract.abi,
  '0xCd5D3edE163044d653454eAB6d9AdFc9AdD9fEE0'// Replace with your contract address
);

  const handleAccept = async () => {
   
    setSubmitting(true);
    const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];
    const amountInWei = web3.utils.toWei(`${amount}`, 'ether');

    // Call the makeTransactionToInfluencer function
    const transaction = await contract.methods.makeTransactionToInfluencer(campaignData.campaign.name, campaignData.influencer.name, amountInWei).send({ from: defaultAccount, value : amountInWei,  gas: 100000 });

    // Handle transaction success
    console.log("Payment successful:", transaction);

    try {
      setLoading(true);

      const secondResponse = await axios.post(
        `https://influverse-backend.onrender.com//api/interface-buisness/influencer/work/accept/${campaignData.id}`,
        {
          confirmed : true
        },
      );

      setLoading(false)
      console.log("Second Response:", secondResponse.data);
      setSubmitting(false);
      setButtonStatus("Submitted");
      setButtonColor("success");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  const handleSubmit = async () => {
   
    setSubmitting(true);

    try {
      setLoading(true);

      const secondResponse = await axios.patch(
        `https://influverse-backend.onrender.com/api/interface-buisness/influencer/work/${campaignData.id}`,
        {
          marketer_response: comment
        },
      );

      setLoading(false)
      console.log("Second Response:", secondResponse.data);
      setSubmitting(false);
      setButtonStatus("Submitted");
      setButtonColor("success");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    // Fetch event data from the API
    axios
      .get(
        `https://influverse-backend.onrender.com/api/interface-buisness/influencer/${influencerId}/campaign-work/${campaignId}/`,
      )
      .then((response) => {
        setCampaignData(response.data[0]); // Update state with fetched data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setLoading(false);
      });
  }, [influencerId, campaignId]);

  return (
    <React.Fragment>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : campaignData ? (
        <Container maxWidth="md">
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 1,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DescriptionIcon />
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Campaign Draft
                </Typography>
              </Box>
              <Box>
              <Button onClick={handleAccept} variant="contained"sx={{marginRight:"10px"}} >
                Accept Draft
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={submitting}
                color={buttonColor}
              >
                {submitting ? "Submitting..." : buttonStatus}
              </Button>
              </Box>
              
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                marginTop: "20px",
                paddingX: "15px",
                paddingY: "10px",
                borderRadius: "20px",
              }}
            >
              <Box></Box>

              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "10px",
                  marginY: "10px",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Video Uploaded by {campaignData.influencer.name}
                </Typography>
                <Divider sx={{marginY:"10px"}}/>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <video controls height={400}>
                    {/* Empty track element to satisfy accessibility requirement */}
                    <track
                      kind="captions"
                      src=""
                      label="No captions available"
                    />
                    <source src={campaignData.video} type="video/mp4" />
                  </video>
                </Box>
              </Box>

              <Box sx={{ marginY: "10px" }}>
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Comments
                </Typography>
                <Divider sx={{ marginY: "10px" }} />
                {campaignData.comments ? (
                  <CommentsCard
                    comment={campaignData.comments}
                    name={campaignData.influencer.name}
                    image={campaignData.influencer.image}
                  />
                ) : (
                  <Typography>No comment by {campaignData.influencer.name}</Typography>
                )}
                {comment ? (
                  <CommentsCard
                    comment={comment}
                    name={user.business[0].name}
                    image={user.business[0].image}
                  />
                ) :campaignData.marketer_response ? (
                  <CommentsCard
                    comment={campaignData.marketer_response}
                    name={user.business[0].name}
                    image={user.business[0].image}
                  />
                  
                ): <Typography>No comment</Typography>

              }
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="text" onClick={handleClickOpen}>
                    Add Comment
                  </Button>
                </Box>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add Comment here</DialogTitle>
                  <DialogContent>
                    <TextField
                      id="commentTextField"
                      multiline
                      rows={6}
                      sx={{ width: "500px", marginTop: "10px" }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSendComment}>Add Comment</Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>
          </Box>
        </Container>
      ) : null}
    </React.Fragment>
  );
}

export default Draft;
