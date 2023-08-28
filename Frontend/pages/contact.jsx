import React from "react";
import { TextField, Button, Typography, Grid, Toolbar, CssBaseline, Box, InputLabel, FilledInput, IconButton, Hidden } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import { Email } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Navbar from "../layout/Interncompo/Navbar";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [agree, setAgree] = useState(false);

    const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleOpen = async () => {
        if (
            !fname ||
            !email ||
            !msg
        ) {
            return toast.error("All field must be filled");
        }
        if (!regexExp.test(email)) {
            return toast.error("Enter valid Email");
        }
        if (!fname) {
            return toast.error("Enter your name");
        }
        if (!msg) {
            return toast.error("Write some message");
        }
        if (agree == false) {
            return toast.error("Accept the terms and condition to submit");
        }
        toast.success("Message sent successfully!");
        setFname("");
        setEmail("");
        setMsg("");
        setAgree(false);

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
            setDivider('#fff')
        } else {
            setColor('#262727')
            setletter('#fff')
            setDivider('#151515')
        }
    };


    return (
        <>
            <body style={{ background: "radial-gradient(circle, rgba(85,19,19,1) 0%, rgba(21,21,21,1) 49%)", minHeight: "100vh" }}>
                <Grid marginTop={{ sm: "125px", md: "145px" }} marginLeft={{ sm: "65px", md: "270px" }} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <Grid sx={{ color: "#fff", marginTop: "60px" }}>
                        <Typography variant="h1"><strong>GET&nbsp; IN <br></br>TOUCH</strong></Typography>
                        <Typography variant="h6" sx={{ maxWidth: "350px" }}>Let’s Connect: We’re here to help, and We’d love to hear from you! .</Typography>
                        <Grid sx={{ marginTop: "30px", marginRight: "150px" }}>
                            <Link href="tel:+91 79781 83831"><Button sx={{ color: "#fff", background: "#232323" }}><CallIcon /> &nbsp;Via Call</Button></Link>
                            <Link href="mailto:graduateus@gmail.com"><Button sx={{ color: "#fff", background: "#232323", marginLeft: "50px" }}><MailOutlineIcon /> &nbsp;Via Email</Button></Link>
                        </Grid>
                    </Grid>
                    <Grid justifyContent="center" alignItems="center" flexDirection="column" sx={{
                        backgroundColor: divider,
                        fontFamily: 'Montserrat',
                        width: "550px",
                        minHeight: "80vh",
                        position: "relative",
                        top: -40,
                        paddingTop: "50px",

                    }}>
                        <getTheme />
                        <CssBaseline />


                        <Grid sx={{
                            display: 'flex', flexDirection: 'row',
                            overflow: 'hidden'
                        }}>
                            <Grid container sx={{ color: "#fff" }}>
                                <Grid item xs={15} md={5.7} sx={{ maxWidth: "100%" }}>
                                    <Typography sx={{
                                        position: "relative",
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        left: 32,
                                        top: 20,
                                        opacity: 0.79,
                                        fontFamily: "Montserrat", color: letter
                                    }}>Name</Typography><br />

                                    <TextField size="small"
                                        value={fname}
                                        label={"Name"}
                                        variant="outlined"
                                        onChange={(e) => {
                                            setFname(e.target.value);
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: '#9b9b9b',
                                                fontSize: "16px",
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: letter,
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: letter
                                            },
                                            '&:hover': {
                                                color: letter
                                            },
                                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: letter,
                                            },
                                            '& input': {
                                                color: letter
                                            },
                                            width: {
                                                position: "relative",
                                                xs: 280,
                                                sm: 400,
                                                md: 480
                                            },
                                            left: 32,
                                        }}
                                        className="my-textfield"
                                    /><br />

                                    <Typography sx={{
                                        position: "relative",
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        left: 32,
                                        top: 20,
                                        opacity: 0.79,
                                        fontFamily: "Montserrat", color: letter
                                    }}>Email Address</Typography><br />
                                    <TextField
                                        value={email}
                                        label={"your E-mail address"}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: '#9b9b9b',
                                                fontSize: "16px",
                                            },
                                        }}
                                        type={Email} size="small" sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: letter,
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: letter
                                            },
                                            '&:hover': {
                                                color: letter
                                            },
                                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: letter,
                                            },
                                            '& input': {
                                                color: letter
                                            },
                                            width: {
                                                position: "relative",
                                                xs: 280,
                                                sm: 400,
                                                md: 480
                                            },
                                            left: 32,
                                        }}
                                        className="my-textfield"
                                    /><br />

                                    <Typography sx={{
                                        position: "relative",
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        left: 32,
                                        top: 20,
                                        opacity: 0.79,
                                        fontFamily: "Montserrat", color: letter
                                    }}>Message</Typography><br />
                                    <TextField
                                        value={msg}
                                        multiline
                                        rows={4}

                                        label={"Write your message here..."}
                                        onChange={(e) => {
                                            setMsg(e.target.value);
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: '#9b9b9b',
                                                fontSize: "16px",
                                            },
                                        }}
                                        InputProps={{
                                            style: { color: letter }, // Set the font color here
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: letter,
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: letter
                                            },
                                            '&:hover': {
                                                color: letter
                                            },
                                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: letter,
                                            },
                                            '& input': {
                                                color: letter
                                            },
                                            width: {
                                                position: "relative",
                                                xs: 280,
                                                sm: 400,
                                                md: 480
                                            },
                                            left: 32,
                                        }}
                                        className="my-textfield" /><br />


                                    <Toolbar sx={{ position: 'relative', marginTop: '20px' }}>
                                        <Checkbox sx={{ color: '#bfbfbf' }}
                                            checked={agree}
                                            inputProps={{ 'aria-label': 'controlled checkbox' }}
                                            onChange={(e) => {
                                                setAgree(e.target.checked);
                                            }} /><Typography sx={{ fontSize: '12px', opacity: '0.65', color: letter }}> Agree to the Privacy policy</Typography></Toolbar><br />

                                    <Button
                                        onClick={handleOpen}
                                        variant="contained" sx={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                            color: color,
                                            backgroundColor: letter,
                                            borderRadius: '8px',
                                            fontWeight: '500',
                                            paddingLeft: "25px",
                                            paddingRight: "25px",
                                            position: 'relative',
                                            top: -20,
                                            marginRight: "32px",
                                            marginLeft: "32px",
                                            "&:hover": {

                                                background: "#bfbfbf"
                                            }
                                        }}>Submit </Button><br />
                                </Grid>
                                <Box sx={{
                                    marginTop: '55px',
                                    display: {
                                        xs: 'none',
                                        sm: 'none',
                                        lg: 'block',
                                    }
                                }}>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <ToastContainer />
                </Grid>
                <Navbar Change={Change} isDarkMode={isDarkMode} />
            </body>
        </>

    );
}

export default Contact;
