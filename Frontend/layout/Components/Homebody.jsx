import rightImage from "/pictures/rightimg.png";
import c1 from "/pictures/cimg1.png";
import c2 from "/pictures/cimg2.png";
import ChatIcon from '@mui/icons-material/Chat';
import Image from "next/image";
import { Stack } from "@mui/system";
import  styles from  '/styles/Home.module.css';
import Link from "next/link";

const Homebody = (props) => {
  const cc={
    position:'relative',
    top:'2px',
    paddingRight:'2.2px'
  }
  const hest={
    fontFamily: 'Montserrat', 
  

      fontWeight: 600

  }
  return (
    <>
      <Stack marginTop={{sm:"45px",md:"55px"}} marginLeft={{sm:"106px",md:"303px"}} justifyContent="center" paddingBottom="20px" >
      <div className={styles.homeBody}>
        

        {/* middle */}
        <div className={styles.homeMiddle}>

          <div className={styles.homeCard} style={{backgroundColor:props.card}}>
            <div className={styles.imgp}>
              <Image src={c1} height="100%" width="100%" alt='image'  />
            </div>
            <div className={styles.txtp} style={hest}>
              <p style={{color:props.letter}}>Internship<br />Oppurtunities </p>
              <Link href="/internship"><button className={styles.hCardBtn} style={{background:props.button , color:props.letter1,marginTop:"10px"}}>Explore</button></Link>
            </div>
          </div>

          <div className={styles.homeCard} style={{backgroundColor:props.card}}>
            <div className={styles.imgp}>
              <Image src={c2} height="100%" width="100%" alt='image' />
            </div>
            <div className={styles.txtp} style={hest}>
              <p style={{color:props.letter}}>Nearby<br />Restaurants</p>
              <Link href="/restaurant"><button className={styles.hCardBtn}  style={{background:props.button, color:props.letter1,marginTop:"10px"}}>Explore</button></Link>
            </div>
          </div>

          <div className={styles.mDownBtn}>
            <Link href="/chat" style={{cursor:"pointer"}}><div className={styles.mBtn}  style={{background:props.button, color:props.letter1,cursor:"pointer"}}><i class="fa-solid fa-house"></i><ChatIcon size="small" color="#333838"/> Chat</div></Link>
            <Link href="/premium"><div className={styles.mBtn}  style={{background:props.button, color:props.letter1,cursor:"pointer"}}>Go Premium</div></Link>
          </div>

        </div>

        {/* right */}
        <div className={styles.homeRight}>
          <div className={styles.backText}>
        
            <p>Graduate Us</p>
            <p>Graduate Us</p>
            <p>Graduate Us</p>
            <p>Graduate Us</p>
            <p>Graduate Us</p>

          </div>
          <div className={styles.relPart}>
          <div className={styles.homeImg}>
            <Image src={rightImage} height="100%" width="100%" alt='image' />
          </div>
          <p className={styles.dtxt} style={{color:props.letter}}>Organize and simplify your tasks.<br />In one visual, smart and<br />collaborative space</p>
          </div>

        </div>
      </div>
      </Stack>
        </>
     );
}
 
export default Homebody;