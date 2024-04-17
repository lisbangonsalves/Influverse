import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

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
 
  useEffect(() => {
     // Simulate fetching data from local storage
     const payload = JSON.parse(localStorage.getItem('user'));
 
     // Log the payload to ensure it's being retrieved correctly
     console.log('Payload:', payload);
 
     // Check if any required value is null
     const hasNullValues = payload && payload.length > 0 && (
       payload[0].address === null ||
       payload[0].annual_revenue === null ||
       payload[0].country === null ||
       payload[0].description === null ||
       payload[0].email === null ||
       payload[0].facebook === null ||
       payload[0].id === null ||
       payload[0].industry === null ||
       payload[0].instagram === null ||
       payload[0].name === null ||
       payload[0].phone === null ||
       payload[0].pincode === null ||
       payload[0].slug === null ||
       payload[0].user === null ||
       payload[0].website === null ||
       payload[0].is_business === null ||
       payload[0].is_influencer === null
     );
 
     // Log the result of the check to ensure it's working as expected
     console.log('Has null values:', hasNullValues);
 
     setShowCompleteProfileCard(hasNullValues);
     setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      {showCompleteProfileCard && (
        <Grid item sm={6} xs={12} md={6} lg={12}>
          <CompleteProfileCard isLoading={isLoading} />
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
