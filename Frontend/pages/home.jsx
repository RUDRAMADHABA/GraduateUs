import Homebody from "../layout/Components/Homebody";
import Navbar from "../layout/Interncompo/Navbar";
const home = () => {
    return (  
        <>
         <body style={{background:"#151515" , minHeight:"100vh"}}>

       <Homebody/>
         <Navbar/>
         </body>
        </>
    );
}
 
export default home ;