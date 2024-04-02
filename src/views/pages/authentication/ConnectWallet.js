import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import MetaMaskLogo from "./MetaMask.svg";
import Web3 from 'web3';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function AccountType() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const connectToMetaMask = async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      console.log('MetaMask is not installed.');
      return;
    }

    // Create a web3 instance
    const web3 = new Web3(window.ethereum);

    // Request account access
    await window.ethereum.enable();

    // Get accounts
    const accounts = await web3.eth.getAccounts();
    console.log(accounts); // You can use these accounts for further interactions

    // Here, you would also set up your contract instance
    // const contractABI = [...]; // Your contract's ABI
    // const contractAddress = '0x...'; // Your contract's deployed address
    // const contract = new web3.eth.Contract(contractABI, contractAddress);
    // You can now use the contract instance for further interactions

    // Update the state to indicate that the wallet is connected
    setIsConnected(true);
    if(type==="influencer")
    {
      navigate("/register/influencer");
    }
    else if(type==="business"
    )
    {
       navigate("/register/business");
    }
 };

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography sx={{ color: "white", fontSize: 24, marginBottom: "30px" }}>
        Connect Your Wallet
      </Typography>
      <Box
        sx={{
          backgroundColor: "#31304D",
          width: "20%",
          borderRadius: "10px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{ width: 1, paddingY:"10px", marginBottom:"10px", color: isConnected ? 'green' : 'white' }}
          startIcon={
            <img
              src={MetaMaskLogo}
              alt="MetaMask Logo"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
          }
          onClick={connectToMetaMask}
        >
          {isConnected ? "Wallet Connected" : "Connect MetaMask Wallet"}
        </Button>
        
      </Box>
    </Box>
  );
}
