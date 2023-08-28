import Homebody from "../layout/Components/Homebody";
import Navbar from "../layout/Interncompo/Navbar";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import styles from "/styles/Home.module.css";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState("#262727");
  const [button, setButton] = useState("#fff");
  const [letter, setletter] = useState("white");
  const [letter1, setletter1] = useState("#121212");
  const [card, setCard] = useState("#333838");
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const userSession = await getSession();
      setSession(userSession);
      if (userSession){ setLoading(false) 
      }
    };

    checkSession();
  }, []);

  // useEffect(() => {
  //   let timer;

    // if (!session) {
    // const timer = setTimeout(() => {
    //     router.push("/signin");
    //   }, 4000);
    // }

  //   return () => clearTimeout(timer);
  // }, [session, router]);

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
     {
      loading ? (
        <div className={styles.loaderContainer} style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh"}}>
        {!session && <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#f5f5f5" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />}
        </div>
      ) : (
        <>
        <Homebody
          letter={letter}
          card={card}
          button={button}
          letter1={letter1}
        />
        <Navbar Change={Change} isDarkMode={isDarkMode} />
      </>
      )
     }
      </body>
    </>
  );
};

export default Home;
