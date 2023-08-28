import { Avatar,Box, Stack, Typography } from "@mui/material";
import d1 from '/pictures/d1.png'
import d2 from '/pictures/d2.png'
import d3 from '/pictures/d3.png'
import d4 from '/pictures/d4.png'
import Image from "next/image";
import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Recent from "./Recentuser";
const Dashboardbody = () => {

    const [value, setValue] = useState('Users');
    const[showuser , setShowuser] = useState(false)
    const[showtransaction , setShowtransaction] = useState(false)
    const handleChange = (event) => {
      setValue(event.target.value);
      if(value === 'Users'){
        setShowuser(true)
      }else{
        setShowuser(false)
      }
    };
    const [age, setAge] = useState('');

    const handleSelect = (event) => {
      setAge(event.target.value);
    };
const data = [
    {id:"1" , user:"Active Users" , number:"12" , icon:d1 , color:"#00B3BB"},
    {id:"2" , user:"Total Users" , number:"34" , icon:d2 , color:"#FF4D91"},
    {id:"3" , user:"New Queries" , number:"6" , icon:d3 , color:"#34A853"},
    {id:"4" , user:"Earnings" , number:"2000.56" , icon:d4 , color:"#7B1FA2"},
]
const graphUsers = [
    {
      name: 'Page A',
      pv: 0,
     xaxis:"Jan",
    },
    {
      name: 'Page B',
    xaxis:"Feb",
      pv: 15,
   
    },
    {
      name: 'Page C',
   xaxis:"Mar",
      pv: 20,

    },
    {
      name: 'Page D',
  xaxis:"Apr",
      pv: 25,
  
    },
    {
      name: 'Page E',
   xaxis:"May",
      pv: 30,
    
    },
    {
      name: 'Page F',
    xaxis:"Jun",
      pv: 20,
    
    },
    {
      name: 'Page G',
 xaxis:"July",
      pv: 14,
   
    },
  ];

  const graphEarning = [
    {
      name: 'Page A',
      pv: 0,
     xaxis:"Jan",
    },
    {
      name: 'Page B',
    xaxis:"Feb",
      pv: 25,
   
    },
    {
      name: 'Page C',
   xaxis:"Mar",
      pv: 30,

    },
    {
      name: 'Page D',
  xaxis:"Apr",
      pv: 14,
  
    },
    {
      name: 'Page E',
   xaxis:"May",
      pv: 10,
    
    },
    {
      name: 'Page F',
    xaxis:"Jun",
      pv: 25,
    
    },
    {
      name: 'Page G',
 xaxis:"July",
      pv: 5,
   
    },
  ];

useEffect(()=>{
setTimeout(() => {
    setShowtransaction(true)
}, 1500);
},[showtransaction])


const userData = [
    {userdesign:"Premium" , number:"14" , color:"#FDD17B"},
    {userdesign:"General" , number:"37" , color:"#86C4EF" }
]
const totalNumber = userData.reduce((acc, data) => acc + parseInt(data.number), 0);


    return ( 
        <>
           <Stack marginTop={{xs:"70px",md:"80px"}} marginLeft={{xs:"10px",md:"255px"}} paddingBottom="20px">
            <Box sx={{display:"flex" , flexDirection:"column" , width:"100%" , gap:"1em"}}>
        <Box sx={{display:"flex" , gap:"1em" , paddingRight:"0.7em" , flexWrap:{xl:"nowrap" , xs:"wrap"} }}>
            {
                data.map((item)=>(
                    <Box key={item.id} sx={{display:"flex" , gap:"1em" , background:"white" , width:{lg:"310px" , xs:"100%"} , height:"120px" , justifyContent:"center" , alignItems:"center", borderRadius:"7px"}}>
                 <Avatar sx={{width:"3em" , height:"3em" , bgcolor:item.color}}>
                <Image src={item.icon}  width={40}  />
              </Avatar>
              <Box sx={{display:"flex" , flexDirection:"column" , gap:"0.2em"}}>
                  <Typography  className="fonti" sx={{fontWeight:"700"}}>{item.number}</Typography>
                  <Typography className="fonti">{item.user}</Typography>
                  </Box>
                    </Box>
                ))
            }
        </Box>
        <Box sx={{display:"flex" , alignItems:"center" , gap:"1em" ,paddingRight:"0.7em" , flexWrap:{xl:"nowrap" , xs:"wrap"}}}>
        <Box sx={{width:{xl:"75%" ,xs:"100%"} , height:{sm:"556px" , xs:"100%"} , background:"#fff" , display:"flex" , flexDirection:"column" , gap:"1em" , padding:"0.5em 0.5em", borderRadius:"7px"}}>
            <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , padding:{sm:"0 2em" ,xs:"1em"} , flexWrap:{sm:"nowrap" , xs:"wrap"} , gap:{sm:"0em" , xs:"1em"}}}>
                  <Typography className="fonti" sx={{fontSize:{sm:"25px" , xs:"20px"}}}>Summary</Typography>
                
                  <RadioGroup
  aria-labelledby="demo-controlled-radio-buttons-group"
  name="controlled-radio-buttons-group"
  value={value}
  onChange={handleChange}
  sx={{ display: 'flex', flexDirection: 'row' }}
