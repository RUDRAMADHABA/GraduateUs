import rightImage from "/pictures/rightimg.png";
import c1 from "/pictures/cimg1.png";
import c2 from "/pictures/cimg2.png";
import ChatIcon from '@mui/icons-material/Chat';
import Image from "next/image";
import { Stack } from "@mui/system";
import  styles from  '/styles/home.module.css'
const Homebody = () => {
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
      <Stack marginTop={{sm:"105px",md:"125px"}} marginLeft={{sm:"106px",md:"303px"}} justifyContent="center" paddingBottom="20px" >
      <div className={styles.homeBody}>
        

        {/* middle */}
        <div className={styles.homeMiddle}>

          <div className={styles.homeCard}>
            <div className={styles.imgp}>
              <Image src={c1} height="100%" width="100%"  />
            </div>
            <div className={styles.txtp} style={hest}>
              <p>Internship<br />Oppurtunities </p>
              <button className={styles.hCardBtn}>Explore</button>
            </div>
          </div>

          <div className={styles.homeCard}>
            <div className={styles.imgp}>
              <Image src={c2} height="100%" width="100%" />
            </div>
            <div className={styles.txtp} style={hest}>
              <p>Nearby<br />Restaurants</p>
              <button className={styles.hCardBtn}>Explore</button>
            </div>
          </div>

          <div className={styles.mDownBtn}>
            <div className={styles.mBtn}><i class="fa-solid fa-house"></i><ChatIcon size="small" color="#333838"/> College Folks</div>
            <div className={styles.mBtn}>Go Premium</div>
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
            <p>Graduate Us</p>
            <p>Graduate Us</p>
          </div>
          <div className={styles.relPart}>
          <div className={styles.homeImg}>
            <Image src={rightImage} height="100%" width="100%" />
          </div>
          <p className={styles.dtxt}>Organize and simplify your tasks.<br />In one visual, smart and<br />collaborative space</p>
          </div>

        </div>
      </div>
      </Stack>
        </>
     );
}
 
export default Homebody;