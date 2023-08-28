import Navbar from "../layout/Interncompo/Navbar";
import {
  Button,
  TextField,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  InputLabel,
  FilledInput,
  Badge,
} from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import * as React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useEffect } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useRef } from 'react';
// import cloudinary from 'cloudinary';


export default function EditProfile() {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  const [showPassword, setShowPassword] = React.useState(false);
  const [userData, setUserData] = useState(null);
  // Fetch user data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        if (!session) {
          console.error("User session not found.");
          return;
        }
        const token = session.user.token;

        const response = await axios.get("https://graduate-us-backend-gkli.onrender.com/user/edit", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.userData);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  // cloudinary.config({
  //   cloud_name: 'dxwquelwr',
  //   api_key: '928483536324164',
  //   api_secret: 'onauF3Guzpeqi5dpsnFw6-WKR88',
  // });
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showPassword1, setShowPassword1] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [name, setName] = useState(userData ? userData.name : "");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [pic, setPic] = useState("");
  const [pwd, setPwd] = useState("");
  const fileInputRef = useRef(null);
  const [npwd, setNpwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  useEffect(() => {
    if (userData && userData.name) {
      setName(userData.name);
      setPhone(userData.phoneNo);
      setAddress(userData.address);
      setLinkedIn(userData.linkedIn);
      setPic(userData.pic)
    }
  }, [userData]);
  const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOpen = async () => {
    if (
      !name ||
      !phone ||
      !address ||
      !linkedIn
      // ||
      // !pwd ||
      // !npwd ||
      // !cpwd
    ) {
      return toast.error("All field must be filled");
    }
    // if (phone.length !== 10) {
    //   return toast.error("Enter valid Phone number");
    // }

    // if (npwd.length < 8)
    //   toast.error("Password length must be at least 8 characters!");
    // if (npwd != cpwd) {
    //   return toast.error("Password does not match");
    // }
    try {
      const session = await getSession();
      if (!session) {
        console.error("User session not found.");
        return;
      }
      const token = session.user.token;

      const response = await axios.put("https://graduate-us-backend-gkli.onrender.com/user/edit", {
        name: name,
        phoneNo: phone,
        address: address,
        linkedIn: linkedIn,
        pic: pic // Assuming fname is the variable that stores the updated name value
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000", // Change the primary color
      },
    },
    typography: {
      allVariants: {
        fontFamily: "Montserrat",
      },
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

      // Upload the image to Cloudinary
      cloudinary.v2.uploader.upload(formData, (error, result) => {
        if (error) {
          console.error('Error uploading image to Cloudinary:', error);
        } else {
          const imageUrl = result.secure_url;
          setPic(imageUrl);
        }
      });
    }
  };


  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState("#262727");
  const [letter, setletter] = useState("#fff");
  const [divider, setDivider] = useState("#fff");
  const Change = () => {
    setIsDarkMode(!isDarkMode);
    if (color === "#262727") {
      setColor("white");
      setletter("#000");
      setDivider("#1e1e1e");
    } else {
      setColor("#262727");
      setletter("#fff");
      setDivider("#fff");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <body style={{ background: color, minHeight: "100vh", color: "#fff" }}>
          <Stack
            marginTop={{ sm: "125px", md: "145px" }}
            marginLeft={{ sm: "65px", md: "270px" }}
            marginBottom={"30px"}
          >
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              sx={{ background: "#333838" }}
              padding={"30px"}
              marginBottom={"30px"}
              position={"relative"}
              top={"-32px"}
              borderRadius={"0 0 25px 25px"}
            >
              <Typography>Edit Profile</Typography>
              <ShareIcon />
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-around"}
              flexWrap={"wrap"}
            >
              <Stack
                border={"2px solid #434141"}
                padding={"20px"}
                borderRadius={"20px"}
                marginBottom={"30px"}
                color={"#fff"}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    opacity: 0.79,
                    color: letter,
                  }}
                >
                  Name
                </Typography>
                <br />
                <TextField
                  size="small"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  sx={{
                    "& input": {
                      color: letter,
                    },
                    width: {
                      position: "relative",
                      xs: 280,
                      sm: 400,
                      md: 480,
                    },
                    color: "#fff",
                    borderRadius: "5px",
                    border: "solid 1px",
                  }}
                />
                <br />

                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    opacity: 0.79,
                    color: letter,
                  }}
                >
                  Phone Number
                </Typography>
                <br />
                <TextField
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  size="small"
                  InputProps={{ inputProps: { pattern: "[0-9]*" } }}
                  sx={{
                    "& input": {
                      color: letter,
                    },
                    "::selection": {
                      backgroundColor: "transparent",
                    },
                    width: {
                      position: "relative",
                      xs: 280,
                      sm: 400,
                      md: 480,
                    },
                    borderRadius: "5px",
                    border: "solid 1px",
                  }}
                />
                <br />

                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    opacity: 0.79,
                    color: letter,
                  }}
                >
                  Email Id
                </Typography>
                <br />
                <TextField
                  value={userData ? userData.email : ""}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type={Email}
                  size="small"
                  sx={{
                    "& input": {
                      color: letter,
                    },
                    width: {
                      position: "relative",
                      xs: 280,
                      sm: 400,
                      md: 480,
                    },
                    borderRadius: "5px",
                    border: "solid 1px",
                  }}
                />
                <br />

                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    opacity: 0.79,
                    color: letter,
                  }}
                >
                  Address
                </Typography>
                <br />
                <TextField
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  size="small"
                  sx={{
                    "& input": {
                      color: letter,
                    },
                    width: {
                      position: "relative",
                      xs: 280,
                      sm: 400,
                      md: 480,
                    },
                    borderRadius: "5px",
                    border: "solid 1px",
                  }}
                />
                <br />

                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    opacity: 0.79,
                    color: letter,
                  }}
                >
                  LinkedIn Account
                </Typography>
                <br />
                <TextField
                  value={linkedIn}
                  onChange={(e) => {
                    setLinkedIn(e.target.value);
                  }}
                  size="small"
                  sx={{
                    "& input": {
                      color: letter,
                    },
                    width: {
                      position: "relative",
                      xs: 280,
                      sm: 400,
                      md: 480,
                    },
                    borderRadius: "5px",
                    border: "solid 1px",
                  }}
                />
                <br />
              </Stack>
              <Stack>
                <Tooltip title="Profile Image">
                  <IconButton
                    onClick={() => fileInputRef.current.click()}
                    size="large"
                    sx={{ ml: 2, marginBottom: "20px" }}
                    aria-controls={open1 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? "true" : undefined}
                  >
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <SmallAvatar
                          sx={{
                            padding: "30px",
                            background: "linear-gradient(#FE0B80, #5E17EB)",
                          }}
                        >
                          <CameraAltIcon />
                        </SmallAvatar>
                      }

                      
                    >
                      <Avatar
                        sx={{
                          width: { xs: "7.5em", md: "234px" },
                          height: { xs: "7.5em", md: "226px" },
                          overflow: "hidden",
                        }}

                        src={pic}
                      >
                      </Avatar>
                    </Badge>
                  </IconButton>
                </Tooltip>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                />

                <Stack
                  gap={"20px"}
                  border={"2px solid #434141"}
                  padding={"20px"}
                  borderRadius={"20px"}
                  marginBottom={"30px"}
                >
                  <InputLabel
                    htmlFor="filled-adornment-password"
                    sx={{ color: letter }}
                  >
                    Current Password
                  </InputLabel>
                  <FilledInput
                    inputProps={{ style: { padding: "0px 14px" } }}
                    sx={{
                      borderRadius: "10px",

                      border: "solid 1px #fff",
                      color: letter,
                      width: {
                        position: "relative",
                        xs: 280,
                        sm: 400,
                        md: 480,
                      },
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
                        sx={{ color: letter }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    }
                  />
                  <InputLabel
                    htmlFor="filled-adornment-password"
                    sx={{ color: letter }}
                  >
                    New Password
                  </InputLabel>
                  <FilledInput
                    inputProps={{ style: { padding: "0px 14px" } }}
                    sx={{
                      borderRadius: "10px",
                      border: "solid 1px #fff",
                      color: letter,
                      width: {
                        position: "relative",
                        xs: 280,
                        sm: 400,
                        md: 480,
                      },
                    }}
                    id="filled-adornment-password"
                    value={npwd}
                    onChange={(e) => {
                      setNpwd(e.target.value);
                    }}
                    type={showPassword1 ? "text" : "password"}
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
                  <InputLabel
                    htmlFor="filled-adornment-password"
                    sx={{ color: letter }}
                  >
                    Confirm Password
                  </InputLabel>
                  <FilledInput
                    inputProps={{ style: { padding: "0px 14px" } }}
                    sx={{
                      borderRadius: "10px",
                      border: "solid 1px #fff",
                      color: letter,
                      width: {
                        position: "relative",
                        xs: 280,
                        sm: 400,
                        md: 480,
                      },
                    }}
                    id="filled-adornment-password"
                    value={cpwd}
                    onChange={(e) => {
                      setCpwd(e.target.value);
                    }}
                    type={showPassword2 ? "text" : "password"}
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
                      borderRadius: "15px",
                      background: letter,
                      color: color,
                      minWidth: "120px",
                      "&:hover": {
                        color: letter,
                        border: "2px solid #434141",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Stack>
            </Stack>


          </Stack>
          <ToastContainer />
          <Navbar Change={Change} isDarkMode={isDarkMode} />
        </body>
      </ThemeProvider>
    </>
  );
}
