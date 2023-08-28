import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '/pictures/adminlogo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Avatar, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DiamondIcon from '@mui/icons-material/Diamond';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const drawerWidth = 240;
const array = ['Dashboard', 'Users', 'Query', 'Restaurants', 'Premium']

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [login, setLogin] = useState(false) //this needs to be replaced by crf token

  useEffect(() => {


  }, [login])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };


  const drawer = (

    <div style={{ background: "#fff", overflowX: "hidden" }} className='draw'>
      <Toolbar />

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "0", bottom: { md: "2em", xs: "0.7em" }, position: "relative" }} >
        <Image src={logo} width={200} />

      </Box>
      <List>
        {array.map((text, index) => (
          <ListItem key={text} >
            <ListItemButton sx={{ background: selectedItem === index ? '#1A73E8 !important' : "none", width: "170px", borderRadius: "7px" }}
              onClick={() => handleItemClick(index)}>
              <ListItemIcon sx={{ color: selectedItem === index ? '#fff' : '#555555' }}>
                {index === 0 ? <DashboardIcon /> : null}
                {index === 1 ? <PeopleIcon /> : null}
                {index === 2 ? <QueryStatsIcon /> : null}
                {index === 3 ? <FastfoodIcon /> : null}
                {index === 4 ? <DiamondIcon /> : null}
              </ListItemIcon>

              <ListItemText className="fonti" primary={text} primaryTypographyProps={{ fontWeight: "500 !important", fontSize: { sm: "19px", xs: "15px" } }} sx={{ color: selectedItem === index ? '#fff' : '#555555' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background: "#fff",
          backdropFilter: "blur(14px) saturate(180%)",
        }}

      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconButton onClick={handleDrawerToggle} edge='start' sx={{ display: { xl: "none", lg: "none", md: "none", xs: "block" }, position: "relative", top: "2px" }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", flexDirection: "column" }} >
              <Typography className="fonti" sx={{ color: "#000", fontWeight: "700", fontSize: { lg: "17px", md: "15px", xs: "13.5px" } }}>  Business Development Dashboard <KeyboardArrowDownIcon sx={{ position: "relative", top: "0.3em" }} /> </Typography>
              <Typography className="fonti" sx={{ color: "#000", fontSize: { lg: "14px", md: "13px", xs: "11.5px" } }}>Welcome to Graduate Us</Typography>
            </Box>
          </Box>
          <Box>
            <Tooltip title="Account settings">
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Avatar onClick={handleClick} sx={{ width: { xs: "1.5em", md: "2.2em", lg: "2.5em" }, height: { xs: "1.5em", md: "2.2em", lg: "2.5em" }, bgcolor: "#FF77B1" }}>A</Avatar>
                <Box sx={{ display: { sm: "flex", xs: "none" }, flexDirection: "column" }}>
                  <Typography className="fonti" sx={{ color: "#000", fontSize: { lg: "17px", md: "15px", xs: "13.5px" }, textAlign: "start" }}>Ananya Mohapatra</Typography>
                  <Typography className="fonti" sx={{ color: "#000", fontSize: { lg: "14px", md: "13px", xs: "11.5px" }, textAlign: "start" }}>ananyamohapatra215@gmail.com</Typography>
                </Box>
                <IconButton onClick={handleClick} sx={{ display: { sm: "block", xs: "none" } }}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Box>
            </Tooltip>
            {
              !login && (
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open1}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      backgroundColor: "white",
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 0,
                      '& .MuiAvatar-root': {
                        width: 0,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: '#white',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  className="custom-menu"
                >

                  <>
                    <Box sx={{ display: { sm: "none", xs: "flex" }, flexDirection: "column", padding: "0em 0.5em", background: "#000" }}>
                      <Typography className="fonti" sx={{ color: "#fff", fontSize: { lg: "17px", md: "15px", xs: "13.5px" }, textAlign: "start" }}>Ananya Mohapatra</Typography>
                      <Typography className="fonti" sx={{ color: "#fff", fontSize: { lg: "14px", md: "13px", xs: "11.5px" }, textAlign: "start" }}>ananyamohapatra215@gmail.com</Typography>
                    </Box>
                    <Divider sx={{ display: { sm: "none", xs: "block" } }} />
                    <MenuItem onClick={handleClose}>
                      <Button className="fonti" sx={{ color: "#000", fontWeight: "700" }}>Logout</Button>
                    </MenuItem>

                  </>
                </Menu>
              )}
          </Box>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { border: 'none', boxSizing: 'border-box', width: drawerWidth, background: "#fff" },
            fontSize: "30px"
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { border: 'none', boxSizing: 'border-box', width: drawerWidth, background: "#fff", height: "100%" },

          }}
          open
        >
          {drawer}
        </Drawer>

      </Box>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`  , xs:"100vw"} ,background:"#E8E8E8" , height:"100%" , minHeight:"100vh"}}
    >
         
      </Box> */}
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;