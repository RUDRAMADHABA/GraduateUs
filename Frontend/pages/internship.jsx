import Internshipbody from "../layout/Components/Internshipbody";
import Navbar from "../layout/Interncompo/Navbar";
import  styles from  '/styles/Part2.module.css'
const Intern = () => {
    return (  
        <>
         <body style={{background:"#151515" , minHeight:"100vh"}} className={styles.Internshipbody}>
       
         <Internshipbody/>
         <Navbar/>
         </body>
        </>
    );
}
 
export default Intern;