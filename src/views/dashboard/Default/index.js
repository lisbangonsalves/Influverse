import { useEffect, useState } from "react";
import axios from "axios";
// material-ui
import { Grid, Typography, Box } from "@mui/material";
import { NavLink } from 'react-router-dom';
// project imports
import EarningCard from "./EarningCard";
import TotalView from "./TotalView";
import PopularCard from "./PopularCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import CompleteProfileCard from "./CompleteProfileCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "store/constant";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from "@mui/material/Button";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [showCompleteProfileCard, setShowCompleteProfileCard] = useState(false);
  const [userType, setUserType] = useState(null);
  const [overallChannelAnalytics, setOverallChannelAnalytics] = useState()
  const [avgView, setavgView] = useState("")
  const [views,setViews]= useState("")
  // const [sub, setsub] = useState("")
  const [monthlyAnalytics,setmonthlyAnalytics]=useState([])
  // const [data,setdata]=useState()
  // const [viewsData,setviewsData]=useState("")
  // const [subscribersGainedData,setsubscribersGainedData]=useState("")
  useEffect(() => {
    
     // Simulate fetching data from local storage
     const payload1 = JSON.parse(localStorage.getItem('user'));
     var payload=payload1
     if (payload1.is_influencer===true)
     {
       payload=payload.influencer[0]
       setUserType("influencer");
     }
     else if(payload1.is_business===true)
     {
       payload=payload.business[0]
       setUserType("business");
     }
     
 
    //  // Log the payload to ensure it's being retrieved correctly
    //  console.log('Payload:', payload);
 
     // Check if any required value is null
     const hasNullValues = payload && (
       payload.address === null ||
       payload.annual_revenue === null ||
       payload.country === null ||
       payload.description === null ||
       payload.email === null ||
       payload.facebook === null ||
       payload.id === null ||
       payload.industry === null ||
       payload.instagram === null ||
       payload.name === null ||
       payload.phone === null ||
       payload.pincode === null ||
       payload.slug === null ||
       payload.user === null ||
       payload.website === null
     );

     // Log the result of the check to ensure it's working as expected
     console.log('Has null values:', hasNullValues);


     const fetchData = async () => 
     {
      try {
        // Fetch access tokens from local storage
        const accessToken = localStorage.getItem('youtubeAccessToken');
        const refreshToken = localStorage.getItem('youtubeRefreshToken');
        if (!accessToken || !refreshToken) {
          // If YouTube tokens are not available, set loading to false
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:7000/data', {
          headers: {
            'auth-token': `${accessToken}`,
            'refresh-token': refreshToken ,
          }
        });

  
        const data = response.data;
        console.log(response.data)
          // Determine the endpoint URL based on the user type
   

   
        // setdata(data)
        setmonthlyAnalytics(data.monthlyAnalytics);
        setOverallChannelAnalytics(data.overallChannelAnalytics)
        setavgView(data.overallChannelAnalytics.averageViewDuration)
        setViews(data.overallChannelAnalytics.views)
        // setsub(data.overallChannelAnalytics.subscribersGained)
        let endpointUrl = '';
        let payloadx={}
        if (payload1.is_influencer===true) {
          console.log("ghvhjfk,f")
          endpointUrl = 'https://influverse-backend.onrender.com/api/interface-influence/insight/add';
          payloadx = {
            influencer: payload1.influencer[0].id,
            insight: data
          };
        } else if (payload1.is_business===true) {
          console.log("ghvhjfk,f")
          endpointUrl = 'https://influverse-backend.onrender.com/api/interface-buisness/insights/add';
          payloadx = {
            business: payload1.business[0].id,
            insight: data
          };
        }
        const response1 = await axios.post(endpointUrl, payloadx);
        const data1 = response1.data;
        console.log(data1);
      } catch (error) {
        console.error('Error fetching data:', error);
       
      }finally {
        setLoading(false); // Set loading state to false regardless of success or failure
      }
    };



    fetchData();
     setShowCompleteProfileCard(hasNullValues);
  }, []);



  return (
    <Grid container spacing={gridSpacing}>
       {showCompleteProfileCard && (
        <Grid item  sm={12} xs={12} md={12} lg={12} component={NavLink} to={userType === "influencer" ? "/influencer/completeprofile" : "/business/completeprofile"}>
          <CompleteProfileCard isLoading={isLoading}    />
        </Grid>
      )}
      {!localStorage.getItem("youtubeAccessToken") ||
      !localStorage.getItem("youtubeRefreshToken") ? (
        <Grid item xs={12} sm={12} md={6} lg={12}>
          <Box sx={{width:1, height:"400px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <Typography sx={{fontSize:24}}>Your Youtube account is not connected</Typography>
            <Button
         component = {NavLink} to = "http://localhost:7000/login"
          sx={{
            marginTop:"20px",
            paddingX: "40px",
            paddingY: "10px",
            fontSize: "14px",
            backgroundColor: "red",
          }}
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<YouTubeIcon />}
        >
          Connect Youtube
        </Button>
          </Box>
        </Grid>
      ) : (
        <>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} avgView={avgView}/>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalView isLoading={isLoading} avgView={views}/>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} overallChannelAnalytics={overallChannelAnalytics} monthlyAnalytics={monthlyAnalytics} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading}  />
          </Grid>
        </Grid>
      </Grid>
      </>
    )}
    </Grid>
  );
};



export default Dashboard;
