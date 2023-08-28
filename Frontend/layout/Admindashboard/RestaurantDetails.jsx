import styles from '../../styles/res.module.css';
import React, {useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Pagination } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import { allHotels } from "./data";
import ResCard from './ResCard';

const RestaurantDetails = () => {

  const [resData, setResData] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getData = async () => {
      // const url = "";
      // const result = await fetch(url);
      // const data = result.json();
      setResData(allHotels);
      // console.log(data);
    }
    getData();
  }, [allHotels])

  return (
    <>
      <Stack marginTop={{ xs: "70px", md: "80px" }} marginLeft={{ xs: "10px", md: "255px" }} paddingBottom="20px">
        <div className={styles.restaurant}>
          <div className={styles.resup}>
            <div className={styles.restauranttxt}>
              <h1 className="restxt">Restaurant Details</h1>
            </div>
            <div className={styles.resfilter}>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ right: "70px" }}
              >
                <TuneIcon />Filters
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Recently added</MenuItem>
                <MenuItem onClick={handleClose}>Ratings</MenuItem>
                <MenuItem onClick={handleClose}>Review</MenuItem>
              </Menu>
            </div>
          </div>
          <div className={styles.restaurantdatails}>
            {resData?.map((item, id) => (
              <div key={id} className={styles.card}>
                <ResCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </Stack>
    </>
  )
}

export default RestaurantDetails
