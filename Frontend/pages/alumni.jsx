import Alumnibody from "../layout/Components/Alumnibody"
import Navbar from "../layout/Interncompo/Navbar";
import React from "react";
import { useState } from "react";
const Alumni = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState('#262727');
  const [color1, setColor1] = useState('#333838');
  const [letter, setletter] = useState('white');
  const Change = () => {
   
    setIsDarkMode(!isDarkMode);
    if(color === '#262727'){
    setColor('white');
     setColor1('#E4E5E8')
     setletter('#5f5f5f')
    }else{
      setColor('#262727')
      setColor1('#333838')
      setletter('#fff')
    }
  };
    return ( 
        <>
         <body style={{background: color , minHeight:"100vh"}}>
       <Alumnibody color1={color1} letter={letter}/>
       <Navbar Change={Change} isDarkMode={isDarkMode}/>
       </body>
        </>
     );
}
 
export default Alumni;