import Subscription1 from "../layout/Components/Subscriptionbody";
import Navbar from "../layout/Interncompo/Navbar";

import React from "react";
import { useState } from "react";
const Subscription = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [color, setColor] = useState('#262727');
    const [letter, setletter] = useState('white');
    const Change = () => {
     
      setIsDarkMode(!isDarkMode);
      if(color === '#262727'){
      setColor('white');
       setletter('#5f5f5f')
      }else{
        setColor('#262727')
        setletter('#fff')
      }
    };
    return ( 
        <>
        
            <body style={{background:color , minHeight:"100vh"}}>
                <Subscription1 letter={letter}/>
                <Navbar Change={Change} isDarkMode={isDarkMode}/>
            </body>
          
        </>
     );
}
 
export default Subscription;