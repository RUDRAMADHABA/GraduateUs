import ResponsiveDrawer from "../layout/Admindashboard/Sidebar";
import RestaurantDetails1 from "../layout/Admindashboard/RestaurantDetails";

const RestaurantDetails = () => {
    return (
        <>
            <body style={{ background: "#F8F6F6", minHeight: "100vh", height: "100%" }}>
                <RestaurantDetails1 />
                <ResponsiveDrawer />
            </body>
        </>
    );
}

export default RestaurantDetails;