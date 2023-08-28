import * as React from "react";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNext from '@mui/icons-material/NavigateNext';
import "@fontsource/Montserrat"

export default function GuestFooter() {
  return (
      <Box sx={{position: 'fixed',
    top:'0px',width: '100vw', height:'120px',background:"linear-gradient(0deg, rgba(0, 97, 162, 0.05), rgba(0, 97, 162, 0.05)), #FDFCFF;"
    ,borderBottom: "1px solid #73777F",zIndex:"999",marginLeft:"260px"}}>
     <Box sx={{display:'flex',
alignItems:'center',fontColor:'#45474A',marginTop:"20px",marginLeft:'32px'}}>       
<Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small" sx={{color:"#45474A",fontFamily:'Montserrat'}}/>}>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/home"
        >
          <HomeRoundedIcon sx={{color:"#45474A"}}/>
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/settings"
        >
          <Typography fontSize="inherit" color="#45474A" sx={{fontFamily:'Montserrat'}}>Settings</Typography>
        </Link>
      </Breadcrumbs>  
</Box>  
     
        <Typography variant="h5" color="#00000" fontSize='34px'  marginTop="8px" marginLeft='32px' sx={{fontFamily:'Montserrat'}}>
      {'Change Password '}
    </Typography>
      </Box>
  );
}