>
  <FormControlLabel  value="Users" control={<Radio sx={{ color: value === 'Users' ? '#FF9900 !important' : '#000' }} />} label={<Typography className="fonti" sx={{fontSize:{sm:"18px" , xs:"15px"}}}>Users</Typography>} />
  <FormControlLabel value="Earning" control={<Radio sx={{ color: value === 'Earning' ? '#FF9900 !important' : '#000' }}/>} label={<Typography className="fonti" sx={{fontSize:{sm:"18px" , xs:"15px"}}}>Earning</Typography>}/>
</RadioGroup>
<FormControl sx={{minWidth:120}}>
<Select
          value={age}
          onChange={handleSelect}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="fonti"
          sx={{borderRadius:"8px"}}
        >
          <MenuItem value="" >
            <Typography className="fonti">2023</Typography>
          </MenuItem>
          <MenuItem className="fonti" value={10}>2021</MenuItem>
          <MenuItem className="fonti" value={20}>2022</MenuItem>
          <MenuItem className="fonti" value={30}>2024</MenuItem>
        </Select>
        </FormControl>
            </Box>
            {
                !showuser ? (
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      width={500}
                      height={300}
                      data={graphUsers}
                      margin={{
                        top: 5,
                        right: 40,
                        // left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="" />
                      <XAxis dataKey="xaxis" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="pv" stroke="#FF9900" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                ):(  <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={graphEarning}
                  margin={{
                    top: 5,
                    right: 40,
                    // left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="" />
                  <XAxis dataKey="xaxis" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="pv" stroke="#FF9900" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>)
            }
      
        </Box>
        <Box sx={{width:{xl:"25%" , xs:"100%"}, minHeight:"100%" ,display:"flex" , flexDirection:{xl:"column" ,sm:"row" ,xs:"column"} , gap:"1em" , justifyContent:"flex-start"  }}>
            <Box sx={{width:{xl:"100%" , sm:"50%" , xs:"100%"} , height:"270px" , background:"#fff" , display:"flex" , flexDirection:"column" , alignItems:"center" , padding:"0.5em 0.5em" , gap:"0.5em" , borderRadius:"7px"}}>
                <Typography className="fonti" sx={{fontSize:{sm:"19px" , xs:"16px"}}}>Recent Transactions</Typography>
                <Divider variant="middle" sx={{width:"100%"}}/>
                {
                    showtransaction ? (
                        <Box sx={{display:"flex", justifyContent:"center"  ,alignItems:"center" , marginTop:"4.2em"}}>
<Typography  className="fonti" sx={{fontSize:{sm:"18px" , xs:"15px"} , color:"#CABFBF"}}>No Transactions Yet</Typography>
</Box>
                    ):(
                        <Skeleton
                        variant="rectangular"
                        sx={{width:"100%" , height:"100%"}}
                      />
                    )
                }
             
            </Box>
            <Box sx={{width:{xl:"100%" , sm:"50%" , xs:"100%"} , height:"270px" , background:"#fff" , display:"flex" , flexDirection:"column" , gap:"1em", borderRadius:"7px"}}>
                <Typography className="fonti" sx={{fontSize:{sm:"19px" , xs:"16px"} , padding:"0.5em 1em" }}>Users</Typography>
                {
                    showtransaction ? (
                        <Box sx={{display:"flex" , flexDirection:"column", gap:"1em"}}>
                        <Box sx={{display:"flex" , flexDirection:"column", gap:"1em"}}>
                        {
                            userData.map((user)=>(
                                <Box key={user} sx={{display:"flex" , gap:"0.5em" , alignItems:"center" , padding:"0.5em 1em" }}>
                                      <Box sx={{width:" 20px" , height:"20px" , background:user.color , borderRadius:'50%'}}/>
                                        <Typography className="fonti" sx={{fontSize:{sm:"18px" , xs:"15px"} , color:"#5f5f5f"}}>{user.userdesign} : {user.number}</Typography>
                                      </Box>
                            ))
                        }
</Box>
<Divider variant="middle" />
<Box sx={{display:"flex" , gap:"0.5em" , alignItems:"center" , padding:"0.5em 1em" }}>
<Box sx={{width:" 20px" , height:"20px" , background:"#FE0B80" , borderRadius:'50%'}}/>
<Typography className="fonti" sx={{fontSize:{sm:"18px" , xs:"15px"} , color:"#5f5f5f"}}>Total : {totalNumber}</Typography>
</Box>
</Box>
                    ):(
                        <Skeleton
                        variant="rectangular"
                        sx={{width:"100%" , height:"100%"}}
                      />
                    )
                }
             
            </Box>
            </Box>
        </Box>
        <Box sx={{paddingRight:"0.7em"}}>
        <Recent/>
        </Box>
        </Box>
     </Stack>
        </>
     );
}
 
export default Dashboardbody;