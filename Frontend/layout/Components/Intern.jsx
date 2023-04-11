import Lamp1 from "/pictures/lamb.png"
import internimage from "/pictures/Intern_image.png"
import Image from 'next/image';
import React , {useEffect,useState} from "react";
import  styles from  '/styles/Part2.module.css'
import Link from "next/link";

import {motion} from 'framer-motion'
const Intern = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const triggerPosition = window.innerWidth <= 940 ? 200 : 240; // set the scroll position where the animation should trigger, adjust the trigger position for mobile devices

      if (scrollPosition > triggerPosition) {
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return ( 
        <>

       <body style={{backgroundColor:"#d9d9d9" , overflow:"hidden" , minHeight:"100vh"}} className={styles.body}  > 
       {shouldAnimate && (
        <div style={{display:"flex" , justifyContent:"space-around" }} className={styles.head} >
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
            <motion.div
            initial={{y:-100}}
            animate={{y:0}}
            transition={{duration:1, type:"spring" , stiffness:"300" , damping:10 , delay:0.2}}
            >
           <Image src={Lamp1} width={500} height={456} style={{position:"relative" , bottom:"0.8em"}}  className={styles.lamp}  />
            </motion.div>
            <motion.div
             initial={{ opacity:0}}
             animate={{ opacity:1}}
             transition={{duration:1.5 , delay:0.5 }}
            >
               <h1 style={{fontSize:"45px", position:"relative" , bottom:"4em" , fontWeight:"600"}} > <span style={{marginLeft:"1em"}}>Internship</span>  <br /> Opportunities  </h1>
            </motion.div>
            <motion.div
             initial={{y:1000 , opacity:0}}
             animate={{y:0 , opacity:1}}
             transition={{duration:0.7 , delay:0.5 }}
            >
          <h3 style={{textAlign:"center" , position:"relative" , bottom:"6.9em" , color:"rgba(0, 0, 0, 0.63)" , fontSize:"23px"}} className={styles.h3}  >Never miss an internship opportunity <br /> Stay updated and grab <br /> your chance.</h3>
          </motion.div>
          <motion.div
             initial={{y:1000 , opacity:0}}
             animate={{y:0 , opacity:1}}
             transition={{duration:0.7 , delay:0.5 }}
            >
     <Link href='/signup'> <button style={{background: "#000000",borderRadius: "34.5px" , color:"white" , border:"none" , padding:"0.5em 1.5em" , marginRight:"0.5em", position:"relative", bottom:"5em" , fontSize:"22px" , fontWeight:"600",cursor:"pointer"}} className={styles.button}>Try For Free</button></Link> 
          </motion.div>
          </div>
          <motion.div
             initial={{ opacity:0}}
             animate={{ opacity:1}}
             transition={{duration:1.5 , delay:0.5}}
            >
          <Image src={internimage} width={500} height={500} style={{marginTop:"10em"}} className={styles.image}  />
          </motion.div>
        </div>
       )}
       </body>
        </>
     );
}
 
export default Intern;