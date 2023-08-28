import React from 'react'
import { Box, Stack, Typography, Rating, Button, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, TextField } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { Add } from "@mui/icons-material";


const restaurantData = [
    {
        "id": "1",
        "name": "Dawat Restaurant",
        "location": "Near Kirba Chowk , Burla , Sambalpur",
        "rating": "3",
        "profileImage": "https://source.unsplash.com/featured/?restaurant",
        "popularDish": [
            {
                "dishID": "1",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
            {
                "dishID": "2",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
            {
                "dishID": "3",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
            {
                "dishID": "4",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
        ],
        "menu": [
            {
                "dishID": "1",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
            {
                "dishID": "2",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
            {
                "dishID": "3",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
            {
                "dishID": "4",
                "dishName": "Chicken Butter Curry",
                "dishImage": "https://source.unsplash.com/featured/?chickencurry"
            },
        ],
    }
]
const EditDialog = ({ open, title, handleClose, submit }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>

                <TextField
                    autoFocus
                    margin="dense"
                    id="popularDishItem"
                    label="Dish Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <Typography sx={{ fontSize: "15px", marginTop: "10px", marginBottom: "5px", fontWeight: "500" }}>Add Dish Image</Typography>
                <input id='dish-image' accept="image/png, image/jpeg" name='dish-image' type='file' style={{ border: "1px solid #212121", padding: "10px" }} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>{submit}</Button>
            </DialogActions>
        </Dialog>
    )
}
const RestaurantView1 = () => {

    const [open1, setOpen1] = React.useState(false); // for profile image
    const [open2, setOpen2] = React.useState(false); // for popular dish
    const [open3, setOpen3] = React.useState(false); // to add new popular item
    const [open4, setOpen4] = React.useState(false); // to edit popular item
    const [open5, setOpen5] = React.useState(false); // for menu item
    const [open6, setOpen6] = React.useState(false); // to add new menu item
    const [open7, setOpen7] = React.useState(false); // to edit menu item

    const [editPopularList, setEditPopularList] = React.useState(false);
    const [editMenuList, setEditMenuList] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(!open1);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClickOpen2 = () => {
        setOpen2(!open2);
        setEditPopularList(!editPopularList);
    };
    // const handleClose2 = () => {
    //     setOpen2(false);
    // };
    const handleClickOpen3 = () => {
        setOpen3(!open3);
    };
    const handleClose3 = () => {
        setOpen3(false);
       
    };
    const handleClickOpen4 = () => {
        setOpen4(!open4);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };
    const handleClickOpen5 = () => {
        setOpen5(!open5);
        setEditMenuList(!editMenuList);
    };
    const handleClose5 = () => {
        setOpen5(false);
    };
    const handleClickOpen6 = () => {
        setOpen6(!open6);
    };
    const handleClose6 = () => {
        setOpen6(false);
    };
    const handleClickOpen7 = () => {
        setOpen7(!open7);
    };
    const handleClose7 = () => {
        setOpen7(false);
    };

    return (
        <>
            <Stack sx={{ position:"absolute",right:"0", minHeight: "100vh",flexDirection: "column", fontFamily: "Montserrat", marginTop:{xs:'65px',sm:"60px"} ,padding: { xs: "10px",sm:"20px", lg: "30px" }, background: "#fff", width: { xs: "100%",md:"75%",lg:"82%",xl:"86%" } }}>
                <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-between" }}>
                    <Stack sx={{ justifyContent: "flex-start", alignItems: "flex-start", height: "100%" }}>
                        <Typography sx={{ fontSize: { xs: "28px", md: "34px",xl:"36px" }, fontWeight: "600", lineHeight: { xs: "48px", md: "54px" }, color: "#000" }}>{restaurantData[0].name}</Typography>
                        <Typography sx={{ fontSize: { xs: "17px", md: "18px",xl:"20px" }, fontWeight: "500", lineHeight: { xs: "20px", md: "30px" }, color: "#000" }}><FmdGoodIcon sx={{ fontSize: "19px", }} /> {restaurantData[0].location}</Typography>
                        <Stack sx={{ color: "#000", textTransform: "uppercase", marginLeft: "2%", marginTop: "5px", fontSize: { xs: "12px", md: "13px" }, flexDirection: "row", alignItems: "center", gap: "6px", lineHeight: "24px" }}><Typography sx={{ fontSize: {xs:"13px",xl:"16px"}, fontWeight: "700", lineHeight: "24px", color: "#000", lineHeight: "24px" }}>Rating: </Typography><Typography sx={{ lineHeight: "24px", fontSize: "13px", fontWeight: "500" }}>{restaurantData[0].rating} star</Typography></Stack>
                        <Rating
                            name="simple-controlled"
                            value={restaurantData[0].rating}
                            sx={{ color: "#FF9900" }}
                            readOnly
                        />

                    </Stack>
                    <Box sx={{ position: "relative" }}>
                        <Button onClick={handleClickOpen1} variant="contained" sx={{ position: "absolute", right: "10px", top: "10px", textTransform: "capitalize", background: "#fff", color: "#000", padding: "5px 10px", borderRadius: "15px", fontWeight: "500" }}><ModeOutlinedIcon sx={{ fontSize: "16px", marginRight: "3px" }} /> Edit</Button>
                        <Dialog open={open1} onClose={handleClose1}>
                            <DialogTitle>Edit Image</DialogTitle>
                            <DialogContent>
                                <input
                                    id="profile-image"
                                    label="profile-image"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose1}>Cancel</Button>
                                <Button onClick={handleClose1}>Upload</Button>
                            </DialogActions>
                        </Dialog>
                        <Box component="img" src={restaurantData[0].profileImage} sx={{ width: { xs: "100%",md:"400px" ,lg: "453px" }, height: "191px", objectFit: "cover", borderRadius: "16px" }} alt="Restaurant-Image" />
                    </Box>
                </Stack>
                {/* Popular Dish===================================================================================================== */}
                <Stack >
                    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginY: "15px" }}>
                            <Typography sx={{ fontWeight: "600", fontSize: {xs:"22px",xl:"24px"}, color: "#000" }}>Popular Dish</Typography>
                        <Button onClick={handleClickOpen2} variant="contained" sx={{ textTransform: "capitalize", background: "#fff", color: "#000", padding: "5px 10px", borderRadius: "15px", fontWeight: "500" }}><ModeOutlinedIcon sx={{ fontSize: "16px", marginRight: "3px" }} /> Edit</Button>
                    </Stack>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                        {editPopularList === true ? (<>
                            <Box onClick={handleClickOpen3} sx={{ width: { xs: "100%", sm: "230px" }, height: { xs: "150px", sm: "120px" }, background: "rgba(0,0,0,0.7)", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "5px", overflow: "hidden" }}>
                                <Typography sx={{ fontSize: {xs:"14px",xl:"16px"}, cursor: "pointer", background: "rgba(0, 0, 0, 0.63)", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}><Add /> Add</Typography>
                            </Box>
                            <EditDialog open={open3} handleClose={handleClose3} title="Add Popular Dish" submit="Add Dish" />
                        </>

                        ) : <></>
                        }
                        {restaurantData[0].popularDish.map((dish) => {
                            return (<Box key={dish.dishID} sx={{ width: { xs: "100%", sm: "230px" }, height: { xs: "150px", sm: "120px" }, background: `url(${dish.dishImage})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "5px", position: "relative", overflow: "hidden" }}>

                                {editPopularList &&
                                    <Button onClick={handleClickOpen4} variant="contained" sx={{ position: "absolute", right: "10px", top: "10px", textTransform: "capitalize", background: "#fff", color: "#000", padding: "1px 3px", borderRadius: "15px", fontWeight: "500" }}><ModeOutlinedIcon sx={{ fontSize: "15px", marginRight: "3px" }} /> Edit</Button>

                                }
                                <EditDialog open={open4} handleClose={handleClose4} title="Edit Popular Dish" submit="Edit Dish" />
                                <Typography sx={{ position: "absolute", bottom: "0", left: "0", fontSize: "14px", padding: "5px", background: "rgba(0, 0, 0, 0.63)", color: "#fff", width: "100%" }}>{dish.dishName}</Typography>
                            </Box>)
                        })}
                    </Stack>
                </Stack>
                {/* menu Item ========================================================================================================================*/}
                <Stack >
                    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: "15px", marginTop: "20px" }}>
                        <Typography sx={{ fontWeight: "600", fontSize: {xs:"22px",xl:"24px"}, color: "#000" }}>Menu Item</Typography>
                        <Button onClick={handleClickOpen5} variant="contained" sx={{ textTransform: "capitalize", background: "#fff", color: "#000", padding: "5px 10px", borderRadius: "15px", fontWeight: "500" }}><ModeOutlinedIcon sx={{ fontSize: "16px", marginRight: "3px" }} /> Add</Button>
                    </Stack>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", width: "100%" }}>
                        {editMenuList === true ? (<>
                            <Box onClick={handleClickOpen6} sx={{width: { xs: "100%", sm: "230px" }, height: { xs: "150px", sm: "120px" }, background: "rgba(0,0,0,0.7)", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "5px", overflow: "hidden" }}>
                                <Typography sx={{ fontSize:  {xs:"14px",xl:"16px"}, cursor: "pointer", background: "rgba(0, 0, 0, 0.63)", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}><Add /> Add</Typography>
                            </Box>
                            <EditDialog open={open6} handleClose={handleClose6} title="Add New Menu Item" submit="Add Item" />

                        </>

                        ) : <></>
                        }
                        {restaurantData[0].menu.map((dish) => {
                            return (

                                <Box key={dish.dishID} sx={{ width: { xs: "100%", sm: "230px" }, height: { xs: "150px", sm: "120px" }, background: `url(${dish.dishImage})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "5px", position: "relative", overflow: "hidden" }}>
                                    <Button onClick={handleClickOpen7} variant="contained" sx={{ position: "absolute", right: "10px", top: "10px", textTransform: "capitalize", background: "#fff", color: "#000", padding: "1px 3px", borderRadius: "15px", fontWeight: "500" }}><ModeOutlinedIcon sx={{ fontSize: "15px", marginRight: "3px" }} /> Edit</Button>
                                    <EditDialog open={open7} handleClose={handleClose7} title="Edit Menu Item" submit="Edit Item" />

                                    <Typography sx={{ position: "absolute", bottom: "0", left: "0", fontSize: "14px", padding: "5px", background: "rgba(0, 0, 0, 0.53)", color: "#fff", width: "100%" }}>{dish.dishName}</Typography>

                                </Box>
                            )
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default RestaurantView1