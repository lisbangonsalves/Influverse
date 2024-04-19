import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";
import { NavLink } from 'react-router-dom';
// project imports
import EarningCard from "./EarningCard";
import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import CompleteProfileCard from "./CompleteProfileCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "store/constant";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [showCompleteProfileCard, setShowCompleteProfileCard] = useState(false);
  const [userType, setUserType] = useState(null);
 
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
 
     setShowCompleteProfileCard(hasNullValues);
     setLoading(false);
  }, []);


  return (
    <Grid container spacing={gridSpacing}>
       {showCompleteProfileCard && (
        <Grid item  sm={12} xs={12} md={6} lg={12} component={NavLink} to={userType === "influencer" ? "/influencer/completeprofile" : "/business/completeprofile"}>
          <CompleteProfileCard isLoading={isLoading}    />
        </Grid>
      )}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
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
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
