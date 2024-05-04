import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import axios from "axios"; // Import axios for making HTTP requests
import Web3 from 'web3';
import Web3MarketingSuiteContract from '../../../contracts/Web3MarketingSuite.json';

function EventRequest({ influencerName, userName, influencerId, amount }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleRemoveClick = async () => {
    try {
      // Make a request to remove the influencer from the campaign
      await axios.delete(`https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/campaigns/influencer/${influencerId}`);
      
      // If successful, maybe update UI accordingly or show a success message
    } catch (error) {
      console.error("Error removing influencer:", error);
      // Handle error, maybe show a notification to the user
    }
  };



// Assuming you have a provider set up
const web3 = new Web3(window.ethereum);

// Define the contract ABI and address
const contract = new web3.eth.Contract(
  Web3MarketingSuiteContract.abi,
  '0x750C8BF95170379773c5fCDD5a88346228bBCE99'// Replace with your contract address
);
// Function to handle making a payment to the influencer
const handleMakePayment = async () => {
  try {
    // Convert 0.2 ETH to wei
    const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];
    const amountInWei = web3.utils.toWei(`${amount}`, 'ether');

    // Call the makeTransactionToInfluencer function
    const transaction = await contract.methods.makeTransactionToInfluencer(influencerName, amountInWei).send({ from: defaultAccount, value : amountInWei,  gas: 100000 });

    // Handle transaction success
    console.log("Payment successful:", transaction);
  } catch (error) {
    console.error("Error making payment:", error);
  }
};



  return (
    <Card sx={{ display: "flex", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="https://images.unsplash.com/photo-1585580419885-2fab1d6dce62?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 1,
          padding: "20px",
        }}
      >
        <Box sx={{display:"flex", justifyContent:"space-between", width:1}}>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
              {influencerName}
            </Typography>
            <Typography>{userName}</Typography>
            <Typography>{amount}</Typography>
          </Box>
          <Box>
            <Button onClick={handleMakePayment} >Make Payment</Button>
            <Button sx={{color:"red"}} onClick={handleRemoveClick}>Remove</Button>
          </Box>
        
        </Box>
      </Box>
    </Card>
  );
}

export default EventRequest;
