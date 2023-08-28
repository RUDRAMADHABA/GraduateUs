import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Phone from "/pictures/phone.png";
import AppleIcon from "@mui/icons-material/Apple";
import { Button, Link } from "@mui/material";
import { motion } from "framer-motion";
import styles from "/styles/Home.module.css";
import playstore from "../pictures/playstore.svg";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const theme = createTheme();
export default function HomeM() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const userSession = await getSession();
      setSession(userSession);
    };

    checkSession();
  }, []);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {shouldAnimate && (
        <Box
          sx={{
            backgroundColor: "#151515",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            paddingTop: "70px",
            justifyContent: "space-around",
            gap: "0px",
            height: "100vh",
            alignItems: "center",
            paddingBottom: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "80px",
            }}
          >
            <Box>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      md: "110px",
                      sm: "110px",
                      xs: "60px",
                      lg: "150px",
                    },
                    color: "#FFFFFF",
                    opacity: "0.7",
                    textTransform: "uppercase",
                    background: "linear-gradient(180deg, #d2d2d2 , #000000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    position: "relative",
                    left: { lg: "100px" },
                    top: { lg: "80px" },
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                  }}
                >
                  Graduate
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "center", lg: "right" },
                    position: "relative",
                    top: { xs: "20px", md: "90px" },
                    fontSize: {
                      md: "110px",
                      sm: "110px",
                      xs: "60px",
                      lg: "150px",
                    },
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    opacity: "0.4",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "#d2d2d2",
                    position: "relative",
                    left: { md: "10px", lg: "20px" },
                    top: { xs: "15px", lg: "180px" },
                  }}
                >
                  Us
                </Typography>
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <Typography
                fontFamily="Montserrat"
                sx={{
                  fontSize: { xs: "18px", md: "25px" },
                  color: "#fff",
                  width: { xs: "300px", md: "400px" },
                  marginTop: { xs: "20px", md: "0px" },
                }}
              >
                Challenge yourself towards your future dream job and get bunch
                of benefits
              </Typography>
            </motion.div>
            <Box>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Link href="/signup">
                  {" "}
                  <Button
                    sx={{
                      border: "2px solid rgba(255, 255, 255, 0.44)",
                      borderRadius: "38px",
                      fontFamily: "Montserrat",
                      textTransform: "initial",
                      color: "#000000",
                      paddingLeft: "40px",
                      paddingRight: "40px",
                      background: "#ffffff",
                      fontSize: { xs: "12px", md: "15px" },
                      fontWeight: "900",
                      boxShadow:
                        "inset -7px 0px 4px rgba(0, 0, 0, 0.25), inset 6px 2px 4px rgba(0, 0, 0, 0.25)",
                      "&:hover": {
                        color: "#f5f5f5",
                      },
                    }}
                  >
                    Let's Go
                  </Button>
                </Link>
              </motion.div>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                sx={{
                  border: "2px solid #FFFFFF",
                  borderRadius: "38px",
                  fontFamily: "Montserrat",
                  textTransform: "initial",
                  color: "#F3F3F3",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginRight: "20px",
                  fontSize: { xs: "14px", md: "20px" },
                }}
              >
                <AppleIcon sx={{ color: "#ffffff", marginRight: "5px " }} />
                App Store
              </Button>
              <Button
                sx={{
                  border: "2px solid #FFFFFF",
                  borderRadius: "38px",
                  fontFamily: "Montserrat",
                  textTransform: "initial",
                  color: "#F3F3F3",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginLeft: "15px",
                  fontSize: { xs: "14px", md: "20px" },
                }}
              >
                <Image
                  src={playstore}
                  width="20"
                  height="20"
                  alt="play"
                  style={{ marginRight: "5px" }}
                />
                Play Store
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              position: "relative",
              left: { md: "-50px", lg: "-80px" },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src={Phone}
                alt="IMAGE"
                height={580}
                width={423}
                className={styles.phone}
              />
            </motion.div>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}
