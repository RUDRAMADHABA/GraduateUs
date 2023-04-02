import React from "react";
import { TextField, Button, Typography, Grid, Toolbar, CssBaseline, Box } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Checkbox from '@mui/material/Checkbox';
import logo from '/pictures/logo.png';
import pic2 from '/pictures/pic2.png';
import Link from 'next/link'
import Image from 'next/image';
import "@fontsource/Montserrat";
// import '../styles/style.css';

const Signup = () => {
	return (
		<Grid className="grid" sx={{
			backgroundColor: '#000',
			fontFamily: 'Montserrat',
			overflow: 'hidden',
			// paddingBottom:'220px'
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
			<Grid sx={{display:'flex',flexDirection:'row',
			overflow: 'hidden'}}>
				<Grid container sx={{ color: "#fff" }}>
					<Grid item xs={15} md={5.7}>
						<Typography sx={{
							position: "relative",
							textDecoration: "none",
							fontWeight: '700',
							fontSize: '35px',
							fontFamily: "Montserrat",
							marginLeft:'32px',
							marginTop:'25px'
						}} gutterBottom >Sign Up</Typography><br />

						<Typography sx={{
							position: "relative",
							fontWeight: '600',
							fontSize: '14px',
							left: 32,
							opacity: 0.79,
							fontFamily: "Montserrat"
						}}>Username</Typography><br />
						<TextField size="small" sx={{
							width: {
								position: "relative",
								xs: 280,
								sm: 400,
								md: 480
							},
							left: 32,
							top:-17,
							right: 32,
							borderRadius: '5px',
							border: 'solid 1px',
							fontFamily: "Montserrat"
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
						<TextField size="small" sx={{
							width: {
								position: "relative",
								xs: 280,
								sm: 400,
								md: 480
							},
							left: 32,
							top: -27,
							right: 32,

							borderRadius: '5px',
							border: 'solid 1px',
							fontFamily: "Montserrat"
						}} /><br />

						<Typography sx={{
							position: "relative",
							fontWeight: '600',
							fontSize: '14px',
							top: -18,
							left: 32,
							opacity: 0.79,
							fontFamily: "Montserrat"
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
							top: -40,
							borderRadius: '5px',
							border: 'solid 1px',
							fontFamily: "Montserrat"
						}
						} /><br />
						
						<Typography sx={{
							position: "relative",
							fontWeight: '600',
							fontSize: '14px',
							top: -30,
							left: 32,
							opacity: 0.79,
							fontFamily: "Montserrat"
						}}>Confirm Password</Typography><br />
						<TextField size="small" sx={{
							width: {
								position: "relative",
								xs: 280,
								sm: 400,
								md: 480
							},
							left: 32,
							top: -45,
							right: 32,

							borderRadius: '5px',
							border: 'solid 1px',
							fontFamily: "Montserrat"
						}} /><br />

							<Toolbar sx={{position:'relative',top:-50,marginTop:'20px'}}>
							<Checkbox sx={{color:'#bfbfbf'}}/><Typography sx={{fontSize:'12px',opacity:'0.65'}}>I have read all and agree with all the Terms and conditions and Privacy policy</Typography></Toolbar><br />

						<Button variant="contained" sx={{
							textDecoration: "none",
							color: "#000",
							backgroundColor: '#fff',
							borderRadius: '10px',
							fontWeight: '500',
							fontSize: '30px',
							padding: "2px",
							position:'relative',
							top:-75,
							marginRight: "32px",
							marginLeft: "32px",
							// marginBottom: "1px",
							"&:hover": {
								fontFamily: "Montserrat",
								background: "#bfbfbf"
							}
						}}><ArrowRightAltIcon fontSize="40px" /> </Button><br />
						<Link href="signin"><Typography sx={{
							position: "relative",
							fontWeight: '500',
							fontSize: '15px',
							// marginBottom:'10px',
							left: 32,
							top:-50,
							color:'#fff',
							fontFamily: "Montserrat",
						}} >Already have an account? &nbsp; Sign In</Typography></Link>
					</Grid>
					<Box sx={{marginTop:'55px',
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
		</Grid>
	);
}

export default Signup;
