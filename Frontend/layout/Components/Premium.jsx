import Lamp1 from "/pictures/lamb.png"
import Premiumimage from "/pictures/Premium_image.png"
import Image from 'next/image';
import React , {useEffect,useState} from "react";
import resume from '/pictures/resume.png'
import alumni from '/pictures/alumni.png'
import Referral from '/pictures/referral.png'
import  styles from  '/styles/Part2.module.css'
import Link from "next/link";

import {motion} from 'framer-motion'

const Premium = () => {
        const [shouldAnimate, setShouldAnimate] = useState(false);

        useEffect(() => {
          const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = window.innerWidth <= 940 ? 4000: 2500; // set the scroll position where the animation should trigger, adjust the trigger position for mobile devices
      
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
      
             <body style={{backgroundColor:"#120E16" ,overflow:"hidden" , minHeight:"100vh"}}  className={styles.body}  > 
             {shouldAnimate && (
              <div style={{display:"flex" , justifyContent:"space-around" , flexDirection:"row-reverse"}} className={styles.head} >
                  <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
                  <motion.div
                  initial={{y:-100}}
                  animate={{y:0}}
                  transition={{duration:1, type:"spring" , stiffness:"300" , damping:10 , delay:0.2}}
                  >
                 <Image alt='image' src={Lamp1} width={500} height={456} style={{position:"relative" , bottom:"0.8em"}} className={styles.lamp}  />
                  </motion.div>
                  <motion.div
                   initial={{ opacity:0}}
                   animate={{ opacity:1}}
                   transition={{duration:1.5 , delay:0.5 }}
                  >
                     <h1 style={{fontSize:"45px", position:"relative" , bottom:"4em" , color:"white"} } className={styles.h1} >Premium Features</h1>
                  </motion.div>
                  <motion.div
                   initial={{y:1000 , opacity:0}}
                   animate={{y:0 , opacity:1}}
                   transition={{duration:0.7 , delay:0.5 }}
                  >
                <h3 style={{textAlign:"center" , position:"relative" , bottom:"6.9em" , color:"#d9d9d9",opacity:"0.5"  , fontSize:"23px"}} className={styles.h3}  > <Image alt='image' src={resume} width={40} height={40} style={{position:"relative" , top:"0.5em"}} /> Resume Review </h3>
                <h3 style={{textAlign:"center" , position:"relative" , bottom:"6.9em" ,right:"0.75em",opacity:"0.5"  , color:"#d9d9d9" , fontSize:"23px"}} className={styles.h3}  > <Image alt='image' src={alumni} width={40} height={40} style={{position:"relative" , top:"0.5em" }} /> Alumni Chat </h3>
                <h3 style={{textAlign:"center" , position:"relative" , bottom:"6.9em" ,left:"0.5em",opacity:"0.5"  ,  color:"#d9d9d9" , fontSize:"23px"}} className={styles.h3} > <Image alt='image' src={Referral} width={40} height={40} style={{position:"relative" , top:"0.5em"}} /> Referral Program</h3>
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
                <Image alt='image' src={Premiumimage} width={500} height={500} style={{marginTop:"8em"}} className={styles.image} />
                </motion.div>
              </div>
             )}
             </body>
              </>
           );
      }
       
export default Premium;