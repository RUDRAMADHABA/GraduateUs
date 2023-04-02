import React from "react";
import { TextField, Button, Typography, Grid, Toolbar, CssBaseline, Box } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import logo from '/pictures/logo.png';
import pic from '/pictures/pic.png';
import Link from 'next/link'
import Image from 'next/image';
import "@fontsource/montserrat";

const Signin = () => {
	return (
		<>
		<Grid sx={{
			backgroundColor: '#000',
			fontFamily: 'montserrat',
			paddingBottom:'180px',
			
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
			<Grid sx={{display:'flex',flexDirection:'row'}}>
				<Grid container sx={{ color: "#fff" }}>
					<Grid item xs={15} md={5.7}>
						<Typography sx={{
							position: "relative",
							textDecoration: "none",
							fontWeight: '700',
							fontSize: '40px',
							top: 90,
							left: 32,
							fontFamily: "montserrat",
							marginBottom: "65px",
						}} gutterBottom >Sign In</Typography><br />

						<Typography sx={{
							position: "relative",
							fontWeight: '600',
							fontSize: '18px',
							top: 68,
							left: 32,
							opacity: 0.79,
							fontFamily: "montserrat"
						}}>Username/Email</Typography><br />
						<TextField size="small" sx={{
							width: {
								position: "relative",
								xs: 280,
								sm: 400,
								md: 480
							},
							left: 32,
							top: 57,
							right: 32,

							borderRadius: '5px',
							border: 'solid 1px',
							fontFamily: "montserrat"
						}} /><br />

						<Typography sx={{
							position: "relative",
							fontWeight: '600',
							fontSize: '18px',
							top: 85,
							left: 32,
							opacity: 0.79,
							fontFamily: "montserrat"
						}} gutterBottom >Password</Typography>
						<br />
						<TextField size="small" type="password" sx={{
							width: {
								xs: 280,
								sm: 400,
								md: 480
							},
							left: 32,
							right: 32,
							top: 70,
							borderRadius: '5px',
							border: 'solid 1px',
							fontFamily: "montserrat"
						}
						} /><br />
						<Typography sx={{
							position: "relative",
							fontWeight: '500',
							fontSize: '15px',
							top: 90,
							left: 32,
							fontFamily: "montserrat",
							opacity: "0.65"
						}} gutterBottom>forgot password?</Typography>
						<br />
						<Button variant="contained" sx={{
							textDecoration: "none",
							color: "#000",
							backgroundColor: '#fff',
							borderRadius: '10px',
							fontWeight: '500',
							fontSize: '30px',
							padding: "2px",
							marginTop: "90px",
							marginRight: "32px",
							marginLeft: "32px",
							marginBottom: "16px",
							"&:hover": {
								fontFamily: "montserrat",
								background: "#bfbfbf"
							}
						}}><ArrowRightAltIcon fontSize="40px" /> </Button><br />
						<Link href="signup"><Typography sx={{
							position: "relative",
							fontWeight: '500',
							fontSize: '15px',
							marginTop:'20px',
							left: 32,
							color:'#fff',
							fontFamily: "montserrat",
						}} gutterBottom >New User? &nbsp; Sign Up</Typography></Link>
					</Grid>
					<Box sx={{marginTop:'50px',
							display: {
								xs: 'none',
								sm: 'none',
								lg: 'block',
							}
						}}>
						<Image src={pic} alt="IMAGE" height={450} width={620}/>
					</Box>
				</Grid>
			</Grid>
		</Grid>
		</>
	);
}

export default Signin;
