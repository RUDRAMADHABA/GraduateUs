import Navbar from "../layout/Interncompo/Navbar";
import React from "react";
import { useState } from "react";
import Attendancebody from "../layout/Components/Attendancebody";

const Attendance = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState("#262727");
  const [head, setHead] = useState("#fff");
  const [letter, setLetter] = useState("#fff");
  const [letter1, setLetter1] = useState("#fff");
  const [box, setBox] = useState("#464646");
  const Change = () => {
    setIsDarkMode(!isDarkMode);
    if (color === "#262727") {
      setColor("white");
      setHead("#000");
      setLetter("#929292");
      setBox("#f5f5f5");
      setLetter1("#0e7278");
    } else {
      setColor("#262727");
      setLetter("#fff");
      setHead("#fff");
      setBox("#464646");
      setLetter1("#fff");
    }
  };
  return (
    <>
      <body style={{ background: color, minHeight: "100vh" }}>
        <Attendancebody
          head={head}
          letter={letter}
          box={box}
          letter1={letter1}
        />
        <Navbar Change={Change} isDarkMode={isDarkMode} />
      </body>
    </>
  );
};

export default Attendance;
