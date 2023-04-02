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
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import logo from '/pictures/logo.png';
import Button from '@mui/material/Button';
import Link from 'next/link';
// import SignIN from '';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Help'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', marginTop: "15px" }}>
      <Box sx={{display:'flex',marginLeft:'20px',marginTop:'40px',marginBottom:'20px'}}>
      <Image src={logo} alt="IMAGE" height={35} width={35} /> <Typography fontFamily="poppins" fontWeight='500'
        fontSize='21px' color='#ffffff' sx={{ paddingLeft: "15px" }}>
        Graduate Us</Typography>
        </Box>
      <Divider />
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText><Typography sx={{ fontFamily: "poppins", textTransform: 'inherit', color: '#ffffff' }}>{item}</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      <Box sx={{display:'flex',justifyContent:"center"}}>
      <Link href={'signup'}><Button sx={{
                border: '2px solid rgba(255, 255, 255,0.5)',
                borderRadius: '14px', fontFamily: 'poppins', textTransform: "initial", color: "#ffffff", paddingLeft: '15px', paddingRight: '15px',textAlign: 'center',
              }}>Sign Up</Button></Link>
            </Box>
            <Link href={'signin'}><Button sx={{
              border: '2px solid rgba(255, 255, 255, 0.44)',
              borderRadius: '14px', fontFamily: 'poppins', textTransform: "initial", color: "#000000", paddingLeft: '15px', paddingRight: '15px', background: '#ffffff',textAlign: 'center', marginTop: "15px" 
            }}>Sign In</Button></Link>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar variant='nav' sx={{ background: '#151515' }} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Image src={logo} alt="IMAGE" height={25} width={25} /> <Typography fontFamily="poppins" fontWeight='500'
            fontSize='21px' color='#FFFFFF' sx={{ display: 'flex', alignItems: 'center', paddingLeft: "15px" }}>
            Graduate Us</Typography>
          <Box sx={{ display: "flex", margin: 'auto' }}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>

              {navItems.map((item) => (
                <Button sx={{ color: '#fff' }}>
                  <Typography sx={{ fontFamily: "poppins", textTransform: 'initial', paddingLeft: "10px",paddingRight:"10px" }}>{item}</Typography>
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{ display: 'flex', marginRight: '10px'}}>
            <Link href={'signup'}><Button sx={{
                border: '2px solid rgba(255, 255, 255)',
                borderRadius: '14px', fontFamily: 'poppins', textTransform: "initial", color: "#ffffff", paddingLeft: '15px', paddingRight: '15px'
              }}>Sign Up</Button></Link>
            </Box>
            <Link href={'signin'}><Button sx={{
              border: '2px solid rgba(255, 255, 255, 0.44)',
              borderRadius: '14px', fontFamily: 'poppins', textTransform: "initial", color: "#000000", paddingLeft: '15px', paddingRight: '15px', background: '#ffffff'
            }}>Sign In</Button></Link>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "#0f0b13" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;