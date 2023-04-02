import  styles from  '/styles/Part2.module.css'
import { padding, Stack } from '@mui/system';
import Image from 'next/image';
import resumereview from '/pictures/Resumereview.png'
import referralprog from '/pictures/referralprog.png'
import chatopt from '/pictures/chatopt.png'
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
const PremiumFeature = () => {
    return ( 
        <>
            <Stack marginTop={{sm:"105px",md:"125px"}} marginLeft={{sm:"106px",md:"303px"}} justifyContent="center" paddingBottom="20px" >
             
             <div style={{display:"flex" , justifyContent:"center" ,  alignItems:"center"}}>
                <h1 style={{color:"#FF9900" }}>Premium Features</h1>
             </div>
                <div style={{display:"flex" , flexWrap:"wrap" , alignItems:"center" , justifyContent:"center" , gap:"50px" ,marginTop:"1em" , marginRight:"2em" , color:"white"}}>
                <div style={{width: "500px" , height: "350px" , background: "#252727" , borderRadius:"28px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" ,  padding:"1em 1em"}}>
                      <h3 style={{display:"flex" , alignItems:"center" , justifyContent:"center" , gap:"10px"}}> <DescriptionIcon sx={{color:"#098FEF" , transform:"Scale(1.5)"}}/> Resume Review</h3>
                      <div style={{minHeight:"80px" , margin:"1em 0" }}>
<Image src={resumereview} width="340px" height="202px" />
</div>
                   <a href="/subscription"> <button style={{ border:"none" , padding: "10px 46px" , background:"#3D4040" , borderRadius:"10px" , color:"white" , fontWeight:"600"}}  className={styles.hover1}>Explore</button></a> 
                    </div>
                    <div style={{width: "500px" , height: "350px" , background: "#252727" , borderRadius:"28px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" ,  padding:"1em 1em"}}>
                    <h3 style={{display:"flex" , alignItems:"center" , justifyContent:"center" , gap:"10px"}}> <ShareIcon sx={{color:"#23D37f" , transform:"Scale(1.5)"}}/> Referral Program</h3>
                      <div style={{minHeight:"80px",position:"relative" , bottom:"0.7em" }}>
<Image src={referralprog}  />
</div>
                   <a href="/subscription"> <button style={{ border:"none" , padding: "10px 46px" , background:"#3D4040" , borderRadius:"10px" , color:"white" , fontWeight:"600"}}  className={styles.hover1}>Explore</button></a> 
                    </div>
                    <div style={{width: "500px" , height: "350px" , background: "#252727" , borderRadius:"28px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" ,  padding:"1em 1em"}}>
                    <h3 style={{display:"flex" , alignItems:"center" , justifyContent:"center" , gap:"10px"}}> <ChatIcon sx={{color:"#fcbb3c" , transform:"Scale(1.5)"}}/> Chat Option</h3>
                      <div style={{minHeight:"80px" , position:"relative" , bottom:"1em" }}>
<Image src={chatopt} width="100%" height="100%" />
</div>
                  <a href="/subscription"> <button style={{ border:"none" , padding: "10px 46px" , background:"#3D4040" , borderRadius:"10px" , color:"white" , fontWeight:"600"}}  className={styles.hover1}>Explore</button></a> 
                    </div>
                </div>
            </Stack>
        </>
     );
}
 
export default PremiumFeature;