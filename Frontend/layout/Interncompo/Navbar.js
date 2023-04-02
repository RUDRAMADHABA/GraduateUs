import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import DescriptionIcon from '@mui/icons-material/Description';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Image from 'next/image';
import logo from '/pictures/logo.png';
import  styles from  '/styles/Part2.module.css'
import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PercentIcon from '@mui/icons-material/Percent';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useEffect } from 'react';
import {useMediaQuery} from '@mui/material';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MicIcon from '@mui/icons-material/Mic';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const drawerWidth = 270;
const theme1 = createTheme({
  palette: {
    primary: {
      main: '#000000', // Change the primary color
    },
    },
    typography: {
      allVariants: {
        fontFamily: 'Poppins',
      }
  },
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  
  const isDesktop = useMediaQuery('(min-width:900px)')
  const theme = useTheme();
  const [open, setOpen] = React.useState(isDesktop);


  const handleDrawerClose = () => {
    if( open === true ){
        setOpen(false)
        setRemove(false)
    }else{
        setOpen(true)
        setRemove(true)
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  const [login , setLogin] = useState(false) //this needs to be replaced by crf token

  useEffect(()=>{
       

     
  },[login])

const [remove , setRemove] = useState(isDesktop)

  return (
    <ThemeProvider theme={theme1}>
    <Box sx={{ display: 'flex','& .MuiAppBar-root':{background:"#262727" , marginTop:"1.5em" , width:"100%"}}}  >
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center",flexDirection:"row"}}>

         
          <Typography variant="h6" noWrap component="div" sx={{fontSize:{xs:"17px", md:"20px"}}}>
        <Image src={logo} height={25} width={25} style={{position:"relative" , top:"0.2em"}}  /> Graduate Us
          </Typography>
        <List sx={{display:"flex", alignItems:"center",justifyContent:"space-between",gap:{xs:"10px" , sm:"5px" , md:"55px"} }} >
        <Link  href='/home'>  <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column"}} className={styles.hover}  >
             <HomeIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon} />   
          <ListItemText className={styles.list}>Home</ListItemText> 
            </Box> </Link> 
            <Link href='/cgpa'>    <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column"}} className={styles.hover} >
             <PercentIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon} />   
           <ListItemText className={styles.list}  button component={Link} to="/cgpa">Cgpa</ListItemText> 
            </Box> </Link> 
            <Link href='/internship'>    <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column"}} className={styles.hover} >
             <SchoolIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon}/>   
               <ListItemText className={styles.list}  button component={Link} href="/intership">Internship</ListItemText> 
            </Box></Link> 
            <Link href='/attendance'>    <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column"}} className={styles.hover} >
             <CalendarMonthIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon}/>   
            <ListItemText className={styles.list}  button component={Link} href="/">Attendance</ListItemText>  
            </Box></Link>
            <Link href='/notes'>   <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column"}} className={styles.hover} >
             <AutoStoriesIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon}/>   
             <ListItemText className={styles.list}  button component={Link} href="/">Notes</ListItemText> 
            </Box></Link> 
        </List>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open1 ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
          >
            <Avatar sx={{ width:{xs:"1.5em" , md:"2.5em"}, height:{xs:"1.5em" , md:"2.5em"} , overflow:"hidden" }}>M</Avatar>
          </IconButton>
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
            background:"#262727 !important",
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
              bgcolor: '#262727',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
 
          <>
        <MenuItem onClick={handleClose}>
          <Avatar /> <Link href='/signin' style={{color:"white"}}>Login</Link> 
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> <Link href='/signup' style={{color:"white"}}>Signup</Link> 
        </MenuItem>
        </>
      </Menu>
         )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{'& .MuiDrawer-paper':{marginTop:{ xs:"5em",md:"5.4em"} , background:"#262727"}}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{display:{sm:"block",md:"none"},color:'white' , position:"relative" , top:"10px"}}  >
            {open === false ?  <NavigateNextIcon/> : <ChevronLeftIcon /> }
          </IconButton>
        </DrawerHeader>
        { remove && (
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:250  , height:30 , bottom:"0.75em" , left:"0.6em", position:"relative" , background:"#a3a3a3"}}
    >
    <InputBase
  sx={{ ml: 1, flex: 1, color: "white", "&::placeholder": { color: "#525151", opacity: "1" } }}
  placeholder="Search"
  inputProps={{
    "aria-label": "search",
    style: { color: "black !important", opacity: "1" },
    placeholderStyle: { color: "#FF0000" } /* added style for placeholder */
  }}
/>
      <IconButton type="button" sx={{ p: '10px',color:"#525151" }} aria-label="search">
        <MicIcon/>
      </IconButton>

    </Paper>
         
         )}
        <List>
          {['Chat Option',<Link href='/alumni' style={{textDecoration:"inherit",color:"#fff"}}>Resume Review</Link>, <Link href='/alumni' style={{textDecoration:"inherit",color:"#fff"}}>Referral Program</Link>,<Link href='/editprofile' style={{textDecoration:"inherit",color:"#fff"}}>Edit Profile</Link> ,<Link href='/Premiumfeature' style={{textDecoration:"inherit",color:"#fff"}}>Subscription Details</Link>, 'FAQs', 'Contact Us'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  marginTop:0,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 && ( <CommentIcon sx={{color:'white'}} /> )}
                  <Link href='/alumni'> {index === 1 && ( <DescriptionIcon sx={{color:'white'}} /> )}</Link>
                  <Link href='/alumni'>{index === 2 && ( <SensorOccupiedIcon sx={{color:'white'}} /> )}</Link>
                  <Link href='/editprofile'>{index === 3 && ( <AccountBoxIcon sx={{color:'white'}} /> )}</Link>
                  <Link href='/Premiumfeature'>{index === 4 && ( <SubscriptionsIcon sx={{color:'white'}} /> )}</Link>
                  {index === 5 && ( <QuizIcon sx={{color:'white'}} /> )}
                  {index === 6 && ( <ContactMailIcon sx={{color:'white'}} /> )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0  , color:"white"}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <List>
          {['Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 5,
                  position:"relative",
                  top:"3.5em",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 && ( <SettingsIcon sx={{color:'white'}} /> )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0  , color:"white"}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
  {
    login && (
        <List>
          {['Log out'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 5,
                  position:"relative",
                  top:"2.7em",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 && ( < LogoutIcon sx={{color:'white'}} /> )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0  , color:"white"}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
  )
}
        <Divider sx={{borderColor:"#d2d2d2" ,   position:"relative",
                  top:"3.5em"}}/>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
    </Box> */}
    </Box>
    </ThemeProvider>
  );
}