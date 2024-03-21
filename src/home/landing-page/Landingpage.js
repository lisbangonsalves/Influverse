import * as React from 'react';
import Footer from './Footers';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import Logo from '../../ui-component/Logo'



const drawerWidth = 240;


function LandingPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' , backgroundColor : "#161A30"}}>
      <Typography variant="h6" sx={{ my: 2 , color : "white", fontSize : 18}}>
        <Logo/>
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            
            <ListItemButton component = {NavLink} to = "/" sx={{ textAlign: 'center' ,"&.active": {padding: 2, backgroundColor: "#9575cd", color: "white",}, }}>
              <ListItemText primary="Home" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemButton component = {NavLink} to = "/" sx={{ textAlign: 'center' ,"&.active": {padding: 2, backgroundColor: "#9575cd", color: "white",}, }}>
              <ListItemText primary="Blog"  sx={{color:"white"}}/>
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemButton component = {NavLink} to = "/" sx={{ textAlign: 'center' ,"&.active": {padding: 2, backgroundColor: "#9575cd", color: "white",}, }}>
              <ListItemText primary="Login" />
            </ListItemButton>
            
          </ListItem>
      
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection:'column' }}>
      <CssBaseline />
      <AppBar component="nav" sx = {{ backgroundColor : '#161A30'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            
            component={NavLink}
            to = "/"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize : 24, color : "White", textDecoration : "none" }}
          >
            <Logo/>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button component = {NavLink} to = "/features"  sx={{ color: '#fff' , marginRight : 2 }}>
                Featuress
              </Button>
              <Button component = {NavLink} to = "/pricing"  sx={{ color: '#fff' , marginRight : 1 }}>
                Pricing
              </Button>
              <Button component = {NavLink} to = "/blog"  sx={{ color: '#fff' }}>
                Blog
              </Button>
              <Button component = {NavLink} to = "/login"  sx={{ color: '#fff'}}>
                Login
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3,  width:1, backgroundColor:"#161A30"}}>
        <Toolbar />
        <Outlet/>
      </Box>
      <Footer/>
    </Box>
  );
}



export default LandingPage;
