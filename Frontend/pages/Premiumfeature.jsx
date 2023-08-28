import PremiumFeature from "../layout/Components/PremiumFeature";
import Navbar from "../layout/Interncompo/Navbar";
import styles from '/styles/Part2.module.css';
import React from "react";
import { useState } from "react";
const Premiumfeature = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState('#262727');
  const [color1, setColor1] = useState('#333838');
  const [letter, setletter] = useState('white');
  const Change = () => {

    setIsDarkMode(!isDarkMode);
    if (color === '#262727') {
      setColor('white');
      setColor1('#f3f3f3')
      setletter('black')
    } else {
      setColor('#262727')
      setColor1('#333838')
      setletter('white')
    }
  };
  return (
    <>
      <body style={{ background: color, minHeight: "100vh" }} className={styles.premiumbody}>
        <PremiumFeature color1={color1} letter={letter} />
        <Navbar Change={Change} isDarkMode={isDarkMode} />
      </body>
    </>
  );
}

export default Premiumfeature;