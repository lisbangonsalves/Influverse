import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid, Typography } from "@mui/material";
import AuthWrapper1 from "../AuthWrapper1";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img1 from "./assets/register1.png";
import "./login2.css";
// Import Web3 and Contract ABI
import Web3 from 'web3';
import Web3MarketingSuiteContract from '../../../../contracts/Web3MarketingSuite.json';


const Login = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    crn: "",
    industry: [],
  });

  // Function to handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle industry type selection
  const handleIndustryTypeChange = (event, value) => {
    setFormData((prevState) => ({
      ...prevState,
      industry: value,
    }));
  };
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem("accessToken");

      // Check if access token exists
      if (accessToken) {
        // Use the access token for further operations
        console.log("Access Token:", accessToken);
      } else {
        console.log("Access token not found in local storage.");
      }
      // Make a POST request to your server endpoint
      const headers = {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + accessToken,
      };
      const response = await axios.post(
        "https://influensys.vercel.app/api/interface-buisness/buisness/create",
        formData,
        { headers },
      );

      // // Handle the response as needed
      // console.log("Response:", response.data);
      const web3 = new Web3(window.ethereum);
      // Get the contract instance
      const contract = new web3.eth.Contract(
        Web3MarketingSuiteContract.abi,
        '0x353f7471AB93ca54D6bfb5b9A7269931211e1F6d' // Replace with your contract address
      );
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];
      // Make a call to the contract method
      const result = await contract.methods.createBusiness(formData.name).send({ from: defaultAccount });

      // Handle the result as needed
      console.log(result);

      if (response.status===201) {


        localStorage.setItem("user", JSON.stringify(response.data) );
     
        console.log("success");
        navigate("/business/dashboard");
      } else {
        const errorResponse = await response.json();
    setError(errorResponse.message || 'Something went wrong!');
    setOpenSnackbar(true);
      }
        // Redirect to dashboard or other page
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <AuthWrapper1>
      <Grid container>
        <Grid xs={6}>
          <Box className="image-area" sx={{ height: "100vh", width: 1 }}>
            <img src={img1} alt="img" />
          </Box>
        </Grid>
        <Grid xs={6}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#F0ECE5",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: 1, margin: "20px", paddingX: "30px" }}>
                <Typography className="font-sty" sx={{ fontSize: "20px" }}>
                  Welcome to,
                </Typography>
                <Typography className="font-sty" sx={{ fontSize: "30px" }}>
                  Influverse
                </Typography>
              </Box>
              <Box
                sx={{
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                  width: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  name="name"
                  id="outlined-basic"
                  placeholder="Company Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleFormChange}
                  sx={{ width: "85%", marginY: "20px" }}
                />
                <TextField
                  name="crn"
                  id="outlined-basic"
                  placeholder="Company Registration Number"
                  value={formData.crn}
                  onChange={handleFormChange}
                  variant="outlined"
                  sx={{ width: "85%", marginY: "20px" }}
                />

                <Autocomplete
                  sx={{ width: "85%", marginY: "20px" }}
                  multiple
                  id="tags-filled"
                  options={industryType.map((option) => option.title)}
                  freeSolo
                  value={formData.industry}
                  onChange={handleIndustryTypeChange}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        variant="outlined"
                        key={index}
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      sx={{ width: 1 }}
                      placeholder="Industary Type"
                    />
                  )}
                />

                <Box
                  sx={{
                    display: "flex",
                    width: 1,
                    paddingX: "55px",
                    paddingY: "40px",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ display: "flex" }}>
                    Already a user?{" "}
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        paddingLeft: "5px",
                        textDecoration: "none",
                        color: "black",
                      }}
                      component={NavLink}
                      to="/signin"
                    >
                      SignIn
                    </Typography>
                  </Typography>
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    className="font-sty"
                    sx={{ backgroundColor: "#161A30" }}
                    endIcon={<SendIcon />}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Login;

const industryType = [
  { title: "Fashion" },
  { title: "Beauty" },
  { title: "Electronics" },
  { title: "Home and Furniture" },
  { title: "Sports and Outdoor" },
  { title: "Health and Wellness" },
  { title: "Technology" },
  {
    title: "Food and Beverage",
  },
  { title: "Healthcare and Pharmaceuticals" },
  { title: "Finance and Banking" },
  {
    title: "Travel and Hospitality",
  },
  {
    title: "Entertainment and Media",
  },
  { title: "Automotive" },
  { title: "Real Estate" },
  {
    title: "Education",
  },
  { title: "Non-profit and Social Causes" },
  { title: "E-commerce" },
];
