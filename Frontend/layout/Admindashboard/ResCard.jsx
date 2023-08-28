import Image from "next/image";
import d1 from '/pictures/rect_res.png';
import styles from '../../styles/res.module.css';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ResCard = ({ data }) => {
  return (
    <>
      <div className={styles.restaurantCard} >
        <div className={styles.cardimg}>
          <Image src={d1} alt="resimg" />
        </div>
        <div className={styles.cardtxt}>
          <div className={styles.cardtxtup}>
            <div className={styles.resname}>{data.name}</div>
            <div className={styles.resloc}><PlaceOutlinedIcon />{data.distance}</div>
          </div>
          <div className={styles.cardtxtdown}>
            <div className="resstars">
              <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
              </Stack>
            </div>
            <div className="trev">Total Reviews: 20</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResCard
