import React  from "react";
import { TextField, Button, Typography, Grid, Toolbar, CssBaseline, Box, Stack, InputLabel, FilledInput, IconButton, } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import logo from '/pictures/logo.png';
import pic from '/pictures/pic.png';
import Link from 'next/link'
import Image from 'next/image';
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useRouter } from "next/router";
import "@fontsource/montserrat";
import AppContext from "../context/AppContext";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";

const Signin = () => {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
	  event.preventDefault();
  };
	const submit = async (email, pwd) => {
		if ( !pwd || !email ) {
			return toast.error("All field must be filled");
		}
		if (pwd.length < 8)
		{
			return toast.error("Credentials didn't match !");
		}
	setLoading(true);
    const { data } = await axios.post(
      "https://graduate-us.onrender.com/api/user/login",
      { email: email, password: pwd },
      {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    if (await data.success) {
      toast.success("Login Sucessful");

      localStorage.setItem("token", await data.token);
      setIsAuthenticated(true);
      // router.push("/");
      router.back();
      setPwd("");
      setEmail("");
    } 
	else {
      toast.error("Credentials didn't match !");
    }
    setLoading(false);
};
 

	return (
		<>
		<body style={{background:"#151515", minHeight:"100vh"}}>
			<Grid sx={{
				backgroundColor: '#151515',
				
			}}>
				<getTheme />
				<CssBaseline />
				<Toolbar sx={{
					position: "sticky", color: "#fff"
				}}>
					<Image src={logo} alt="IMAGE" height={25} width={25} />
					<Typography sx={{
						flexGrow: "1",
						cursor: "pointer",
						fontSize: '25px',
						paddingBottom: "10px",
						marginLeft: '20px',
						marginTop: '10px',
					}} >
						Graduate Us
					</Typography>
				</Toolbar>
				<Grid sx={{ display: 'flex', flexDirection: 'row' }}>
					<Grid container sx={{ color: "#fff" }}>
						<Grid item xs={15} md={5.7}>
							<Typography sx={{
								position: "relative",
								textDecoration: "none",
								fontWeight: '700',
								fontSize: '40px',
								top: 10,
								left: 32,
								fontFamily: "montserrat",
								marginBottom: "10px",
							}} gutterBottom >Sign In</Typography><br />

							<Stack justifyContent={"center"} paddingLeft={"80px"} gap={"15px"} sx={{width:"80vw"}}>
								<Stack justifyContent={"space-evenly"} flexDirection={"row"} sx={{ background: '#ffffff', color: "#000", maxWidth: "400px", borderRadius: "10px", padding: "10px" }}>
									<AppleIcon />
									<Typography>Sign in with Apple</Typography>
								</Stack>
								<Stack justifyContent={"space-evenly"} flexDirection={"row"} sx={{ background: '#ffffff', color: "#000", maxWidth: "400px", borderRadius: "10px", padding: "10px" }}>
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
								<Typography sx={{ textAlign: "center", maxWidth: "400px", fontSize: "20px" }}>Or</Typography>
							</Stack>

							<Typography sx={{
								position: "relative",
								fontWeight: '600',
								fontSize: '18px',
								top: 18,
								left: 32,
								opacity: 0.79,
								fontFamily: "montserrat"
							}}>Username/Email</Typography><br />
							<TextField
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								type={Email} size="small" sx={{
									'& input': {
										color: "#fff"
									},
									width: {
										position: "relative",
										xs: 280,
										sm: 400,
										md: 480
									},
									left: 32,
									borderRadius: '5px',
									border: 'solid 1px',
								}} /><br />

							<InputLabel htmlFor="filled-adornment-password" sx={{
								color: "#fff", fontSize: '18px',
								top: 10,
								left: 32,
								opacity: 0.79
							}}>Password</InputLabel>
							<FilledInput 
							inputProps={{style:{padding:"0px 14px"}}}
							sx={{
								borderRadius: '6px',			
								border: 'solid 1px #fff', color: '#fff', width: {
									position: "relative",
									xs: 280,
									sm: 400,
									md: 480
								},
								left: 32,
								top: 15,
								right: 32,
								height: '45px'
							}}
								id="filled-adornment-password"
								value={pwd}
								onChange={(e) => {
									setPwd(e.target.value);
								}}
								type={showPassword ? 'text' : 'password'}
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
							/><br />

							<Typography sx={{
								position: "relative",
								fontWeight: '500',
								fontSize: '15px',
								top: 20,
								left: 32,
								fontFamily: "montserrat",
								opacity: "0.65"
							}} gutterBottom>forgot password?</Typography>
							<br />
							<LoadingButton
            loading={loading} onClick={() => submit(email, pwd)} variant="contained" sx={{
								
								textDecoration: "none",
								color: "#000",
								backgroundColor: '#fff',
								borderRadius: '10px',
								fontWeight: '500',
								fontSize: '30px',
								padding: "2px",
								marginRight: "32px",
								marginLeft: "32px",
								marginBottom: "16px",
								"&:hover": {
									fontFamily: "montserrat",
									background: "#bfbfbf"
								},
								"&:active": {
									background: "#bfbfbf"
								},
								'& .MuiCircularProgress-root': {
									color: "#fff"
								  }
							}}><ArrowRightAltIcon fontSize="40px" /> </LoadingButton><br />
							<Link href="signup"><Typography sx={{
								position: "relative",
								fontWeight: '500',
								fontSize: '15px',
								left: 32,
								color: '#fff',
								paddingBottom: '30px',
								fontFamily: "montserrat",
								'&:hover': {
									color: "#ffeaad",
								}
							}} gutterBottom >New User? &nbsp; Sign Up</Typography></Link>
						</Grid>
						<Box sx={{
							marginTop: '120px',
							display: {
								xs: 'none',
								sm: 'none',
								lg: 'block',
							}
						}}>
							<Image src={pic} alt="IMAGE" height={450} width={620} />
						</Box>
					</Grid>
				</Grid>
				<ToastContainer />
			</Grid>
			</body>
		</>
	);
}

export default Signin;
