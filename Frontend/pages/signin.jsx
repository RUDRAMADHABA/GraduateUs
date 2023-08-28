import React from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Toolbar,
  CssBaseline,
  Box,
  Stack,
  InputLabel,
  Modal,
  FilledInput,
  IconButton,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import logo from "/pictures/logo.png";
import pic from "/pictures/pic.png";
import Link from "next/link";
import Image from "next/image";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useRouter } from "next/router";
import AppContext from "../context/AppContext";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
//import { APIMethods } from "../lib/axios/api";
import { useSession } from "next-auth/react";

const Signin = () => {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const { data: session } = useSession();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // useEffect(() => {
  //   if (session) {
  //     router.push("/home");
  //   }
  // }, [session]);
  // console.log(session);

  const submit = async (event, email, pwd) => {
    event.preventDefault();
    setLoading(true);
    console.log(email, pwd);
    if (!pwd || !email) {
      return toast.error("All fields must be filled");
    }
    if (pwd.length < 8) {
      return toast.error("Credentials didn't match!");
    }
    try {
      // Call the signIn function with the "credentials" provider and the email and password
      const data = await signIn("credentials", {
        callbackUrl:"/home",
        email,
        password: pwd,
      });
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  //const { data: session } = useSession();
  const handleGoogleSignin = async () => {
    const userData = await signIn("google", { callbackUrl: "/home" });
  };
  const [open, setOpen] = useState(false);
  const [femail, setFemail] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setResetSent(false);
    setEmail("");
  };

  const forgotPas = async(e) => {
    e.preventDefault();
    setLoading1(true); 
    try {
      const response = await axios.post(
        "https://graduate-us-backend-gkli.onrender.com/user/forget-password",
        {
          email: femail,
        }
      ); 
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
    }    
    setLoading1(false); 
  };

  return (
    <>
      <body style={{ background: "#151515", minHeight: "100vh" }}>
        <Grid
          sx={{
            backgroundColor: "#151515",
          }}
        >
          <getTheme />
          <CssBaseline />
          <Toolbar
            sx={{
              position: "sticky",
              color: "#fff",
            }}
          >
            <Image src={logo} alt="IMAGE" height={25} width={25} />
            <Typography
              sx={{
                flexGrow: "1",
                cursor: "pointer",
                fontSize: "25px",
                paddingBottom: "10px",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              Graduate Us
            </Typography>
          </Toolbar>
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <Grid container sx={{ color: "#fff" }}>
              <Grid item xs={15} md={5.7}>
                <Typography
                  sx={{
                    position: "relative",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "40px",
                    top: 10,
                    left: 32,
                    fontFamily: "montserrat",
                    marginBottom: "10px",
                  }}
                  gutterBottom
                >
                  Sign In
                </Typography>
                <br />

                <Stack
                  justifyContent={"center"}
                  paddingLeft={"80px"}
                  gap={"15px"}
                  sx={{ width: "80vw" }}
                >
                  <Stack
                    justifyContent={"space-evenly"}
                    flexDirection={"row"}
                    sx={{
                      background: "#ffffff",
                      color: "#000",
                      maxWidth: "400px",
                      borderRadius: "10px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <AppleIcon />
                    <Typography>Sign in with Apple</Typography>
                  </Stack>
                  <Stack
                    onClick={handleGoogleSignin}
                    justifyContent={"space-evenly"}
                    flexDirection={"row"}
                    sx={{
                      background: "#ffffff",
                      color: "#000",
                      maxWidth: "400px",
                      borderRadius: "10px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <GoogleIcon sx={{ color: "#ea4335" }} />
                    <Typography>Sign in with Google</Typography>
                  </Stack>
                  {/* <Stack justifyContent={"space-evenly"} flexDirection={"row"} sx={{ background: '#ffffff', color: "#000", maxWidth: "400px", borderRadius: "10px", padding: "10px" }}>
									<TwitterIcon sx={{ color: "#1E8EEE" }} />
									<Typography>Sign in with Twitter</Typography>
								</Stack>
								<Stack justifyContent={"space-evenly"} flexDirection={"row"} sx={{ background: '#ffffff', color: "#000", maxWidth: "400px", borderRadius: "10px", padding: "10px" }}>
									<FacebookRoundedIcon sx={{ color: "#1877F2" }} />
									<Typography>Sign in with Facebook</Typography>
								</Stack> */}
                  <Typography
                    sx={{
                      textAlign: "center",
                      maxWidth: "400px",
                      fontSize: "20px",
                    }}
                  >
                    Or
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    position: "relative",
                    fontWeight: "600",
                    fontSize: "18px",
                    top: 18,
                    left: 32,
                    opacity: 0.79,
                    fontFamily: "montserrat",
                  }}
                >
                  Username/Email
                </Typography>
                <br />
                <TextField
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type={Email}
                  size="small"
                  sx={{
                    "& input": {
                      color: "#fff",
                    },
                    width: {
                      position: "relative",
                      xs: 280,
                      sm: 400,
                      md: 480,
                    },
                    left: 32,
                    borderRadius: "5px",
                    border: "solid 1px",
                  }}
                />
                <br />

                <InputLabel
                  htmlFor="filled-adornment-password"
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    top: 10,
                    left: 32,
                    opacity: 0.79,
                  }}
                >
                  Password
                </InputLabel>
                <FilledInput
                  inputProps={{ style: { padding: "0px 14px" } }}
                  sx={{
                    borderRadius: "6px",
                    border: "solid 1px #fff",
                    color: "#fff",
                    width: {
                      position: "relative",
                      xs: 280,
                      sm: 400,
                      md: 480,
                    },
                    left: 32,
                    top: 15,
                    right: 32,
                    height: "45px",
                  }}
                  id="filled-adornment-password"
                  value={pwd}
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                  type={showPassword ? "text" : "password"}
                  defaultValue={"current password"}
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: "#fff" }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  }
                />
                <br />

                <Typography
                  onClick={(e) => {
                    handleOpen()
                  }}
                  sx={{
                    position: "relative",
                    fontWeight: "500",
                    fontSize: "15px",
                    top: 20,
                    left: 32,
                    fontFamily: "montserrat",
                    opacity: "0.65",
                    cursor: "pointer",
                  }}
                  gutterBottom
                >
                  Forgot password?
                </Typography>
                <br />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="forgot-password-modal"
                  aria-describedby="forgot-password-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "background.paper",

                      boxShadow: 24,
                      p: 4,
                      minWidth: 300,
                      maxWidth: 400,
                    }}
                  >
                    <Stack
                      direction="row"
                      width="100%"
                      justifyContent="space-between"
                    >
                      <Typography
                        color="#3d3d3d"
                        fontSize="22px"
                        fontWeight="500"
                        id="forgot-password-modal"
                      >
                        Forgot Password
                      </Typography>
                      <Button onClick={handleClose} sx={{ display: "flex", color:"#454545", fontWeight:"900" }}>
                        X
                      </Button>
                    </Stack>
                    <Typography
                      id="forgot-password-modal-description"
                      gutterBottom
                      marginBottom="20px"
                    >
                      Please enter your email address to reset your password.
                    </Typography>

                    {resetSent ? (
                      <Typography fontSize="20px" fontWeight="500" gutterBottom>
                        Reset link sent!
                      </Typography>
                    ) : (
                      <form onSubmit={forgotPas}>
                        <Stack spacing={2}>
                          <TextField
                            label="Email"
                            type="email"
                            value={femail}
                            onChange={(e) => setFemail(e.target.value)}
                            required
                            fullWidth
                          />
                          <Button
                            type="submit"
                            sx={{
                              backgroundColor: "#3d3d3d",
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "#3d3d3d",
                              },
                            }}
                            disabled={loading1}
                          >
                            {loading1 ? "Sending..." : "Send Reset Link"}
                          </Button>
                        </Stack>
                      </form>
                    )}
                  </Box>
                </Modal>
                <LoadingButton
                  // loading={loading}
                  onClick={() => submit(event, email, pwd)}
                  variant="contained"
                  sx={{
                    textDecoration: "none",
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    fontWeight: "500",
                    fontSize: "30px",
                    padding: "2px",
                    marginRight: "32px",
                    marginLeft: "32px",
                    marginBottom: "16px",
                    "&:hover": {
                      fontFamily: "montserrat",
                      background: "#bfbfbf",
                    },
                    "&:active": {
                      background: "#bfbfbf",
                    },
                    "& .MuiCircularProgress-root": {
                      color: "#fff",
                    },
                  }}
                >
                  <ArrowRightAltIcon fontSize="40px" />{" "}
                </LoadingButton>
                <br />
                <Link href="signup">
                  <Typography
                    sx={{
                      position: "relative",
                      fontWeight: "500",
                      fontSize: "15px",
                      left: 32,
                      color: "#fff",
                      paddingBottom: "30px",
                      fontFamily: "montserrat",
                      "&:hover": {
                        color: "#ffeaad",
                      },
                    }}
                    gutterBottom
                  >
                    New User? &nbsp; Sign Up
                  </Typography>
                </Link>
              </Grid>
              <Box
                sx={{
                  marginTop: "120px",
                  display: {
                    xs: "none",
                    sm: "none",
                    lg: "block",
                  },
                }}
              >
                <Image src={pic} alt="IMAGE" height={450} width={620} />
              </Box>
            </Grid>
          </Grid>
          <ToastContainer />
        </Grid>
      </body>
    </>
  );
};

export default Signin;
