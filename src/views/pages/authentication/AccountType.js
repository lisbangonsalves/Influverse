import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import "./authentication3/login.css";
import influvencer from "./authentication3/assets/influencer.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import marketer from "./authentication3/assets/marketer.png";

export default function AccountType() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Get navigate function for redirection

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSelectionSubmit = () => {
    // Send selectedOption to the server via POST request
    fetch("your-server-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedOption }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to another page based on the selection
          if (selectedOption === "influencer") {
            navigate("/influencer-page");
          } else if (selectedOption === "marketer") {
            navigate("/marketer-page");
          }
        } else {
          // Handle error response
          console.error("Error sending selection to server");
        }
      })
      .catch((error) => {
        console.error("Error sending selection to server:", error);
      });
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
      <Box sx={{ marginBottom: "50px" }}>
        <Typography
          className="font-sty"
          sx={{ color: "white", fontSize: "30px" }}
        >
          Choose account type
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          className={`acc-type-inf ${selectedOption === "influencer" ? "selected" : ""}`}
          onClick={() => handleOptionSelect("influencer")}
          sx={{
            width: "250px",
            border: "0.5px solid #4f5b9b",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            paddingY: "30px",
            borderRadius: "10px",
          }}
        >
          <img alt="influ" src={influvencer} />
          <Typography
            className="font-sty"
            sx={{ color: "white", fontSize: "20px", marginTop: "60px" }}
          >
            Influencer
          </Typography>
        </Box>
        <Box
          className={`acc-type-inf ${selectedOption === "marketer" ? "selected" : ""}`}
          onClick={() => handleOptionSelect("marketer")}
          sx={{
            width: "250px",
            border: "0.5px solid #4f5b9b",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            paddingY: "30px",
            borderRadius: "10px",
          }}
        >
          <img alt="influ" src={marketer} />
          <Typography
            className="font-sty"
            sx={{ color: "white", fontSize: "20px", marginTop: "60px" }}
          >
            Marketer
          </Typography>
        </Box>
      </Box>
      <Box sx={{marginTop:"30px", width:"41%", display:"flex", alignItems:"flex-end", justifyContent:"flex-end"}}>
        <Button sx={{backgroundColor:"#E98EAD"}} variant="contained" onClick={handleSelectionSubmit} endIcon={<SendIcon />}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
