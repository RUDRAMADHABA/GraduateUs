import Internshipbody from "../layout/Components/Internshipbody";
import Navbar from "../layout/Interncompo/Navbar";
import styles from '/styles/Part2.module.css'
import React from "react";
import { useState } from "react";

const Intern = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState('#262727');
  const [color1, setColor1] = useState('#333838');
  const [letter, setletter] = useState('white');
  const Change = () => {

    setIsDarkMode(!isDarkMode);
    if (color === '#262727') {
      setColor('white');
      setColor1('#E4E5E8')
      setletter('#5f5f5f')
    } else {
      setColor('#262727')
      setColor1('#333838')
      setletter('white')
    }
  };

  return (
    <>
      <body style={{ background: color, minHeight: "100vh" }} className={styles.Internshipbody}>
        <Internshipbody color={color1} letter={letter} />
        <Navbar Change={Change} isDarkMode={isDarkMode} />
      </body>
    </>
  );
}

export default Intern;