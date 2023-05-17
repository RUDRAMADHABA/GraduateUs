import React from "react";
import { TextField, Button, Typography, Grid, Toolbar, CssBaseline, Box, InputLabel, FilledInput, IconButton, Hidden } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Checkbox from '@mui/material/Checkbox';
import logo from '/pictures/logo.png';
import pic2 from '/pictures/pic2.png';
import Link from 'next/link'
import axios from "axios";
import Image from 'next/image';
import "@fontsource/Montserrat";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Signup = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const [showPassword1, setShowPassword1] = React.useState(false);

	const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const [fname, setFname] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [cpwd, setCpwd] = useState("");
	const [agree, setAgree] = useState(false);

	const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const handleOpen = async () => {
		if (
			!fname ||
			!email ||
			!pwd ||
			!cpwd
		) {
			return toast.error("All field must be filled");
		}
		if (!regexExp.test(email)) {
			return toast.error("Enter valid Email");
		}
		if (pwd.length < 8)
			toast.error("Password length must be at least 8 characters!");
		if (pwd != cpwd) {
			return toast.error("Password does not match");
		}
		if (agree == false) {
			return toast.error("Accept the terms and condition to proceed");
		}
		
		const { data } = await axios.post(
			"http://localhost:5000/user/register/",
			{
				username: fname,
				email: email,
				password: pwd,
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					
				},
			}
		);

		if (data.success) {
			toast.success("Registration Successfull");
			// window.location.reload()
			setFname("");
			setEmail("");
			setPwd("");
			setCpwd("");

			localStorage.setItem("token", data.token);
			// setIsAuthenticated(true);
			// // console.log("routeer");
			// router.back();
			// if (next) {
			// }
		} else {
			toast.error(await data.message);
		}
	};
	// setVerifyLoad(false);

return (
	<body style={{ background: "#151515", minHeight: "100vh" }}>
		<Grid sx={{
			backgroundColor: '#151515',
			fontFamily: 'Montserrat',
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
			<Grid sx={{
				display: 'flex', flexDirection: 'row',
				overflow: 'hidden'
			}}>
				<Grid container sx={{ color: "#fff" }}>
					<Grid item xs={15} md={5.7}>
						<Typography sx={{
							position: "relative",
							textDecoration: "none",
							fontWeight: '700',
							fontSize: '35px',
							fontFamily: "Montserrat",
							marginLeft: '32px',
							marginTop: '25px'
						}} gutterBottom >Sign Up</Typography><br />

						<Typography sx={{
							position: "relative",
							fontWeight: '600',
							fontSize: '14px',
							left: 32,
							opacity: 0.79,
							fontFamily: "Montserrat"
						}}>Username</Typography><br />
						<TextField size="small"
							value={fname}
							onChange={(e) => {
								setFname(e.target.value);
							}}
							sx={{
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
								top: -17,
								color: '#fff',
								borderRadius: '5px',
								border: 'solid 1px'
							}} /><br />

						<Typography sx={{
							position: "relative",
							fontWeight: '600',
							fontSize: '14px',
							top: -8,
							left: 32,
							opacity: 0.79,
							fontFamily: "Montserrat"
						}}>Email</Typography><br />
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
								top: -17,
								borderRadius: '5px',
								border: 'solid 1px',
							}} /><br />


						<InputLabel htmlFor="filled-adornment-password" sx={{
							color: "#fff", fontSize: '14px',
							left: 32,
							opacity: 0.79
						}}>Password</InputLabel>
						<FilledInput
							inputProps={{ style: { padding: "0px 14px" } }}
							sx={{
								borderRadius: '6px',
								border: 'solid 1px #fff', color: '#fff', width: {
									position: "relative",
									xs: 280,
									sm: 400,
									md: 480
								},
								left: 32,
								top: 10,
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

						<InputLabel htmlFor="filled-adornment-password" sx={{
							color: "#fff", fontSize: '14px',
							left: 32,
							top: 20,
							opacity: 0.79,
						}}>Current Password</InputLabel>
						<FilledInput
							inputProps={{ style: { padding: "0px 14px" } }}
							sx={{
								borderRadius: '6px',

								border: 'solid 1px #fff', color: '#fff', width: {
									position: "relative",
									xs: 280,
									sm: 400,
									md: 480
								},
								left: 32,
								top: 30,
								right: 32,
								height: '45px'
							}}
							id="filled-adornment-password"
							value={cpwd}
							onChange={(e) => {
								setCpwd(e.target.value);
							}}
							type={showPassword1 ? 'text' : 'password'}
							defaultValue={"current password"}
							endAdornment={

								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword1}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									sx={{ color: "#fff" }}
								>
									{showPassword1 ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							}
						/><br />

						<Toolbar sx={{ position: 'relative', marginTop: '20px' }}>
							<Checkbox sx={{ color: '#bfbfbf' }}
								checked={agree}
								inputProps={{ 'aria-label': 'controlled checkbox' }}
								onChange={(e) => {
									setAgree(e.target.checked);
								}} /><Typography sx={{ fontSize: '12px', opacity: '0.65' }}>I have read all and agree with all the Terms and conditions and Privacy policy</Typography></Toolbar><br />

						<Button
							onClick={handleOpen}
							variant="contained" sx={{
								textDecoration: "none",
								color: "#000",
								backgroundColor: '#fff',
								borderRadius: '10px',
								fontWeight: '500',
								fontSize: '30px',
								padding: "2px",
								position: 'relative',
								top: -20,
								marginRight: "32px",
								marginLeft: "32px",
								"&:hover": {
									fontFamily: "Montserrat",
									background: "#bfbfbf"
								}
							}}><ArrowRightAltIcon fontSize="40px" /> </Button><br />
						<Link href="signin"><Typography sx={{
							paddingBottom: "20px",
							position: "relative",
							fontWeight: '500',
							fontSize: '15px',
							left: 32,
							// top: -50,
							color: '#fff',
							fontFamily: "Montserrat",
							'&:hover': {
								color: "#ffeaad",
							}
						}} >Already have an account? &nbsp; Sign In</Typography></Link>
					</Grid>
					<Box sx={{
						marginTop: '55px',
						display: {
							xs: 'none',
							sm: 'none',
							lg: 'block',
						}
					}}>
						<Image src={pic2} alt="IMAGE" height={450} width={620} />
					</Box>
				</Grid>
			</Grid>
			<ToastContainer />
		</Grid>
	</body>

);
}

export default Signup;
