import Navbar from "/layout/appbar"
import Intern from "../layout/Components/Intern"
import Notes from "../layout/Components/Notes"
import Cgpa from "../layout/Components/Cgpa"
import Premium from "../layout/Components/Premium"
import HomeM from "../layout/home"
import RestaurantDetails from "../layout/Admindashboard/RestaurantDetails"
import { useEffect, useState } from "react"
import Lottie from 'lottie-react-web';
import animationData from '../public/data.json'; // Replace 'your-animation.json' with your LottieFiles JSON file path
import { Box } from "@mui/material"
export default function Home() {

  const [loading , setLoading] = useState(true)


setTimeout(() => {
  setLoading(false)
}, 4000);

  return (
    <>
    {
      loading ? (
<Box sx={{minHeight:"100vh" , height:"100%" , background:"#f5f5f5" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
<Lottie options={{ animationData }} style={{width:"500px" , height:"500px"}} />;
</Box>
       ): (
        <div>
        {/* < RestaurantDetails /> */}
        <Navbar />
         <HomeM />
         <Intern />
         <Notes />
         <Cgpa />
         <Premium />
       </div>
      )
    }
   </>
  )
}
