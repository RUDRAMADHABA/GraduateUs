import PremiumFeature from "../layout/Components/PremiumFeature";
import Navbar from "../layout/Interncompo/Navbar";
import  styles from  '/styles/Part2.module.css';
const Premiumfeature = () => {
    return ( 
        <>
            <body style={{background:"#151515" , minHeight:"100vh"}} className={styles.premiumbody}>
                <PremiumFeature/>
       <Navbar/>
       </body>
        </>
     );
}
 
export default Premiumfeature;