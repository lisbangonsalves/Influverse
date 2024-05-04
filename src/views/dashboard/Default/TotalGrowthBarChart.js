import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios'; // Import axios for making HTTP requests

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid,  Typography, Box} from '@mui/material';

// third-party
// eslint-disable-next-line
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const TotalGrowthBarChart = ({ isLoading ,overallChannelAnalytics,monthlyAnalytics}) => {
  // const [overallChannelAnalytics, setOverallChannelAnalytics] = useState()
  const [chartData, setChartData] = useState(null); // State to hold chart data
  // eslint-disable-next-line
  const theme = useTheme();
  // eslint-disable-next-line
  const customization = useSelector((state) => state.customization);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // // Fetch access token and refresh token from local storage
        // const accessToken = localStorage.getItem('youtubeAccessToken');
        // const refreshToken = localStorage.getItem('youtubeRefreshToken');

        // // Make request to fetch data with access token in the headers
        // const response = await axios.get('http://localhost:7000/data', {
        //   headers: {
        //     'auth-token': `${accessToken}`,
        //     'refresh-token': refreshToken ,
        //   }
        // }); 
        // setOverallChannelAnalytics(response.data.overallChannelAnalytics.averageViewPercentage)
        // const monthlyAnalytics = response.data.monthlyAnalytics;
          const a = monthlyAnalytics;
          const viewsData = a.map(data => data.views);
          const likesData = a.map(data => data.likes);
          const subscribersGainedData = a.map(data => data.subscribersGained);
        setChartData({
          height: 480,
          type: 'bar',
          options: {
            chart: {
              id: 'bar-chart',
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }
            ],
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%'
              }
            },
            xaxis: {
              type: 'category',
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
              show: true,
              fontSize: '14px',
              fontFamily: `'Roboto', sans-serif`,
              position: 'bottom',
              offsetX: 20,
              labels: {
                useSeriesColors: false
              },
              markers: {
                width: 16,
                height: 16,
                radius: 5
              },
              itemMargin: {
                horizontal: 15,
                vertical: 8
              }
            },
            fill: {
              type: 'solid'
            },
            dataLabels: {
              enabled: false
            },
            grid: {
              show: true
            }
          },
          series: [
            { name: 'Views', data: viewsData },
            { name: 'Likes', data: likesData },
            { name: 'Subscribers Gained', data: subscribersGainedData }
          ]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchChartData();
  }, [monthlyAnalytics]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
         
                  <Box sx={{display:'flex', width:1}}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Average View Percentage</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">{overallChannelAnalytics.averageViewPercentage}%</Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Subscribers Gained</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">{overallChannelAnalytics.subscribersGained}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Comments</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">{overallChannelAnalytics.comments}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Likes</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">{overallChannelAnalytics.likes}</Typography>
                    </Grid>
                  </Grid>
                  </Box>
                  
           
                
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {chartData && <Chart {...chartData} />}
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
  overallChannelAnalytics: PropTypes.number, // Assuming overallChannelAnalytics is a number
  monthlyAnalytics: PropTypes.arrayOf(PropTypes.object) // Assuming monthlyAnalytics is an array of objects


};

export default TotalGrowthBarChart;
