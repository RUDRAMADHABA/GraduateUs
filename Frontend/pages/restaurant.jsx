import Restaurantbody from "../layout/Components/Restaurantbody"
import Navbar from "../layout/Interncompo/Navbar";
import  styles from  '/styles/Part2.module.css'

const Restaurant = () => {
    return ( 
        <>
         <body style={{background:"#151515" , minHeight:"100vh"}} className={styles.Restaurantbody}>
       <Restaurantbody/>
       <Navbar/>
       </body>
        </>
     );
}
 
export default Restaurant;