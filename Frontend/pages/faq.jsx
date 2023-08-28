import Navbar from "../layout/Interncompo/Navbar"
import { Typography } from "@mui/material"
import { Stack } from "@mui/system";
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import FaqQues from "../layout/faq_ques";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";

export default function Faq() {

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState('#262727');
  const [letter, setletter] = useState('#fff');
  const [divider, setDivider] = useState('#fff');
  const Change = () => {

    setIsDarkMode(!isDarkMode);
    if (color === '#262727') {
      setColor('white');
      setletter('#000')
      setDivider('#1e1e1e')
    } else {
      setColor('#262727')
      setletter('#fff')
      setDivider('#fff')
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>

        <body style={{ background: color, minHeight: "100vh", color: letter }}>
          <Stack marginTop={{ sm: "125px", md: "145px" }} marginLeft={{ sm: "65px", md: "270px" }} marginBottom={"30px"} padding={"20px"}>
            <Typography variant="h4" style={{ fontWeight: "600" }}>Frequently Asked Questions</Typography>
            <Typography variant="h6" style={{ fontWeight: "300", opacity: "0.5", marginTop: "10px", marginBottom: "50px" }}>Quick answers to questions you may have.</Typography>
            <Stack>
              {FaqQues.map((item, index) => (
                <ListItem key={index} style={{ marginBottom: "30px" }}>
                  <ListItemIcon sx={{ border: "2px solid", borderRadius: "5px", width: "20px", height: "50px", marginRight: "20px", paddingLeft: "12px", paddingTop: "10px", color: letter, minWidth: "50px" }}>{item.icon}</ListItemIcon>
                  <Stack flexDirection="column">
                    <Typography component="div" style={{ fontSize: "20px", fontWeight: "700" }}>{item.ques}</Typography>
                    <Typography component="div" style={{ fontSize: "18px", opacity: "0.7" }}>{item.ans}</Typography>
                  </Stack>
                </ListItem>
              ))}
            </Stack>

          </Stack>
          <Navbar Change={Change} isDarkMode={isDarkMode} />
        </body>
      </ThemeProvider>
    </>
  )
}