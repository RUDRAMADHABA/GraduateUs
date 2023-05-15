import { Box, Stack, Typography } from "@mui/material";
import Fab from '@mui/material/Fab';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie
  } from 'recharts';
const Attendancebody = (props) => {
    const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [attended, setAttended] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [attendanceData, setAttendanceData] = useState([]);
  const handleNew = () => {
    setSubject("");
    setAttended(0);
    setTotal(0);
    setPercentage(0);
  };
  
  const handleClickOpen = () => {
    handleNew();
    setOpen(true);
  };
 
  const remove = (subject) => {
    setAttendanceData(prevData => prevData.filter(data => data.subject !== subject));
  }
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const data = {
      subject: subject,
      attended: attended,
      total: total,
      percentage: (attended / total) * 100,
    };
    setAttendanceData([...attendanceData, data]);
    setSubject("");
    setAttended(0);
    setTotal(0);
    handleClose();
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleAttendedChange = (event) => {
    setAttended(event.target.value);
  };

  const handleTotalChange = (event) => {
    setTotal(event.target.value);
  };

   const loginname = "faizan" 

   const data2 = [
    {
      name: 'Jan',
      percentage1:percentage ,
    },
    {
      name: 'Feb',
      percentage1:percentage ,
    },
    {
      name: 'Mar',
      percentage1:percentage ,
    },
    {
      name: 'Apr',
      percentage1:percentage ,
    },
    {
      name: 'May',
      percentage1:percentage ,
    },
    {
      name: 'Jun',
      percentage1:percentage ,
    },
    {
      name: 'Jul',
      percentage1:percentage ,
    },
    {
    name: 'Aug',
    percentage1:percentage ,
    },
    {
    name: 'Sep',
    percentage1:percentage ,
    },
    {
    name: 'Oct',
    percentage1:percentage ,
    },
    {
    name: 'Nov',
    percentage1:percentage ,
    },
    {
    name: 'Dec',
    percentage1:percentage ,
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

    return ( 
        <>
          <Stack marginTop={{sm:"105px",md:"125px"}} marginLeft={{sm:"106px",md:"303px"}} justifyContent="center" paddingBottom="20px" >
            <Box sx={{ display:"flex" , justifyContent:"space-between" }}>
                <Box sx={{width:"55vw",height:"100%" }}>
            <Box sx={{display:"flex" , justifyContent:"start" , alignItems:"start" , gap:{xs:"10em" , md:"18em" , lg:"20em"}}}>
                <Box sx={{display:"flex" , justifyContent:"start" , alignItems:"start" ,flexDirection:"column"}}>
                 <Typography sx={{fontSize:{xs:"35px" , lg:"40px"} , fontWeight:"700" , color:props.head , whiteSpace:"nowrap"}}>Hi ,{loginname}.</Typography>
                 <Typography sx={{fontSize:{xs:"22px" , lg:"25px"} , fontWeight:"700" , color:"#97BCE8", whiteSpace:"nowrap"}}>Welcome to your Class</Typography>
                 </Box>
                 <Box sx={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , fontSize:"19px" , fontWeight:"500" , color:"#fff" , gap:"3px"}}>
                 <Fab aria-label="add" sx={{marginTop:"5em" , background:"#929292" , boxShadow:" 5px 10px 15px rgba(114, 114, 114, 0.2)"}} onClick={handleClickOpen} >
        <AddIcon sx={{ transform:"Scale(1.1)"}} />
      </Fab>
                 <Typography sx={{color:props.letter}}>Add</Typography>
                 <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField label="Subject" value={subject} onChange={handleSubjectChange} fullWidth margin="normal" />
          <TextField type="number" label="Attended Classes" value={attended} onChange={handleAttendedChange} fullWidth margin="normal"  inputProps={{ min: -100 }} />
          <TextField type="number" label="Total Classes" value={total} onChange={handleTotalChange} fullWidth margin="normal"  inputProps={{ min: -100 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
                 </Box>
            </Box>
            <Typography  sx={{fontSize:"20px" , fontWeight:"700" , color:props.head}}>Subjects</Typography>
            {attendanceData.map((data) => (
          <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , padding:"1em 1em", width:{xs:"450px" , md:"580px"} , height:"115px", background:props.box , borderRadius:"13px" , margin:'1em 0'}}  key={data.subject}>
              <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"start" , justifyContent:"start" , color:"white" }} >
               <Typography sx={{color:props.letter1 , fontWeight:"600" , textTransform:"uppercase"}}>{data.subject}</Typography>
               <Typography sx={{color:props.head}}>{data.attended}/{data.total}</Typography>
              </Box>
              <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , position:"relative" , bottom:"0.5em"}}>
              < DeleteIcon  sx={{position:"relative" , bottom:"0.5em" , left:"1em"}}onClick={() => remove(data.subject)}  />
              {data.percentage  >= 50 ? (
               <Box sx={{background:"#1B84FF" ,boxShadow:"1px 3px 13px rgba(27, 132, 255, 0.62)", borderRadius:"6px" , width:"71px" ,height:"41px" , display:"flex" , justifyContent:"center" , alignItems:"center" , color:"white"}}>
              {data.percentage.toFixed(2)}%
              </Box>
              ):(
                <Box sx={{background:"#F70000" ,boxShadow:" 1px 3px 13px rgba(246, 0, 0, 0.61)", borderRadius:"6px" , width:"71px" ,height:"41px" , display:"flex" , justifyContent:"center" , alignItems:"center", color:"white"}}>
                {data.percentage.toFixed(2)}%
                </Box>
              )}
     
              </Box>
              
               </Box>
  ))}
  </Box>
  <Box sx={{width:"100vw" ,height:"100vh", margin:"0 1em" ,display:"flex", flexDirection:"column"}}> 
  <Box sx={{width:"100%" , height:"50vh"}}>
    <Typography sx={{textAlign:"center" , color:props.head , fontSize:"25px" , fontWeight:"700"}}>Check Attendance Report</Typography>
  <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data2}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="percentage1" barSize={20} fill="#464646" />
          <Line type="monotone" dataKey="percentage1" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      <Box sx={{width:"100%" , height:"50vh"}}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
      </Box>
      <Typography sx={{textAlign:"center" , color:props.head , fontSize:"22px" , fontWeight:"700"}}>Keep Up the Good work !</Typography>
      </Box>
  </Box>
  </Box>
          </Stack>
        </>
     );
}
 
export default Attendancebody;