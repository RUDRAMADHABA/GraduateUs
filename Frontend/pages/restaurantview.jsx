import ResponsiveDrawer from "../layout/Admindashboard/Sidebar";
import RestaurantView1 from "../layout/Admindashboard/RestaurantView";
import { Stack } from "@mui/material";

const RestaurantView = () => {
    return (
        <>
            <Stack sx={{ position: "relative", background: "#fff", width: "100vw", minHeight: "100vh", height: "100%" }}>
                <RestaurantView1 />
                <ResponsiveDrawer />
            </Stack>
        </>
    );
}

export default RestaurantView;