import { useState } from 'react';
import  styles from  '/styles/Part2.module.css'
import { Stack } from '@mui/system';
import { TextField, Typography,Box, Avatar, Button } from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Alumnibody = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
//  data 
   const MNC= [
    {id:1, image:'/restaurant.png', name:"Rohit Kumar", designation:"Associate | Salesforce PwC"},
    {id:2, image:'/restaurant.png', name:"Ananya", designation:"Associate | Salesforce PwC"},
    {id:3, image:'/restaurant.png', name:"Faizan Akram", designation:"Associate | Salesforce PwC"},
    {id:4, image:'/restaurant.png', name:"Sagar", designation:"Associate | Salesforce PwC"},
    {id:5, image:'/restaurant.png', name:"Amiya Boxi", designation:"Associate | Salesforce PwC"},
  ]

  const Core = [
    {id:1, image:'/restaurant.png', name:"Rohit Kumar", designation:"Associate | Salesforce PwC"},
    {id:2, image:'/restaurant.png', name:"Ananya", designation:"Associate | Salesforce PwC"},
    {id:3, image:'/restaurant.png', name:"Faizan Akaram", designation:"Associate | Salesforce PwC"},
    {id:4, image:'/restaurant.png', name:"Sagar", designation:"Associate | Salesforce PwC"},
    {id:5, image:'/restaurant.png', name:"Amiya Boxi", designation:"Associate | Salesforce PwC"},
  ]

  const  NCore = [
    {id:1, image:'/restaurant.png', name:"Rohit Kumar", designation:"Associate | Salesforce PwC"},
    {id:2, image:'/restaurant.png', name:"Ananya", designation:"Associate | Salesforce PwC"},
    {id:3, image:'/restaurant.png', name:"Faizan Akaram", designation:"Associate | Salesforce PwC"},
    {id:4, image:'/restaurant.png', name:"Sagar", designation:"Associate | Salesforce PwC"},
    {id:5, image:'/restaurant.png', name:"Amiya Boxi", designation:"Associate | Salesforce PwC"},
  ]
// 
const[color , setColor] = useState('black')
const likebutton = (id) =>{
    setColor(prevState => {
        const newState = { ...prevState };
        newState[id] = prevState[id] === 'black' ? 'red' : 'black';
        return newState;
      });
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Change the primary color
    },
    },
    typography: {
      allVariants: {
        fontFamily: 'Montserrat',
      }
  },
});

    return ( 
        <>
        <ThemeProvider theme={theme}>
     <Stack marginTop={{sm:"105px",md:"125px"}} marginLeft={{sm:"106px",md:"303px"}} paddingBottom="20px">
     <TextField  value={searchQuery} className={styles.TextField} onChange={handleSearch} placeholder="Find internships" sx={{width:{xs:"80vw",md:"78vw"}, background: props.color , borderRadius: "5px" , margin:"1em 0em" , display:"flex", justifyContent:"center" ,marginRight:"10px", color: props.letter , '&:hover fieldset': {
        borderColor: 'none !important',
      } ,  
        '& fieldset': {
          borderColor: '#333838 !important',
        }
       , border:"none" ,  'input': {
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color: props.letter , opacity:"0.81",
          fontWeight:"600"
        }
      } }}
     
        InputProps={{
          style: { color: props.letter , caretColor:'white' },
          startAdornment: (
            <InputAdornment position="start">
             <YoutubeSearchedForIcon sx={{color:props.letter}}/>
            </InputAdornment>
          ),
        }}
        />
 <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter, marginTop:"1em"}}>
        <h3>From Top MNCs</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:props.letter , marginTop:"1em" , marginRight:"2em",gap:"20px"}} className={styles.slider} >
       {MNC.map((details) => (
                <Stack sx={{background: props.color1,
                  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px",padding:"25px",flexDirection:"row",justifyContent:"space-between",minWidth:"360px",gap:"50px"}}>
                   <Stack>
                    <Avatar sx={{width:"80px",height:"80px"}}></Avatar>
                    </Stack>
                    <Stack flexDirection="column" gap="15px" justifyContent="center" >
                    <Typography sx={{fontSize:"20px" , color: props.letter}}>{details.name}</Typography>
                    <Typography sx={{color: props.letter ,fontSize:"14px"}}>{details.designation}
PwC</Typography>
                    <Button sx={{border: "1px solid #EDE8E8",
borderRadius: "7px",textTransform:"initial"}}><Typography sx={{color: props.letter}}>Connect</Typography></Button>
                    </Stack> 
                  </Stack>
              ))}
         </div>

         <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter, marginTop:"1em"}}>
        <h3>From Core Companies</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:props.letter , marginTop:"1em" , marginRight:"2em",gap:"20px"}} className={styles.slider} >
       {Core.map((details) => (
        <Stack sx={{background: props.color1,
                  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px",padding:"25px",flexDirection:"row",justifyContent:"space-between",minWidth:"360px",gap:"50px"}}>
                   <Stack>
                    <Avatar sx={{width:"80px",height:"80px"}}></Avatar>
                    </Stack>
                    <Stack flexDirection="column" gap="15px" justifyContent="center" >
                    <Typography sx={{fontSize:"20px" , color: props.letter}}>{details.name}</Typography>
                    <Typography sx={{color: props.letter ,fontSize:"14px"}}>{details.designation}</Typography>
                    <Button sx={{border: "1px solid #EDE8E8",
borderRadius: "7px",textTransform:"initial"}}><Typography sx={{color: props.letter}}>Connect</Typography></Button>
                    </Stack> 
                  </Stack>
              ))}
         </div>

         <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter, marginTop:"1em"}}>
        <h3>From  Non-Core Companies</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:props.letter , marginTop:"1em" , marginRight:"2em",gap:"20px"}} className={styles.slider} >
       {NCore.map((details) => (
        <Stack sx={{background: props.color1,
                  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px",padding:"25px",flexDirection:"row",justifyContent:"space-between",minWidth:"360px",gap:"50px"}}>
                   <Stack>
                    <Avatar sx={{width:"80px",height:"80px"}}></Avatar>
                    </Stack>
                    <Stack flexDirection="column" gap="15px" justifyContent="center" >
                    <Typography sx={{fontSize:"20px" , color: props.letter}}>{details.name}</Typography>
                    <Typography sx={{color: props.letter ,fontSize:"14px"}}>{details.designation}</Typography>
                    <Button sx={{border: "1px solid #EDE8E8",
borderRadius: "7px",textTransform:"initial"}}><Typography sx={{color: props.letter}}>Connect</Typography></Button>
                    </Stack> 
                  </Stack> ))}
         </div>
        </Stack>
        </ThemeProvider>
        </>
     );
}
 
export default Alumnibody;