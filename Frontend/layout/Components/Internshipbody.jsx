import { useState, useEffect } from "react";
import styles from "/styles/Part2.module.css";
import { Stack } from "@mui/system";
import { TextField, Box, Typography, Button } from "@mui/material";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Internshipbody = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  const url = "https://graduate-us-backend-gkli.onrender.com/user/searchJob?jobTitle=internship";

  const internshipdata = async (url) => {
    try {
      const res = await axios.get(url); // Use axios consistently for making the request
      const fetchedData = res.data.data;
      console.log(fetchedData);
      setData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    internshipdata(url);
  }, [url]);


  const indexcolor = [
     '#D02F99','#1B3852','#C27B0F','#576572','#D02F99','#1B3852','#C27B0F','#B3B3B3','#FCBB3C','#D02F99'
  ]

  return (
    <>
      <Stack
        marginTop={{ sm: "105px", md: "125px" }}
        marginLeft={{ sm: "106px", md: "303px" }}
        justifyContent="center"
        paddingBottom="20px"
      >
        <TextField
          value={searchQuery}
          className={styles.TextField}
          // onChange={handleSearch}
          placeholder="Find internships"
          sx={{
            width: { xs: "80vw", md: "78vw" },
            background: props.color,
            borderRadius: "5px",
            margin: "1em 0em",
            display: "flex",
            justifyContent: "center",
            marginRight: "10px",
            color: props.letter,
            "&:hover fieldset": {
              borderColor: "none !important",
            },
            "& fieldset": {
              borderColor: "#333838 !important",
            },
            border: "none",
            input: {
              "&::placeholder": {
                textOverflow: "ellipsis !important",
                color: props.letter,
                opacity: "0.81",
                fontWeight: "600",
              },
            },
          }}
          InputProps={{
            style: { color: props.letter, caretColor: "white" },
            startAdornment: (
              <InputAdornment position="start">
                <YoutubeSearchedForIcon sx={{ color: props.letter }} />
              </InputAdornment>
            ),
          }}
        />
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              color: props.letter,
            }}
          >
            <h3>Actively Hiring</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              color: "white",
              marginTop: "1em",
              marginRight: "2em",
            }}
            className={styles.slider}
          >
            {data.map((item , index) => (
              <div
                key={item.id}
                className={styles.cards}
                style={{
                  width: "291px",
                  height: "auto",
                  minHeight:"170px",
                  background: indexcolor[index % indexcolor.length],
                  borderRadius: "10px",
                  margin: "0em 1em",
                  marginBottom:"1.3em",
                  flexShrink: "0",
                  scrollSnapAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                  padding: "0.5em 0.5em"
                }}
              >
                <Box sx={{ height: "auto" , minHeight:"6em" }}>
                  <Typography sx={{fontWeight:"500"}}>{item.title}</Typography>
                  <Typography sx={{fontWeight:"700" , fontSize:"18px"}}>{item.company}</Typography>
                </Box>
              
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Link href={item.url}><Button sx={{ background: "#EFECEC !important", color: "#143A84", textTransform: "none", fontWeight: "700" }} variant="contained">Apply internship</Button></Link>
                </Box>
              </div>
            ))}
          </div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              color: props.letter,
              marginTop:"1em"
            }}
          >
            <h3>New Internships</h3>
            <h4 style={{ marginRight: "2.7em" }}>View All</h4>
          </div>
          <div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    color: "white",
    marginTop: "1em",
    marginRight: "2em",
  }}
  className={styles.slider}
>
  {Array(10).fill().map((_, index) => (
    <div key={index} style={{ marginRight: "1.5em" }}>
      <Skeleton
        sx={{ bgcolor: 'grey.900', borderRadius: "10px" }}
        variant="rectangular"
        width={291}
        height={170}
      />
    </div>
  ))}
</div> */}


        </>
      </Stack>
    </>
  );
};

export default Internshipbody;
