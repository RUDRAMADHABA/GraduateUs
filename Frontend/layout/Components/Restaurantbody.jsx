import { useState } from 'react';
import  styles from  '/styles/Part2.module.css'
import { Stack } from '@mui/system';
import { TextField, Typography } from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Scale } from '@mui/icons-material';
const Restaurantbody = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
//  data 
   const NearlyRestaurant = [
    {id:1, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/> , star:<StarIcon/> , locationicon:  <LocationOnIcon/> , distance:'0.5km'},
    {id:2, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, star:<StarIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'  },
    {id:3, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, star:<StarIcon/> , locationicon:  <LocationOnIcon/> ,  distance:'0.5km' },
    {id:4, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/> , star:<StarIcon/>  ,locationicon:  <LocationOnIcon/>  ,  distance:'0.5km'},
    {id:4, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/> , star:<StarIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'},
  ]

  const VegRestaurant = [
    {id:5, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/> , star:<StarIcon/> , locationicon:  <LocationOnIcon/> , distance:'0.5km'},
    {id:6, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, star:<StarIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'  },
    {id:7, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, star:<StarIcon/> , locationicon:  <LocationOnIcon/> ,  distance:'0.5km' },
    {id:8, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/> , star:<StarIcon/>  ,locationicon:  <LocationOnIcon/>  ,  distance:'0.5km'},
    {id:9, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/> , star:<StarIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'},
  ]

  const  BarRestaurant = [
    {id:10, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/> , star:<StarIcon/> , locationicon:  <LocationOnIcon/> , distance:'0.5km'},
    {id:11, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, star:<StarIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'  },
    {id:12, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/>, star:<StarIcon/> , locationicon:  <LocationOnIcon/> ,  distance:'0.5km' },
    {id:13, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" ,like:<FavoriteIcon/> , star:<StarIcon/>  ,locationicon:  <LocationOnIcon/>  ,  distance:'0.5km'},
    {id:14, image:'/restaurant.png', name:"Kirba chowk , Burla" , head:"Dawat" , like:<FavoriteIcon/> , star:<StarIcon/>  , locationicon:  <LocationOnIcon/> ,  distance:'0.5km'},
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
        <TextField  value={searchQuery} className={styles.TextField} onChange={handleSearch} placeholder="Find internships" sx={{width:"78vw", background: "#333838" , borderRadius: "5px" , margin:"1em 0em" , display:"flex", justifyContent:"center" , color:"white !important" , '&:hover fieldset': {
        borderColor: 'black !important',
      } ,  
        '& fieldset': {
          borderColor: '#333838 !important',
        }
       , border:"none" ,  'input': {
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color: '#fff', opacity:"0.81",
          fontWeight:"600"
        }
      } }}
     
        InputProps={{
          style: { color: "white" , caretColor:'white' },
          startAdornment: (
            <InputAdornment position="start">
             <YoutubeSearchedForIcon sx={{color:"white"}}/>
            </InputAdornment>
          ),
        }}
      />
 <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:"white", marginTop:"1em"}}>
        <h3>Nearby Restaurants</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
       {NearlyRestaurant.map((details) => (


       <div className="cards" style={{width:"350px" , height:"141px" , background:"#303434", borderRadius: "10px", margin:"0.5em 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-evenly"}}>
        <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center" , margin:"1em 0.5em"}}>
               <img src={details.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
               <div style={{display:"flex" , flexDirection:"column" ,justifyContent:"center" , position:"relative" , bottom:"0.5em" , margin:"0"}}>
            <button style={{background:"none" , border:"none" , position:"relative" , left:"4em", top:'1em',  color: color[details.id]}} onClick={() => likebutton(details.id)}>{details.like}</button>
               <h2 style={{fontSize:"20px"}}>{details.head}</h2>
               <p style={{fontSize:"14px" , color:"#a3a3a3"}}>{details.name}</p>
               <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , position:"relative" , right:"6px", margin:"0.1em 0"}}>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
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

         <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:"white", marginTop:"1em"}}>
        <h3>Veg Restaurants</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
       {VegRestaurant.map((details) => (


       <div className="cards" style={{width:"350px" , height:"141px" , background:"#303434", borderRadius: "10px", margin:"0.5em 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-evenly"}}>
        <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center" , margin:"1em 0.5em"}}>
               <img src={details.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
               <div style={{display:"flex" , flexDirection:"column" ,justifyContent:"center" , position:"relative" , bottom:"0.5em" , margin:"0"}}>
            <button style={{background:"none" , border:"none" , position:"relative" , left:"4em", top:'1em',  color: color[details.id]}} onClick={() => likebutton(details.id)}>{details.like}</button>
               <h2 style={{fontSize:"20px"}}>{details.head}</h2>
               <p style={{fontSize:"14px" , color:"#a3a3a3"}}>{details.name}</p>
               <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , position:"relative" , right:"6px", margin:"0.1em 0"}}>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
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

         <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:"white", marginTop:"1em"}}>
        <h3>Bar and Restaurants</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
       {BarRestaurant.map((details) => (


       <div className="cards" style={{width:"350px" , height:"141px" , background:"#303434", borderRadius: "10px", margin:"0.5em 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-evenly"}}>
        <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center" , margin:"1em 0.5em"}}>
               <img src={details.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
               <div style={{display:"flex" , flexDirection:"column" ,justifyContent:"center" , position:"relative" , bottom:"0.5em" , margin:"0"}}>
            <button style={{background:"none" , border:"none" , position:"relative" , left:"4em", top:'1em',  color: color[details.id]}} onClick={() => likebutton(details.id)}>{details.like}</button>
               <h2 style={{fontSize:"20px"}}>{details.head}</h2>
               <p style={{fontSize:"14px" , color:"#a3a3a3"}}>{details.name}</p>
               <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , position:"relative" , right:"6px", margin:"0.1em 0"}}>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
               <button style={{background:"none" , border:"none" , transform:'scale(0.7)'}}>{details.star}</button>
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
        </Stack>
        </>
     );
}
 
export default Restaurantbody;