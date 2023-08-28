import ResponsiveDrawer from "../layout/Admindashboard/Sidebar";
import UserDetailsbody from "../layout/Admindashboard/UserDetailsbody";
const UserDetails = () => {
    return (
        <>
            <body style={{ background: "#F8F6F6", minHeight: "100vh", height: "100%" }}>
                <UserDetailsbody />
                <ResponsiveDrawer />
            </body>
        </>
    );
}

export default UserDetails;