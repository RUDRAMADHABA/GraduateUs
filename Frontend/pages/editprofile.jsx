import Navbar from "../layout/Interncompo/Navbar"
import { Button, TextField, Typography, Tooltip, IconButton, Avatar, InputLabel, FilledInput, Badge } from "@mui/material"
import { Stack } from "@mui/system";
import { styled } from '@mui/material/styles';
import * as React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function EditProfile() {

    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    }));
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [showPassword1, setShowPassword1] = React.useState(false);

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [li, setLi] = useState("");
    const [pwd, setPwd] = useState("");
    const [npwd, setNpwd] = useState("");
    const [cpwd, setCpwd] = useState("");

    const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleOpen = async () => {
        if (
            !fname ||
            !lname ||
            !phone ||
            !email ||
            !address ||
            !li ||
            !pwd ||
            !npwd ||
            !cpwd
        ) {
            return toast.error("All field must be filled");
        }
        if (phone.length !== 10) {
            return toast.error("Enter valid Phone number");
        }
        if (!regexExp.test(email)) {
            return toast.error("Enter valid Email");
        }
        if (npwd.length < 8)
            toast.error("Password length must be at least 8 characters!");
        if (npwd != cpwd) {
            return toast.error("Password does not match");
        }

    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000', // Change the primary color
            },
        },
        typography: {
            allVariants: {
                fontFamily: 'Poppins',
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
        if(color === '#262727'){
        setColor('white');
         setletter('#000')
         setDivider('#1e1e1e')
        }else{
          setColor('#262727')
          setletter('#fff')
          setDivider('#fff')
        }
      };

    return (
        <>
            <ThemeProvider theme={theme}>

                <body style={{ background: color, minHeight: "100vh", color: "#fff" }}>
                    <Stack marginTop={{ sm: "125px", md: "145px" }} marginLeft={{ sm: "65px", md: "270px" }} marginBottom={"30px"}>
                        <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{ background: "#333838" }} padding={"30px"} marginBottom={"30px"} position={"relative"} top={"-32px"} borderRadius={"0 0 25px 25px"}>
                            <Typography>Edit Profile</Typography>
                            <ShareIcon />
                        </Stack>
                        <Stack flexDirection={"row"} justifyContent={"space-around"} flexWrap={"wrap"} >
                            <Stack border={"2px solid #434141"} padding={"20px"} borderRadius={"20px"} marginBottom={"30px"} color={"#fff"}>
                                <Typography sx={{
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    opacity: 0.79,color:letter
                                }}>First Name</Typography><br />
                                <TextField size="small"
                                    value={fname}
                                    onChange={(e) => {
                                        setFname(e.target.value);
                                    }}
                                    sx={{
                                        '& input': {
                                            color: letter
                                        },
                                        width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                        color: '#fff',
                                        borderRadius: '5px',
                                        border: 'solid 1px'
                                    }} /><br />

                                <Typography sx={{
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    opacity: 0.79,color:letter
                                }}>Last Name</Typography><br />
                                <TextField
                                    value={lname}
                                    onChange={(e) => {
                                        setLname(e.target.value);
                                    }}
                                    size="small" sx={{
                                        '& input': {
                                            color: letter
                                        },
                                        width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                        borderRadius: '5px',
                                        border: 'solid 1px',
                                    }} /><br />

                                <Typography sx={{
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    opacity: 0.79,color:letter
                                }}>Phone Number</Typography><br />
                                <TextField
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                    size="small" InputProps={{ inputProps: { pattern: "[0-9]*", } }} sx={{
                                        '& input': {
                                            color: letter
                                        }, '::selection': {
                                            backgroundColor: "transparent"
                                        },
                                        width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                        borderRadius: '5px',
                                        border: 'solid 1px',
                                    }} /><br />

                                <Typography sx={{
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    opacity: 0.79,color:letter
                                }}>Email Id</Typography><br />
                                <TextField
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type={Email} size="small" sx={{
                                        '& input': {
                                            color: letter
                                        },
                                        width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                        borderRadius: '5px',
                                        border: 'solid 1px',
                                    }} /><br />

                                <Typography sx={{
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    opacity: 0.79,color:letter
                                }}>Address</Typography><br />
                                <TextField
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    size="small" sx={{
                                        '& input': {
                                            color: letter
                                        },
                                        width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                        borderRadius: '5px',
                                        border: 'solid 1px',
                                    }} /><br />

                                <Typography sx={{
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    opacity: 0.79,color:letter
                                }}>LinkedIn Account</Typography><br />
                                <TextField
                                    value={li}
                                    onChange={(e) => {
                                        setLi(e.target.value);
                                    }}
                                    size="small" sx={{
                                        '& input': {
                                            color: letter
                                        },
                                        width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                        borderRadius: '5px',
                                        border: 'solid 1px',
                                    }} /><br />

                            </Stack>
                            <Stack >
                                <Tooltip title="Profile Image" >
                                    <IconButton
                                        onClick={handleClick}
                                        size="large"
                                        sx={{ ml: 2, marginBottom: "20px" }}
                                        aria-controls={open1 ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open1 ? 'true' : undefined}
                                    >
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            badgeContent={
                                                <SmallAvatar sx={{ padding: '30px', background: 'linear-gradient(#FE0B80, #5E17EB)' }}><CameraAltIcon /></SmallAvatar>
                                            }
                                        >
                                            <Avatar sx={{ width: { xs: "7.5em", md: "234px" }, height: { xs: "7.5em", md: "226px" }, overflow: "hidden" }}>M</Avatar>
                                        </Badge>

                                    </IconButton>
                                </Tooltip>

                                <Stack gap={"20px"} border={"2px solid #434141"} padding={"20px"} borderRadius={"20px"} marginBottom={"30px"}>
                                    <InputLabel htmlFor="filled-adornment-password" sx={{ color: letter }}>Current Password</InputLabel>
                                    <FilledInput 
                                    inputProps={{style:{padding:"0px 14px"}}}
                                    sx={{
                                        borderRadius: '10px',
                                        
                                        border: 'solid 1px #fff', color: letter, width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
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
                                                sx={{ color: letter }}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        }
                                    />
                                    <InputLabel htmlFor="filled-adornment-password" sx={{ color: letter }}>New Password</InputLabel>
                                    <FilledInput 
                                    inputProps={{style:{padding:"0px 14px"}}}
                                    sx={{
                                        borderRadius: '10px',
                                        border: 'solid 1px #fff', color: letter, width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                    }}
                                        id="filled-adornment-password"
                                        value={npwd}
                                        onChange={(e) => {
                                            setNpwd(e.target.value);
                                        }}
                                        type={showPassword1 ? 'text' : 'password'}
                                        defaultValue={"new password"}
                                        endAdornment={

                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword1}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                sx={{ color: letter }}
                                            >
                                                {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        }
                                    />
                                    <InputLabel htmlFor="filled-adornment-password" sx={{ color: letter }}>Confirm Password</InputLabel>
                                    <FilledInput 
                                    inputProps={{style:{padding:"0px 14px"}}}
                                    sx={{
                                        borderRadius: '10px',
                                        border: 'solid 1px #fff', color: letter, width: {
                                            position: "relative",
                                            xs: 280,
                                            sm: 400,
                                            md: 480
                                        },
                                    }}
                                        id="filled-adornment-password"
                                        value={cpwd}
                                        onChange={(e) => {
                                            setCpwd(e.target.value);
                                        }}
                                        type={showPassword2 ? 'text' : 'password'}
                                        defaultValue={"confirm password"}
                                        endAdornment={

                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword2}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                sx={{ color: letter }}
                                            >
                                                {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        }
                                    />
                                </Stack>

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                                        onClick={handleOpen}
                                        sx={{
                                            borderRadius: "15px", background:letter, color: color ,minWidth: "120px", "&:hover": {
                                                color: letter,
                                                border: "2px solid #434141"
                                            }
                                        }}>Submit</Button>
                                </div>

                            </Stack>
                        </Stack>
                    </Stack>
                    <ToastContainer />
                    <Navbar Change={Change} isDarkMode={isDarkMode} />
                </body>
            </ThemeProvider>
        </>
    )
}