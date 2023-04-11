import { useState } from 'react';
import  styles from  '/styles/Part2.module.css'
import { Stack } from '@mui/system';
import { TextField } from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Internshipbody = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
// Core data 
   const Noncoredata = [
    {id:1, image:'/image1.png', name:"Netflix"  , background:"#6e4ada" , head:"UI/UX Intern" , location:"remote" , month:"3 Months" , stipend:"1400k" , button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/> },
    {id:2, image:'/image2.png', name:"Apple" ,  background:"#b3b3b3" , head:"UI/UX Intern" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
    {id:3, image:'/image3.png', name:"Behance" ,  background:"#fcbb3c" , head:"UI/UX Intern" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
    {id:4, image:'/image4.png', name:"Amazon" ,  background:"#ef2b54" , head:"UI/UX Intern" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
    {id:4, image:'/image4.png', name:"Amazon" ,  background:"#ef2b54" , head:"UI/UX Intern" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
  ]

 // Non core data
 const coredata = [
  {id:1, image:'/image1.png', name:"Nalco"  , background:"#6e4ada" , head:"Chemist" , location:"remote" , month:"3 Months" , stipend:"1400k" , button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/> },
  {id:2, image:'/image2.png', name:"Rsp" ,  background:"#b3b3b3" , head:"Chemist" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
  {id:3, image:'/image3.png', name:"DRDO" ,  background:"#fcbb3c" , head:"Chemist" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
  {id:4, image:'/image4.png', name:"Hindalco" ,  background:"#ef2b54" , head:"Chemist" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
  {id:4, image:'/image4.png', name:"Rsp" ,  background:"#ef2b54" , head:"Chemist" , location:"remote" , month:"3 Months" , stipend:"1400k" ,  button:"Apply Internship" , save:"Save" , locationicon:  <LocationOnIcon/> ,monthicon:<EventNoteIcon/> , stipendicon: < CurrencyRupeeIcon/>},
]

  const[core , setCore] = useState(false)
  const[noncore , setNoncore ] =useState(true)  
       const corebutton = () =>{
        setCore(true)
        setNoncore(false)
       }
       const noncorebutton = () =>{
         setNoncore(true)
         setCore(false)
   }


    return ( 
        <>
        <Stack marginTop={{sm:"105px",md:"125px"}} marginLeft={{sm:"106px",md:"303px"}} justifyContent="center" paddingBottom="20px" >
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
        <div style={{display:"flex" , flexDirection:"row" , margin:"0.7em 0" }}>
        <button onClick={corebutton} className={styles.button} style={{width:"60px" , height:"28px" , border:"none" , background:props.color , borderRadius:"4px" , color:props.letter}} >Core</button>
        <button onClick={noncorebutton}  className={styles.button} style={{marginLeft:"1.5em", width:"95px" , height:"28px" , border:"none" , background:props.color , borderRadius:"4px" , color:props.letter}}>Non Core</button>
        </div>
        {/* core details */}
        {core && (
<>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter}}>
        <h3>Actively Hiring</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
        {coredata.map((data) =>(
         <div key={data.id} className={styles.cards} style={{width:"291px" , height:"220px" , background:data.background , borderRadius: "10px", margin:"0 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
         <div style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"start" , marginTop:"0.5em"}}>
          <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center" }}>
               <img src={data.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
          <p>{data.head}  <br /> {data.name} </p>
          </div>
          <div style={{display:"flex" , flexWrap:"wrap" ,gap:"20px" ,  justifyContent:"flex-start"  , marginLeft:"2em"}}>
           <div style={{display:"flex" , alignItems:"center"}}>
            <p>{data.locationicon}</p>
            <p>{data.location}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center"}}>
            <p style={{margin:"0 0.2em"}}>{data.monthicon}</p>
            <p>{data.month}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center" , position:"relative" , bottom:"0.5em"}}>
            <p>{data.stipendicon}</p>
            <p>{data.stipend}</p>
            </div> 
          </div>
          <div style={{display:"flex" , justifyContent:"space-around" , gap:"40px"  , alignItems:"center"}}>
            <button style={{padding:"9px 15px" , borderRadius:"8px" , border:"none" , color:"#143A84" , fontWeight:"900" , fontSize:"14px"}} className={styles.apply} >{data.button}</button>
            <p style={{position:"relative" , right:"2em"  ,fontWeight:"500" , fontSize:"17px"}} >{data.save}</p>
          </div>
         </div>
                 ))}
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter , marginTop:"1.5em"}}>
        <h3 >New Internships</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
        {coredata.map((data) =>(
         <div key={data.id} className="cards" style={{width:"291px" , height:"92px" , background:data.background , borderRadius: "10px", margin:"0 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column"}}>
         <div style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"start" , marginTop:"0.5em"}}>
          <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center"}}>
               <img src={data.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
               <div style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"start"}}>
          <p>{data.head}  <br /> {data.name} </p>
          <div style={{display:"flex" , alignItems:"center"}}>
            <p>{data.locationicon}</p>
            <p>{data.location}</p>
            </div> 
            </div>
          </div>
         </div>
                 ))}
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter , marginTop:"1.5em"}}>
        <h3 >Recently Viewed</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
        {coredata.map((data) =>(
         <div key={data.id} className="cards" style={{width:"291px" , height:"220px" , background:data.background , borderRadius: "10px", margin:"0 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
         <div style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"start" , marginTop:"0.5em"}}>
          <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center"}}>
               <img src={data.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
          <p>{data.head}  <br /> {data.name} </p>
          </div>
          <div style={{display:"flex" , flexWrap:"wrap" ,gap:"20px" ,  justifyContent:"flex-start"  , marginLeft:"2em"}}>
           <div style={{display:"flex" , alignItems:"center"}}>
            <p>{data.locationicon}</p>
            <p>{data.location}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center"}}>
            <p style={{margin:"0 0.2em"}}>{data.monthicon}</p>
            <p>{data.month}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center" , position:"relative" , bottom:"0.5em"}}>
            <p>{data.stipendicon}</p>
            <p>{data.stipend}</p>
            </div> 
          </div>
          <div style={{display:"flex" , justifyContent:"space-around" , gap:"40px"  , alignItems:"center"}}>
            <button style={{padding:"9px 15px" , borderRadius:"8px" , border:"none" , color:"#143A84" , fontWeight:"900" , fontSize:"14px"}} className={styles.apply} >{data.button}</button>
            <p style={{position:"relative" , right:"2em"  ,fontWeight:"500" , fontSize:"17px"}} >{data.save}</p>
          </div>
         </div>
                 ))}
       </div>
       </>
         )}
{/* Non core details */}

{noncore && (
  <>
<div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter}}>
        <h3>Actively Hiring</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
        {Noncoredata.map((data) =>(
         <div key={data.id} className="cards" style={{width:"291px" , height:"220px" , background:data.background , borderRadius: "10px", margin:"0 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
         <div style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"start" , marginTop:"0.5em"}}>
          <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center"}}>
               <img src={data.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
          <p>{data.head}  <br /> {data.name} </p>
          </div>
          <div style={{display:"flex" , flexWrap:"wrap" ,gap:"20px" ,  justifyContent:"flex-start"  , marginLeft:"2em"}}>
           <div style={{display:"flex" , alignItems:"center"}}>
            <p>{data.locationicon}</p>
            <p>{data.location}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center"}}>
            <p style={{margin:"0 0.2em"}}>{data.monthicon}</p>
            <p>{data.month}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center" , position:"relative" , bottom:"0.5em"}}>
            <p>{data.stipendicon}</p>
            <p>{data.stipend}</p>
            </div> 
          </div>
          <div style={{display:"flex" , justifyContent:"space-around" , gap:"40px"  , alignItems:"center"}}>
            <button style={{padding:"9px 15px" , borderRadius:"8px" , border:"none" , color:"#143A84" , fontWeight:"900" , fontSize:"14px"}} className={styles.apply} >{data.button}</button>
            <p style={{position:"relative" , right:"2em"  ,fontWeight:"500" , fontSize:"17px"}} >{data.save}</p>
          </div>
         </div>
                 ))}
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter , marginTop:"1.5em"}}>
        <h3 >New Internships</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
        {Noncoredata.map((data) =>(
         <div key={data.id} className="cards" style={{width:"291px" , height:"92px" , background:data.background , borderRadius: "10px", margin:"0 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column"}}>
         <div style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"start" , marginTop:"0.5em"}}>
          <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center"}}>
               <img src={data.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
               <div style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"start"}}>
          <p>{data.head}  <br /> {data.name} </p>
          <div style={{display:"flex" , alignItems:"center"}}>
            <p>{data.locationicon}</p>
            <p>{data.location}</p>
            </div> 
            </div>
          </div>
         </div>
                 ))}
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , color:props.letter , marginTop:"1.5em"}}>
        <h3 >Recently Viewed</h3>
        <h4 style={{marginRight:"2.7em"}}>View All</h4>
       </div>
       <div style={{display:"flex" , flexDirection:"row" , justifyContent:"start" , alignItems:"center" , color:"white" , marginTop:"1em" , marginRight:"2em"}} className={styles.slider} >
        {Noncoredata.map((data) =>(
         <div key={data.id} className="cards" style={{width:"291px" , height:"220px" , background:data.background , borderRadius: "10px", margin:"0 1em" , flexShrink:"0" , scrollSnapAlign:"start" , display:"flex" , flexDirection:"column", gap:"5px"}}>
         <div style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"start" , marginTop:"0.5em"}}>
          <div style={{minHeight:"70px" , display:"flex" , justifyContent:"center"}}>
               <img src={data.image} width='100%' height='100%' style={{objectFit:"cover"}}/>
               </div>
          <p>{data.head}  <br /> {data.name} </p>
          </div>
          <div style={{display:"flex" , flexWrap:"wrap" ,gap:"20px" ,  justifyContent:"flex-start"  , marginLeft:"2em"}}>
           <div style={{display:"flex" , alignItems:"center"}}>
            <p>{data.locationicon}</p>
            <p>{data.location}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center"}}>
            <p style={{margin:"0 0.2em"}}>{data.monthicon}</p>
            <p>{data.month}</p>
            </div> 
            <div style={{display:"flex" , alignItems:"center" , position:"relative" , bottom:"0.5em"}}>
            <p>{data.stipendicon}</p>
            <p>{data.stipend}</p>
            </div> 
          </div>
          <div style={{display:"flex" , justifyContent:"space-around" , gap:"40px"  , alignItems:"center"}}>
            <button style={{padding:"9px 15px" , borderRadius:"8px" , border:"none" , color:"#143A84" , fontWeight:"900" , fontSize:"14px"}} className={styles.apply} >{data.button}</button>
            <p style={{position:"relative" , right:"2em"  ,fontWeight:"500" , fontSize:"17px"}} >{data.save}</p>
          </div>
         </div>
                 ))}
       </div>
</>
)}
       </Stack>
        </>
     );
}
 
export default Internshipbody;