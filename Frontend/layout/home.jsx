import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import Phone from '/pictures/phone.png';
import Lamp from "/pictures/lamb.png"
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material";
import { motion } from 'framer-motion'
import styles from '/styles/Home.module.css'
import "@fontsource/poppins"
const theme = createTheme();
export default function HomeM() {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        setShouldAnimate(true)
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {shouldAnimate && (
                <Box sx={{ backgroundColor: '#151515', display: "flex", flexDirection: { xs: "column", lg: "row" }, paddingTop: "70px", justifyContent: "space-around", gap: "0px", height: "100vh", alignItems: "center", paddingBottom: "50px" }}>


                    <Box sx={{
                        display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center", paddingBottom: "80px"
                    }}>
                        <Box>
                            <motion.div
                                initial={{ y: 110, x: 120, opacity: 0 }}
                                animate={{ y: 0, x: 0, opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            >
                                <Typography fontFamily="poppins" sx={{
                                    fontSize: { md: '110px', sm: '110px', xs: '70px', lg: "150px" },
                                    color: '#FFFFFF', opacity: '0.1', fontWeight: "900", textTransform: "uppercase", background: "linear-gradient(180deg, #d2d2d2 , #000000)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    textFillColor: "transparent", position: "relative", left: { lg: "100px" }, top: { lg: "80px" }

                                }}>Graduate</Typography>
                                <Typography fontFamily="poppins" sx={{
                                    textAlign: { xs: "center", lg: "right" }, position: "relative", top: { xs: "20px", md: "90px" },
                                    fontSize: { md: '110px', sm: '110px', xs: '70px', lg: "150px" },
                                    lineHeight: '20px', color: '#FFFFFF', opacity: '0.1', fontWeight: "900", textTransform: "uppercase",
                                    color: "#d2d2d2",
                                    position: "relative", left: { md: "10px", lg: "20px" }, top: { xs: "15px", lg: "180px" }
                                }}>Us</Typography>
                            </motion.div>
                        </Box>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                        >

                            <Typography fontFamily="poppins" sx={{
                                fontSize: { xs: "18px", md: '25px' },
                                color: "#fff",
                                width: { xs: "300px", md: "400px" }, marginTop: { xs: "20px", md: "0px" }
                            }}>Challenge yourself towards your future dream job and get bunch of benefits</Typography>
                        </motion.div>
                        <Box>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            >
                                <Button sx={{
                                    border: '2px solid rgba(255, 255, 255, 0.44)',
                                    borderRadius: '38px', fontFamily: 'poppins', textTransform: "initial", color: "#000000", paddingLeft: '40px', paddingRight: '40px', background: '#ffffff', fontSize: { xs: "12px", md: "15px" }, fontWeight: "900", boxShadow: "inset -7px 0px 4px rgba(0, 0, 0, 0.25), inset 6px 2px 4px rgba(0, 0, 0, 0.25)"
                                }}>Let's Go</Button>
                            </motion.div>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: "row" }}>
                            <Button sx={{
                                border: '2px solid #FFFFFF',
                                borderRadius: '38px', fontFamily: 'poppins', textTransform: "initial", color: "#F3F3F3", paddingLeft: '15px', paddingRight: '15px', marginRight: "20px", fontSize: { xs: "14px", md: "20px" }
                            }}>
                                <AppleIcon sx={{ color: "#ffffff", marginRight: "5px " }} />App Store</Button>
                            <Button sx={{
                                border: '2px solid #FFFFFF',
                                borderRadius: '38px', fontFamily: 'poppins', textTransform: "initial", color: "#F3F3F3", paddingLeft: '15px', paddingRight: '15px', marginLeft: "15px", fontSize: { xs: "14px", md: "20px" }
                            }}>
                                <PlayArrowIcon sx={{ color: "#ffffff", marginRight: "5px " }} />Play Store</Button>
                        </Box>


                    </Box>


                    <Box sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center", position: "relative", left: { md: "-50px", lg: "-80px" } }}>
                    <motion.div
                                initial={{ opacity: 0 }}
                                animate={{  opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            >
                  
                        <Image src={Phone} alt="IMAGE" height={580} width={423} className={styles.phone} />
                        </motion.div>
                    </Box>



                </Box>
            )}
        </ThemeProvider>
    );
}