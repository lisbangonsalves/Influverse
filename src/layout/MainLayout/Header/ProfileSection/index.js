import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Web3 from 'web3';
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,

  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import MainCard from "ui-component/cards/MainCard";
import Transitions from "ui-component/extended/Transitions";
import UpgradePlanCard from "./UpgradePlanCard";
import User1 from "assets/images/users/user-round.svg";

// assets
import {
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Web3 from "web3"; // Import Web3.js
import Button from "@mui/material/Button";
import MetaMaskLogo from "../../../../contracts/MetaMask.svg";

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const name = storedUser?.business ? storedUser.business[0].name : storedUser?.influencer ? storedUser.influencer[0].name : 'Guest';
  const avatar = storedUser?.business ? storedUser.business[0].image : storedUser?.influencer ? storedUser.influencer[0].image : User1;
  const type =storedUser?.business ? "Business" : storedUser?.influencer ? "Influencer" : 'Guest';
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login");
    console.log("Logout");
    if (window.ethereum) {
      alert("Please disconnect your wallet from MetaMask manually.");
    } else {
      console.error("MetaMask is not installed");
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event, index, route = "") => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== "") {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [accountAddress, setAccountAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if Web3 is injected by MetaMask
    if (typeof window.ethereum !== "undefined") {
      // eslint-disable-next-line
      const web3 = new Web3(window.ethereum);

      // Request account access if needed
      window.ethereum
        .enable()
        .then(function (accounts) {
          // Get the first account from MetaMask
          const address = accounts[0];
          setAccountAddress(address); // Update the state with the account address
          setIsConnected(true); // Update isConnected state to true
        })
        .catch(function (error) {
          // Handle error if user denies account access
          console.error(error);
        });
    } else {
      // If MetaMask is not installed or not injected, handle it
      console.log("MetaMask is not installed");
    }
  }, []);

  const handleConnectWallet = () => {
    if (!isConnected) {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== "undefined") {
        // Request account access
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then(function (accounts) {
            // Get the first account from MetaMask
            const address = accounts[0];
            setAccountAddress(address); // Update the state with the account address
            setIsConnected(true); // Update isConnected state to true
          })
          .catch(function (error) {
            // Handle error if user denies account access
            console.error(error);
          });
      } else {
        // If MetaMask is not installed or not injected, handle it
        console.log("MetaMask is not installed");
      }
    }
  };

  

  return (
    <>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            "& svg": {
              stroke: theme.palette.primary.light,
            },
          },
          "& .MuiChip-label": {
            lineHeight: 0,
          },
        }}
        icon={
          <Avatar
            src={avatar}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: "8px 0 8px 8px !important",
              cursor: "pointer",
            }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={
          <IconSettings
            stroke={1.5}
            size="1.5rem"
            color={theme.palette.primary.main}
          />
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <Box sx={{ p: 2,paddingBottom:0 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Good Morning,</Typography>
                        <Typography
                          component="span"
                          variant="h4"
                          sx={{ fontWeight: 400 }}
                        >
                         {name}
                        </Typography>
                      </Stack>
                      <Typography variant="subtitle2">{type}</Typography>
                    </Stack>
                    <Divider />
                    {isConnected ? (
                      <>
                      {/* <Typography variant="h4">Connected MetaMask Wallet</Typography> */}
                        <Button
                          variant="outlined"
                          sx={{
                            width: 1,
                            paddingY: "10px",
                            marginBottom: "10px",
                            color: "green",
                          }}
                          startIcon={
                            <img
                              src={MetaMaskLogo}
                              alt="MetaMask Logo"
                              style={{ width: 24, height: 24, marginRight: 8 }}
                            />
                          }
                        >
                          {accountAddress}
                        </Button>

                        {/* Render other components related to the connected wallet */}
                      </>
                    ) : (
                      <Button
                        variant="outlined"
                        sx={{
                          width: 1,
                          paddingY: "10px",
                          marginBottom: "10px",
                          color: "Black",
                        }}
                        startIcon={
                          <img
                            src={MetaMaskLogo}
                            alt="MetaMask Logo"
                            style={{ width: 24, height: 24, marginRight: 8 }}
                          />
                        }
                        onClick={handleConnectWallet}
                      >
                        Connect Your Wallet
                      </Button>
                    )}
                  </Box>
                  <PerfectScrollbar
                    style={{
                      height: "100%",
                      maxHeight: "calc(100vh - 250px)",
                      overflowX: "hidden",
                    }}
                  >
                    <Box sx={{ p: 2,paddingTop:0 }}>
                      <UpgradePlanCard />
                      <Divider />
                      <Divider />
                      <List
                        component="nav"
                        sx={{
                          width: "100%",
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: "10px",
                          [theme.breakpoints.down("md")]: {
                            minWidth: "100%",
                          },
                          "& .MuiListItemButton-root": {
                            mt: 0.5,
                          },
                        }}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`,
                            "&:hover": { backgroundColor: "#eef2f6" },
                          }}
                          selected={selectedIndex === 0}
                          onClick={(event) =>
                            handleListItemClick(event, 0, "#")
                          }
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                Account Settings
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`,
                            "&:hover": { backgroundColor: "#eef2f6" },
                          }}
                          selected={selectedIndex === 1}
                          onClick={(event) =>
                            handleListItemClick(event, 1, "#")
                          }
                        >
                          <ListItemIcon>
                            <IconUser stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid
                                container
                                spacing={1}
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="body2">
                                    Social Profile
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Chip
                                    label="02"
                                    size="small"
                                    sx={{
                                      bgcolor: theme.palette.warning.dark,
                                      color: theme.palette.background.default,
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`,
                            "&:hover": { backgroundColor: "#eef2f6" },
                          }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
