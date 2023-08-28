import ResponsiveDrawer from "../layout/Admindashboard/Sidebar";
import Dashboardbody from "../layout/Admindashboard/Dashboardbody"
const dashboard = () => {
   return (
      <>
         <body style={{ background: "#F8F6F6", minHeight: "100vh", height: "100%" }}>
            <Dashboardbody />
            <ResponsiveDrawer />
         </body>
      </>
   );
}

export default dashboard;