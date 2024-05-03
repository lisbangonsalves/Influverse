import React , { useState }from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import Web3 from 'web3';
import Web3MarketingSuiteContract from '../../../contracts/Web3MarketingSuite.json';



function EventRequest({ businessName, campaignName, campaignId, slug, onAccept}) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleAccept = async () => {
    try {
      const response = await fetch(
        `https://influverse-backend.onrender.com/api/interface-influence/${slug}/campaign-confirm/${campaignId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ confirmed: true }),
        }
      );
      // 0x353f7471AB93ca54D6bfb5b9A7269931211e1F6d
      // 0x9767356e9ABb488416f30E340bC5be0F8EBCF119
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(
        Web3MarketingSuiteContract.abi,
        '0x353f7471AB93ca54D6bfb5b9A7269931211e1F6d' // Replace with your contract address
      );
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];
      
      // Call getCampaignIdByName to get the campaign id
      const campaignId = await contract.methods.getCampaignIdByName(campaignName).call({ from: defaultAccount });
      
      // Call addInfluencer with the obtained campaign id
      const result = await contract.methods.addInfluencer(campaignId, '0x9767356e9ABb488416f30E340bC5be0F8EBCF119', user.influencer[0].name).send({ from: defaultAccount });
      
      // Handle the result as needed
      console.log(result);
      
      if (response.ok) {
        // Handle success (if needed)
        
        setAccepted(true);
        console.log("Campaign accepted successfully!");
        onAccept();
      } else {
        // Handle error (if needed)
        console.error("Error accepting campaign:", response.statusText);
      }
    } catch (error) {
      console.error("Error accepting campaign:", error.message);
    }
  };
  const handleReject = async () => {
    try {
      const response = await fetch(
        `https://influverse-backend.onrender.com/api/interface-influence/${slug}/campaign-confirm/${campaignId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ confirmed: false }),
        }
      );
      if (response.ok) {
        // Handle success (if needed)
        setRejected(true);
        console.log("Campaign accepted successfully!");
        onAccept();
      } else {
        // Handle error (if needed)
        console.error("Error accepting campaign:", response.statusText);
      }
    } catch (error) {
      console.error("Error accepting campaign:", error.message);
    }
  };




  return (
    <>
    <Card sx={{ display: 'flex', margin:"10px", backgroundColor:"#eef2f6" }}>
    <CardMedia
      component="img"
      sx={{ width: 100 }}
      image="https://images.unsplash.com/photo-1585580419885-2fab1d6dce62?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', justifyContent:"space-between" , width:1, padding:"20px" }}>
      <Box>
        <Typography sx={{fontWeight:"bold", fontSize:16}}>
        {campaignName}
        </Typography>
        <Typography>
        {businessName}
        </Typography>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", }}>
      {rejected ? (
            <Typography sx={{ color: "red", fontWeight: "bold" }}>Rejected</Typography>
          ) : (
            <>
              {accepted ? (
                <Typography sx={{ color: "green", fontWeight: "bold" }}>Accepted</Typography>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "red",
                      borderColor: "red",
                      "&:hover": {
                        borderColor: "red",
                      },
                      marginRight: "10px",
                    }}
                    onClick={handleReject}
                  >
                    Reject
                  </Button>
                  <Button variant="outlined" onClick={handleAccept}>
                    Accept
                  </Button>
                </>
              )}
            </>
          )}
      </Box>
    </Box>
  </Card>
    
  </>
  )
}

export default EventRequest
