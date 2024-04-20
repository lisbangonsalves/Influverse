import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function account() {
  return (
    <Box sx={{width:1}}>
    <Box
      sx={{
        width: 1,
        display: "flex",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1629114695419-9cd72ac2e32c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        sx={{ width: 160, height: 160 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "self-start",
          margin: "50px 0px 0px 30px",
          width: 1,
        }}
      >
        <Box
          sx={{ display: "flex", width: 1, justifyContent: "space-between" }}
        >
          <Box>
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
              Name Surname
            </Typography>
            <Typography>username</Typography>
          </Box>
          <IconButton
            component={NavLink}
            to={"/influencer/completeprofile"}
            aria-label="delete"
            size="large"
            sx={{
              "&:hover": { backgroundColor: "#161A30", color: "white" },
            }}
          >
            <CreateIcon fontSize="inherit" />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Box sx={{ display: "flex", marginRight: "15px" }}>
            <LocationOnIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Address, Country</Typography>
          </Box>
          <Box sx={{ display: "flex", marginRight: "15px" }}>
            <MailIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Address, Country</Typography>
          </Box>
          <Box sx={{ display: "flex", marginRight: "15px" }}>
            <PhoneIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Address, Country</Typography>
          </Box>
          <Box sx={{ display: "flex", marginRight: "15px" }}>
            <LanguageIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ fontSize: 12 }}>Address, Country</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box sx={{
        width: 1,
        display: "flex",
        flexDirection:"column",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "15px",
        marginTop:"20px"
      }}>
        <Box sx={{width:1}}>
          <Typography sx={{fontSize:16, fontWeight:"bold"}}>
            Description
          </Typography>
          <Divider/>
          <Typography sx={{marginTop:"10px"}}>
            Lorem eiusmod in culpa aliqua consequat amet esse. Fugiat officia veniam fugiat cupidatat. Est sunt est sunt ea occaecat anim amet eu ex aliquip ex enim occaecat anim. Deserunt quis tempor consectetur reprehenderit aliqua. Incididunt adipisicing id minim dolore sit nulla consequat voluptate amet commodo. Cillum dolor minim ullamco voluptate labore deserunt commodo nostrud eiusmod. Cillum magna et minim proident.
          </Typography>
        </Box>
        <Box sx={{marginTop:"10px", width:1}}>
        <Typography sx={{fontSize:16, fontWeight:"bold"}}>
            Socials
          </Typography>
          <Divider/>
          <Box sx={{marginTop:"10px"}}>
          <Box sx={{ display: "flex", marginRight: "15px" }}>
            <InstagramIcon sx={{ fontSize: 20 , marginRight:"10px"}} />
            <Typography sx={{ fontSize: 16 }}>https://www.instagram.com/instagram/</Typography>
          </Box>
          </Box>
        </Box>

    </Box>

    </Box>
  );
}
