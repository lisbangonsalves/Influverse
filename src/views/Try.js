import { useState } from 'react';
import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import '../views/pages/authentication/authentication3/login.css';
import influvencer from '../views/pages/authentication/authentication3/assets/influencer.png';
import marketer from '../views/pages/authentication/authentication3/assets/marketer.png';

export default function AccountType() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box sx={{width:1, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",height:"100vh" }}>
      <Box sx={{marginBottom:"50px"}}>
        <Typography className="font-sty" sx={{color:"white", fontSize:"30px"}}>
          Choose account type
        </Typography>
      </Box>
      <Box sx={{width:"50%", display:"flex", justifyContent:"space-around", alignItems:"center",  }}>
        <Box className={`acc-type-inf ${selectedOption === 'influencer' ? 'selected' : ''}`} onClick={() => handleOptionSelect('influencer')} sx={{width:"250px",border:"0.5px solid #4f5b9b", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"10px", paddingY:"30px", borderRadius:"10px"}}>
          <img alt="influ" src={influvencer}/>
          <Typography className="font-sty" sx={{color:"white", fontSize:"20px", marginTop:"60px"}}>
            Influencer
          </Typography>
        </Box>
        <Box className={`acc-type-inf ${selectedOption === 'marketer' ? 'selected' : ''}`} onClick={() => handleOptionSelect('marketer')} sx={{width:"250px",border:"0.5px solid #4f5b9b", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"10px", paddingY:"30px", borderRadius:"10px"}}>
          <img alt="mark" src={marketer}/>
          <Typography className="font-sty" sx={{color:"white", fontSize:"20px", marginTop:"60px"}}>
            Marketer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
