
import { useState, useEffect } from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChartDataMonth from './chart-data/total-order-month-line-chart';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

const TotalOrderLineChartCard = ({data}) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [subscribersData, setSubscribersData] = useState(null);

  useEffect(({data}) => {
    const fetchData = async () => {
      try {
        // Fetch access tokens from local storage
        // const accessToken = localStorage.getItem('youtubeAccessToken');
        // const refreshToken = localStorage.getItem('youtubeRefreshToken');

        // const response = await axios.get('http://localhost:7000/data', {
        //   headers: {
        //     'auth-token': `${accessToken}`,
        //     'refresh-token': refreshToken ,
        //   }
        // });

  
        // const data = response.data;
        // console.log(data)
        setSubscribersData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [data]);

  // const [timeValue, setTimeValue] = useState(false);



  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: '#fff',
                        mt: 1
                      }}
                    >
                      <SubscriptionsIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>

                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{rr}</Typography>
                       
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >
                          Subscribers Gained
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                  <Chart {...(chartDataMonth)} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

export default TotalOrderLineChartCard;
