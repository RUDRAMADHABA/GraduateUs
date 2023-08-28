import ResponsiveDrawer from "../layout/Admindashboard/Sidebar";
import Premiumbody from "../layout/Admindashboard/Premiumbody"
const dashboard = () => {
   return (
      <>
         <body style={{ background: "#F8F6F6", minHeight: "100vh", height: "100%" }}>
            <Premiumbody />
            <ResponsiveDrawer />
         </body>
      </>
   );
}

export default dashboard;