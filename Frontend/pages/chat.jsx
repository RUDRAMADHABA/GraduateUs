import Chatb from "../layout/Components/Chatb";
import Navbar from "../layout/Interncompo/Navbar";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [color, setColor] = useState("#262727");
  const [button, setButton] = useState("#fff");
  const [letter, setletter] = useState("white");
  const [letter1, setletter1] = useState("#121212");
  const [card, setCard] = useState("#333838");
  const { data: session } = useSession();

  console.log(session);
  

  const Change = () => {
    setIsDarkMode(!isDarkMode);
    if (color === "#262727") {
      setColor("white");
      setButton("#121212");
      setletter("#151515");
      setCard("#f2f2f2");
      setletter1("#fff");
    } else {
      setColor("#262727");
      setletter("white");
      setCard("#333838");
      setButton("#fff");
      setletter1("#121212");
    }
  };

  return (
    <>
      <body style={{ background: color, minHeight: "100vh" }}>
        <Chatb
          letter={letter}
          card={card}
          button={button}
          letter1={letter1}
        />
        <Navbar Change={Change} isDarkMode={isDarkMode} />
      </body>
    </>
  );
};

export default Home;
