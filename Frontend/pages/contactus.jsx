import React from "react";
import { TextField, Button, Typography, Stack, Toolbar, } from "@mui/material";
import Link from 'next/link';
import { Email } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logo from '/pictures/logo.png';
import Image from "next/image";

const ContactUs = () => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

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
        toast.success("Message sent successfully!");
        setFname("");
        setEmail("");
        setMsg("");
    };

    return (
        <>
            <Stack height={{ xs: "150vh", sm: "150vh", md: "100vh" }} sx={{ background: "radial-gradient(circle, rgba(85,19,19,1) 0%, rgba(21,21,21,1) 49%)"}}>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <Toolbar sx={{
                        color: "#fff",
                        paddingTop: '10px',
                    }}>
                        <Image src={logo} alt="IMAGE" height={25} width={25} />
                        <Typography sx={{
                            flexGrow: "1",
                            cursor: "pointer",
                            fontSize: '25px',
                            paddingBottom: "10px",
                            marginLeft: '20px',
                            marginTop: '10px',
                            fontFamily:"Montserrat"
                        }} >
                            Graduate Us
                        </Typography>
                    </Toolbar>
                    <Link href={'/'}>
                        <Button sx={{
                            border: '2px solid rgba(255, 255, 255,0.5)',
                            borderRadius: '5px',
                            fontFamily: "Montserrat",
                            textTransform: "initial",
                            color: "#ffffff",
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            textAlign: 'center',
                            margin:'35px 30px 0px 0px',
                            '&:hover':{
                                background:"#f2f2f2",
                                color:"#000"
                            }
                        }}>
                            Back to Home
                        </Button>
                    </Link>
                </Stack>
                <Stack display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} height={"70vh"} flexWrap={"wrap"} position={"relative"} marginTop={4}>
                    <Stack alignItems={{ xs: "center" }} sx={{ color: "#fff" }}>
                        <Typography sx={{ fontSize: { xs: "40px", sm: "60px", md: "80px",
                            fontFamily:"Montserrat" }}}><strong>GET&nbsp; IN <br></br>TOUCH</strong></Typography>
                        <Typography sx={{ maxWidth: { xs: "280px", md: "380px" },
                            fontFamily:"Montserrat" , fontSize: { xs: "16px", sm: "18px", md: "22px" } }}>Let’s Connect: We’re here to help, and We’d love to hear from you! .</Typography>
                        <Stack marginTop={4} gap={4} flexWrap={"wrap"} flexDirection={"row"}>
                            <Link href="tel:+91 79781 83831"><Button sx={{ color: "#fff", background: "#232323" ,
                            fontFamily:"Montserrat"}}><CallIcon /> &nbsp;Via Call</Button></Link>
                            <Link href="mailto:graduateus@gmail.com"><Button sx={{ color: "#fff", background: "#232323" ,
                            fontFamily:"Montserrat"}}><MailOutlineIcon /> &nbsp;Via Email</Button></Link>
                        </Stack>
                    </Stack>
                    <Stack marginTop={{ xs: "35px" }} sx={{
                        display: 'flex', flexDirection: 'row', background: "#000", padding: { xs: "50px 60px 50px 0px", md: "70px 80px 0px 20px" }
                    }}>
                        <Stack container sx={{ color: "#fff" }}>
                            <Stack sx={{ maxWidth: "100%" }} gap={1}>
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
                                            borderColor: "#fff",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "#fff"
                                        },
                                        '&:hover': {
                                            color: "#fff"
                                        },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: "#fff",
                                        },
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
                                    }}
                                    className="my-textfield"
                                /><br />
                                <TextField
                                    value={email}
                                    label={"E-mail address"}
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
                                            borderColor: "#fff",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "#fff"
                                        },
                                        '&:hover': {
                                            color: "#fff"
                                        },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: "#fff",
                                        },
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
                                    }}
                                    className="my-textfield"
                                /><br />
                                <TextField
                                    value={msg}
                                    multiline
                                    rows={4}

                                    label={"Write your message or query here"}
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
                                        style: { color: "#fff" }, // Set the font color here
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: "#fff",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "#fff"
                                        },
                                        '&:hover': {
                                            color: "#fff"
                                        },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: "#fff",
                                        },
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
                                    }}
                                    className="my-textfield" /><br />

                                <Button
                                    onClick={handleOpen} sx={{
                                        textTransform: "none",
                                        color: "#000",
                                        backgroundColor: "#fff",
                                        borderRadius: '8px',
                                        marginLeft: "32px",
                                        fontWeight: '500',
                                        width: "25%",
                                        padding: "10px 20px",
                                        fontFamily:"Montserrat",
                                        "&:hover": {

                                            background: "#bfbfbf"
                                        }
                                    }}>Submit </Button><br />
                            </Stack>
                        </Stack>
                    </Stack>
                    <ToastContainer />
                </Stack>
            </Stack>
        </>

    );
}
export default ContactUs;
