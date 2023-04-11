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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


export default function MiniDrawer(props) {
  
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


const [isDarkMode, setIsDarkMode] = useState(true);
const [color, setColor] = useState('#262727');
const [color1, setColor1] = useState('#262727');
const[letter , setLetter] = useState('white');
const Change = () => {
 
  setIsDarkMode(!isDarkMode);
  if(color === '#262727'){
  setColor('white');
  setLetter('black')
  setColor1('#E4E5E8')
  }else{
    setColor('#262727')
    setLetter('white')
    setColor1('#262727')
  }
};




  return (
    <ThemeProvider theme={theme1}>
    <Box sx={{ display: 'flex','& .MuiAppBar-root':{backgroundColor: color , marginTop:"1.5em" , width:"100%" }}}  >
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center",flexDirection:"row"}}>

         
          <Typography variant="h6" noWrap component="div" sx={{fontSize:{xs:"17px", md:"20px" , color:letter , fontWeight:"900"}}}>
        <Image src={logo} height={25} width={25} style={{position:"relative" , top:"0.2em"}}  /> Graduate Us
          </Typography>
        <List sx={{display:"flex", alignItems:"center",justifyContent:"space-between",gap:{xs:"10px" , sm:"5px" , md:"55px"}}} >
        <Link  href='/home'>  <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column" , color:letter}} className={isDarkMode ? styles.hover : styles.hover2 }  >
             <HomeIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon} />   
          <ListItemText className={styles.list}>Home</ListItemText> 
            </Box> </Link> 
            <Link href='/cgpa'>    <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column" , color:letter}} className={isDarkMode ? styles.hover : styles.hover2} >
             <PercentIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon} />   
           <ListItemText className={styles.list}  button component={Link} to="/cgpa">Cgpa</ListItemText> 
            </Box> </Link> 
            <Link href='/internship'>    <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column" , color:letter}} className={isDarkMode ? styles.hover : styles.hover2} >
             <SchoolIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon}/>   
               <ListItemText className={styles.list}  button component={Link} href="/intership">Internship</ListItemText> 
            </Box></Link> 
            <Link href='/attendance'>    <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column" , color:letter}} className={isDarkMode ? styles.hover : styles.hover2 } >
             <CalendarMonthIcon sx={{width:"1.5em" , height:"1.5em"}} className={styles.icon}/>   
            <ListItemText className={styles.list}  button component={Link} href="/">Attendance</ListItemText>  
            </Box></Link>
            <Link href='/notes'>   <Box sx={{alignItems:"center" ,  display:"flex" , flexDirection:"column" , color:letter}} className={isDarkMode ? styles.hover : styles.hover2 } >
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
            backgroundColor: color,
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
      <Drawer variant="permanent" open={open} sx={{'& .MuiDrawer-paper':{marginTop:{ xs:"5em",md:"5.4em"} , backgroundColor: color1 } }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{display:{sm:"block",md:"none"},color:'white' , position:"relative" , top:"10px"}}  >
            {open === false ?  <NavigateNextIcon/> : <ChevronLeftIcon /> }
          </IconButton>
        </DrawerHeader>
        { remove && (
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:250  , height:30 , bottom:"0.75em" , left:"0.6em", position:"relative" , background:" rgba(250, 250, 250, 0.93)"}}
    >
   <InputBase
      sx={{ ml: 1, flex: 1, color: 'inherit' }}
      placeholder="Search"
      classes={{ input: 'MuiInputBase-input' }}
    />
      <IconButton type="button" sx={{ p: '10px',color:"#525151" }} aria-label="search">
        <MicIcon/>
      </IconButton>

    </Paper>
         
         )}
        <List>
          {['Chat Option',<Link href='/alumni' style={{textDecoration:"inherit",color:letter}}>Resume Review</Link>, <Link href='/alumni' style={{textDecoration:"inherit",color:letter}}>Referral Program</Link>,<Link href='/editprofile' style={{textDecoration:"inherit",color:letter}}>Edit Profile</Link> ,<Link href='/Premiumfeature' style={{textDecoration:"inherit",color:letter}}>Subscription Details</Link>, 'FAQs', 'Contact Us'].map((text, index) => (
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
                  {index === 0 && ( <CommentIcon sx={{color:letter}} /> )}
                  <Link href='/alumni'> {index === 1 && ( <DescriptionIcon sx={{color:letter}} /> )}</Link>
                  <Link href='/alumni'>{index === 2 && ( <SensorOccupiedIcon sx={{color:letter}} /> )}</Link>
                  <Link href='/editprofile'>{index === 3 && ( <AccountBoxIcon sx={{color:letter}} /> )}</Link>
                  <Link href='/Premiumfeature'>{index === 4 && ( <SubscriptionsIcon sx={{color:letter}} /> )}</Link>
                  {index === 5 && ( <QuizIcon sx={{color:letter}} /> )}
                  {index === 6 && ( <ContactMailIcon sx={{color:letter}} /> )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0  , color:letter}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <FormGroup sx={{marginLeft:"1em" , display:"flex" , alignItems:"flex-start" , marginTop:"3em"}}>
  <FormControlLabel
    control={<MaterialUISwitch sx={{ m: 0 }} defaultChecked={props.isDarkMode} />}
    label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
    onClick={() => {
      Change();
      props.Change();
    }}
    sx={{color:letter}}
  />
</FormGroup>

        
        <List>
          {['Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 5,
                  position:"relative",
                  top:"0em",
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
                  {index === 0 && ( <SettingsIcon sx={{color:letter}} /> )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0  , color:letter}} />
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
                  bottom:"1em",
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
                  {index === 0 && ( < LogoutIcon sx={{color:letter}} /> )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0  , color:letter}} />
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