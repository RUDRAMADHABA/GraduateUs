
import Navbar from "../layout/Interncompo/Navbar"
import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '/styles/Part2.module.css'



export default function RestaurantI() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000', // Change the primary color
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Montserrat',
      }
    },
  });

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState('#262727');
  const [color1, setColor1] = useState('#333838');
  const [divider, setDivider] = useState('#fff');
  const [letter, setletter] = useState('white');
  const Change = () => {

    setIsDarkMode(!isDarkMode);
    if (color === '#262727') {
      setColor('white');
      setColor1('#f3f3f3')
      setletter('#5f5f5f')
      setDivider('#1e1e1e')
    } else {
      setColor('#262727')
      setColor1('#333838')
      setletter('#fff')
      setDivider('#fff')
    }
  };


  return (
    <>
      <ThemeProvider theme={theme}>

        <body style={{ background: color, minHeight: "100vh" }}>
          <Stack marginTop={{ sm: "105px", md: "125px" }} marginLeft={{ sm: "65px", md: "270px" }} justifyContent="center" alignItems="flex-start" flexDirection="column" padding="10px 40px">
            <Stack flexDirection="column"
              borderRadius="10px" justifyContent="space-evenly" alignItems="flex-start" padding="20px">
              <Typography sx={{ color: divider, fontSize: "28px" }}>Dawat</Typography>
              <Typography sx={{ color: "#A3A3A3" }}>Kirba Chowk, Burla</Typography>
              <Typography sx={{ color: "#A3A3A3" }}>0.5 km </Typography>
            </Stack>
            <Stack flexDirection={{ sm: "column", md: "row" }} justifyContent="space-between" alignItems="center" gap="25px" >
              <Stack flexDirection="column" alignItems="center" width="80%" gap="15px">
                <Typography sx={{ color: "#CC3333", fontSize: "18px" }}>Best In Town</Typography>
                <Typography sx={{ color: divider, fontSize: "36px", fontStyle: "italic" }}>ENJOY OUR CHICKEN <span style={{ color: "#CC3333" }}>BURGER</span> FAST FOOD</Typography>
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                  <Stack flexDirection="row" color="#CC3333" gap="8px">
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                  </Stack>
                  <Button sx={{ background: "#cc3333", fontSize: "18px", padding: "7px 15px" }}>Order Now</Button>
                </Stack>
              </Stack>
              <Stack>
                <Box component='img' src="./resta.png" style={{ width: "35vw" }} />
              </Stack>
            </Stack>
            <Stack flexDirection="column" gap="15px" paddingTop="15px" alignItems={{ sm: "center", md: "flex-start" }} width="100%">
              <Typography sx={{ color: divider, fontSize: "24px", fontWeight: "bold" }}>Popular Dishes</Typography>
              <Stack flexDirection="row" gap="15px">

              </Stack>
              <Stack flexDirection="row" justifyContent="start" gap="15px" alignItems="center" className={styles.slider} >
                <Box component='img' src="./dish1.png"  style={{ width: "12vw" }} />
                <Box component='img' src="./dish2.png" style={{ width: "12vw" }} />
                <Box component='img' src="./dish3.png" style={{ width: "12vw" }} />
                <Box component='img' src="./dish4.png" style={{ width: "12vw" }} />
                <Box component='img' src="./dish5.png" style={{ width: "12vw" }} />
              </Stack>

            </Stack>
            <Stack flexDirection="column" gap="15px" justifyContent="center" alignItems="center" width="100%">
              <Typography sx={{ color: "#cc3333", fontSize: "18px", paddingTop: "40px" }}>Testimonial</Typography>
              <Typography sx={{ color: "#cc3333", fontSize: "22px" }}><span style={{ color: divider }}>Review</span> form our guests</Typography>
              <Stack flexDirection={{ sm: "column", md: "row" }} gap="20px" paddingBottom="40px" alignItems="center">
                <Stack gap="15px" padding="15px" sx={{ background: "#1e1e1e" }} width={{ xs: "85%", md: "35%" }} justifyContent="center" alignItems="center">
                  <Avatar>
                    M
                  </Avatar>
                  <Typography sx={{ color: "#fff", fontSize: "22px" }}>Robert M. Dixon</Typography>
                  <Typography sx={{ color: "#fff", fontSize: "16px" }}>Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...</Typography>
                </Stack>
                <Stack gap="15px" padding="15px" sx={{ background: "#1e1e1e" }} width={{ xs: "85%", md: "35%" }} justifyContent="center" alignItems="center">
                  <Avatar>
                    M
                  </Avatar>
                  <Typography sx={{ color: "#fff", fontSize: "22px" }}>Robert M. Dixon</Typography>
                  <Typography sx={{ color: "#fff", fontSize: "16px" }}>Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...</Typography>
                </Stack>
                <Stack gap="15px" padding="15px" sx={{ background: "#1e1e1e" }} width={{ xs: "85%", md: "35%" }} justifyContent="center" alignItems="center">
                  <Avatar>
                    M
                  </Avatar>
                  <Typography sx={{ color: "#fff", fontSize: "22px" }}>Robert M. Dixon</Typography>
                  <Typography sx={{ color: "#fff", fontSize: "16px" }}>Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...</Typography>
                </Stack>

              </Stack>
            </Stack>
          </Stack>

          <Navbar Change={Change} isDarkMode={isDarkMode} />
        </body>
      </ThemeProvider>
    </>
  )
}
