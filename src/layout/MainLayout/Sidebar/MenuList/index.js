import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import ImenuItem from '../../../../menu-items/Iindex';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {

  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        // Retrieve the access token from local storage
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
          console.error('Access token not found in local storage.');
          return;
        }

        const response = await fetch('https://influverse-backend.onrender.com/user_is', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();

        // Check if user is a business or influencer
        if (data.is_business) {
          setUserType('business');
        } else if (data.is_influencer) {
          setUserType('influencer');
        } else {
          console.error('User type not recognized.');
        }
      } catch (error) {
        console.error('Error fetching user type:', error);
      }
    };

    fetchUserType();
  }, []);

  const navItems = userType === 'business' ? (
    menuItem.items.map((item) => {
      switch (item.type) {
        case 'group':
          return <NavGroup key={item.id} item={item} />;
        default:
          return (
            <Typography key={item.id} variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
          );
      }
    })
  ) : (
    ImenuItem.items.map((item) => {
      switch (item.type) {
        case 'group':
          return <NavGroup key={item.id} item={item} />;
        default:
          return (
            <Typography key={item.id} variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
          );
      }
    })
  );

  return <>{navItems}</>;
};

export default MenuList;
