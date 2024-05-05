import PropTypes from 'prop-types';
// import { useState } from 'react';
import React, { useState, useEffect } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
//eslint-disable-next-line
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const theme = useTheme();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        let url;
        if (user.business && user.business.length > 0) {
          url = `http://127.0.0.1:8000/api/interface-business/${user.business[0].slug}/campaign-influencer/`;
        } else if (user.influencer && user.influencer.length > 0) {
          url = `https://influverse-backend.onrender.com/api/interface-influence/${user.influencer[0].slug}/campaign-influencer/`;
        } else {
          // Handle the case when user data is not present in localStorage or doesn't match expected structure
          return;
        }
        const response = await fetch(url);
        const data = await response.json();
        setTransactions(data.filter(transaction => transaction.transaction_id !== null));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Transactions</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  {transactions.length === 0 ? (
                    <Typography variant="subtitle1">No transactions yet</Typography>
                  ) : (
                    transactions.map((transaction) => (
                      <React.Fragment key={transaction.id}>
                        <Grid item>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                              <Typography variant="subtitle1" color="inherit">
                                {transaction.campaign.name}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                  <Typography variant="subtitle1" color="inherit">
                                    {transaction.cost} ETH
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      width: 16,
                                      height: 16,
                                      borderRadius: '5px',
                                      backgroundColor: theme.palette.success.light,
                                      color: theme.palette.success.dark,
                                      ml: 2
                                    }}
                                  >
                                    <KeyboardArrowLeftIcon fontSize="small" color="inherit" />
                                  </Avatar>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            {transaction.transaction_id}
                          </Typography>
                        </Grid>
                        <Divider sx={{ my: 1.5 }} />
                      </React.Fragment>
                    ))
                  )}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
