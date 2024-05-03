import * as React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import SendGiftTable from "./SendGiftTable";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SendGift() {
  const [influencer, setInfluencer] = useState({});
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const nuser = JSON.parse(localStorage.getItem("user"));
    // Fetch influencer data
    fetch(`https://influverse-backend.onrender.com/api/interface-influence/influencer/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInfluencer(data);
      })
      .catch((error) => console.error("Error fetching influencer:", error));
  
    // Fetch products data
    fetch(`https://influverse-backend.onrender.com/api/interface-buisness/${nuser.business[0].slug}/product/list`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);
  

  const handleSendGift = () => {
    console.log(selectedProducts)
    const requestBody = {
      influencer_id: Number(id),
      products: selectedProducts,
      message: message,
      amount: amount
    };

    fetch(`https://influverse-backend.onrender.com/api/interface-buisness/${user.business[0].slug}/gift/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
    .then((response) => response.json())
    .then((data) => {
      // Handle success response
      console.log("Gift sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending gift:", error);
    });
  };

  return (
    <Box
      sx={{
        width: 1,
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Avatar
         alt={influencer.name}
         src={influencer.image}
          sx={{ width: 50, height: 50, marginRight: "20px" }}
        />
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          Hi {influencer.name}
        </Typography>
      </Box>
      <TextField 
        id="outlined-basic"
        minRows={8}
        placeholder="Enter Message Here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <TextField 
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Box sx={{ marginTop: "30px", width: "80%" }}>
        <Card sx={{ padding: "20px", width: 1 }}>
          <Box>
            <SendGiftTable products={products} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
          </Box>
        </Card>
      </Box>
      <Box>
        <Button onClick={handleSendGift}>
          Send Gift
        </Button>
      </Box>
    </Box>
  );
}

