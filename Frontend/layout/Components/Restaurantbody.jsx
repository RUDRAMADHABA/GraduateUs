import { useState } from 'react';
// import  styles from  '/styles/Part2.module.css'
import { TextField, Typography } from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Scale } from '@mui/icons-material';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import styles from '../../styles/res.module.css';
import React, {useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Pagination } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import { allHotels } from "../Admindashboard/data";
import ResCard from '../Admindashboard/ResCard';

const Restaurantbody = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
//  data 
const [resData, setResData] = useState([]);

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

useEffect(() => {
  const getData = async () => {
    // const url = "";
    // const result = await fetch(url);
    // const data = result.json();
    setResData(allHotels);
    // console.log(data);
  }
  getData();
}, [allHotels])
   const NearlyRestaurant = [
    {id:1, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/>  , locationicon:  <LocationOnIcon/> , distance:'0.5km'},
    {id:2, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'  },
    {id:3, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, locationicon:  <LocationOnIcon/> ,  distance:'0.5km' },
    {id:4, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>   ,locationicon:  <LocationOnIcon/>  ,  distance:'0.5km'},
    {id:4, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/>   , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'},
  ]

  const VegRestaurant = [
    {id:5, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/>, locationicon:  <LocationOnIcon/> , distance:'0.5km'},
    {id:6, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'  },
    {id:7, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>,  locationicon:  <LocationOnIcon/> ,  distance:'0.5km' },
    {id:8, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/> ,locationicon:  <LocationOnIcon/>  ,  distance:'0.5km'},
    {id:9, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/> , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'},
  ]

  const  BarRestaurant = [
    {id:10, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/>  , locationicon:  <LocationOnIcon/> , distance:'0.5km'},
    {id:11, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/> , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'  },
    {id:12, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, locationicon:  <LocationOnIcon/> ,  distance:'0.5km' },
    {id:13, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>  ,locationicon:  <LocationOnIcon/>  ,  distance:'0.5km'},
    {id:14, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'},
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

    return ( 
        <>
     <Stack marginTop={{sm:"105px",md:"125px"}} marginLeft={{sm:"106px",md:"303px"}} paddingBottom="20px">
        {/* <TextField  value={searchQuery} className={styles.TextField} onChange={handleSearch} placeholder="Find internships" sx={{width:"78vw", background: props.color , borderRadius: "5px" , margin:"1em 0em" , display:"flex", justifyContent:"center" , color:props.letter , '&:hover fieldset': {
        borderColor: 'black !important',
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
          style: { color:props.letter  , caretColor:'white' },
          startAdornment: (
            <InputAdornment position="start">
             <YoutubeSearchedForIcon sx={{color:props.letter }}/>
            </InputAdornment>
          ),
        }}
      />
 <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter , marginTop:"1em"}}>
        <h3>Nearby Restaurants</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:props.letter  , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
       {NearlyRestaurant.map((details) => (
       <div className="cards" style={{width:"350px" , height:"141px" , background:props.color, borderRadius: "10px", margin:"0.5em 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-evenly"}}>
        <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center" , margin:"1em 0.5em"}}>
               <Image alt='image' src={details.image} width={100} height={100} style={{objectFit:"cover"}}/>
               </div>
               <div style={{display:"flex" , flexDirection:"column" ,justifyContent:"center" , position:"relative" , bottom:"0.5em" , margin:"0"}}>
            <button style={{background:"none" , border:"none" , position:"relative" , left:"4em", top:'1em',  color: color[details.id]}} onClick={() => likebutton(details.id)}>{details.like}</button>
               <h2 style={{fontSize:"20px"}}>{details.head}</h2>
               <p style={{fontSize:"14px" , color:"#a3a3a3"}}>{details.name}</p>
               <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , position:"relative" , right:"6px", margin:"0.1em 0"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
               <div style={{display:"flex" , alignItems:"center" , justifyContent:"start" ,color:"#a3a3a3" , position:"relative" , right:"0.45em"}}>
            <p style={{transform:'scale(0.7)'}} >{details.locationicon}</p>
            <p style={{fontSize:"14px"}}>{details.distance}</p>
            </div> 
               </div>
        </div>
        </div>
              ))}
         </div>

         <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter, marginTop:"1em"}}>
        <h3>Veg Restaurants</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:props.letter , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
       {VegRestaurant.map((details) => (


       <div className="cards" style={{width:"350px" , height:"141px" , background:props.color, borderRadius: "10px", margin:"0.5em 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-evenly"}}>
        <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center" , margin:"1em 0.5em"}}>
               <Image alt='image' src={details.image} width={100} height={100} style={{objectFit:"cover"}}/>
               </div>
               <div style={{display:"flex" , flexDirection:"column" ,justifyContent:"center" , position:"relative" , bottom:"0.5em" , margin:"0"}}>
            <button style={{background:"none" , border:"none" , position:"relative" , left:"4em", top:'1em',  color: color[details.id]}} onClick={() => likebutton(details.id)}>{details.like}</button>
               <h2 style={{fontSize:"20px"}}>{details.head}</h2>
               <p style={{fontSize:"14px" , color:"#a3a3a3"}}>{details.name}</p>
               <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , position:"relative" , right:"6px", margin:"0.1em 0"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
               <div style={{display:"flex" , alignItems:"center" , justifyContent:"start" ,color:"#a3a3a3" , position:"relative" , right:"0.45em"}}>
            <p style={{transform:'scale(0.7)'}} >{details.locationicon}</p>
            <p style={{fontSize:"14px"}}>{details.distance}</p>
            </div> 
               </div>
        </div>
        </div>
              ))}
         </div> */}
         <div className={styles.restaurant}>
          <div className={styles.resup}>
            <div className={styles.restauranttxt}>
              <Typography className="restxt" color={props.letter} sx={{fontSize:"30px",fontWeight:"500"}} >Restaurant Details</Typography>
            </div>
            <div className={styles.resfilter}>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ right: "70px",color:props.letter  }}
                
              >
                <TuneIcon sx={{ color:props.letter  }}/><Typography sx={{color:props.letter,textTransform:"capitalize",  }}>Filters</Typography>
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Recently added</MenuItem>
                <MenuItem onClick={handleClose}>Ratings</MenuItem>
                <MenuItem onClick={handleClose}>Review</MenuItem>
              </Menu>
            </div>
          </div>
          <div className={styles.restaurantdatails}>
            {resData?.map((item, id) => (
              <div key={id} className={styles.card}>
                <ResCard data={item} />
              </div>
            ))}
          </div>
        </div>

         
        </Stack>
        </>
     );
}
 
export default Restaurantbody;