import ResponsiveDrawer from "../layout/Admindashboard/Sidebar";
import Querybody from "../layout/Admindashboard/Querybody";
const UserDetails = () => {
    return (
        <>
            <body style={{ background: "#F8F6F6", minHeight: "100vh", height: "100%" }}>
                <Querybody />
                <ResponsiveDrawer />
            </body>
        </>
    );
}

export default UserDetails;