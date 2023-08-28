import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import TryIcon from '@mui/icons-material/Try';
const PremiumFeature = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000', // Change the primary color
            },
        },
        typography: {
            allVariants: {
                fontFamily: 'Montserrat',
            }
        },
    });

    return (

        <>
            <ThemeProvider theme={theme}>
                <Stack marginTop={{ sm: "105px", md: "125px" }} marginLeft={{ sm: "106px", md: "303px" }} justifyContent="center"  gap="20px" >
                    <Stack justifyContent="center" alignItems="center"  gap="20px">
                        <Typography sx={{ color: "#FF9900", fontSize: "40px" }}>
                            Subscription Plans
                        </Typography>
                        <Typography sx={{ color: props.letter, fontSize: "20px", opacity: "0.81", maxWidth: "350px", textAlign: "center" }}>
                            Choose a plan which is suitable
                            for you
                        </Typography>
                    </Stack>
                    <Stack flexDirection={{xs:"column",lg:"row"}} gap="15px" justifyContent="center" alignItems="center" padding="0px 20px">
                        <Stack sx={{
                            padding: "25px 30px", background: "#23D37F",
                            boxShadow: " 3px 3px 10px rgba(0, 0, 0, 0.25)",
                            borderRadius: "10px", width: "350px", justifyContent: "center", alignItems: "center", gap: "10px",marginTop:{xs:"0px",lg:"30px"}
                        }}>
                           <Stack direction="row" width="87%" padding="10px" justifyContent="space-between" alignItems="center">
                            <StarIcon sx={{ color: "#fff",transform:"Scale(3)",minWidth:"100px"}} />
                                <Typography sx={{color:"#fff"}}><span style={{fontSize:"20px"}}>₹</span> <span style={{fontSize:"35px"}}>199</span> <span style={{fontSize:"20px"}}>/3 Months</span></Typography>
                            </Stack>
                            <Typography sx={{ textAlign: "left", color: "#fff" }}><li>Elevate your resume with professional review</li>
                                <li>Access top-tier opportunities with referrals from interns at MNC's</li>
                                <li>  One on one live chat with top interns</li>
                                <li>Enjoy a complimentary 1 month trial</li>
                            </Typography>
                            <Button sx={{
                                background: "#2E3232",
                                borderRadius: "10px", color: "#fff", width: "60%"
                            }}><AutoAwesomeIcon sx={{ width: "15px", right: "5px", bottom: "2px", position: "relative" }} />Upgrade Plan</Button>
                        </Stack>
                        <Stack sx={{
                            padding: "25px 30px", background: "#FCBB3C",
                            boxShadow: " 3px 3px 10px rgba(0, 0, 0, 0.25)",
                            borderRadius: "10px", width: "350px", justifyContent: "center", alignItems: "center", gap: "10px",marginBottom:{xs:"0px",lg:"60px"}
                        }}>
                             <Stack direction="row" width="90%" padding="10px" justifyContent="space-between" alignItems="center">
                            <TryIcon sx={{ color: "#fff",transform:"Scale(2.8)",minWidth:"100px"}} />
                                <Typography sx={{color:"#fff"}}><span style={{fontSize:"20px"}}>₹</span> <span style={{fontSize:"35px"}}>499</span> <span style={{fontSize:"20px"}}>/6 Months</span></Typography>
                            </Stack>
                            <Typography sx={{ textAlign: "left", color: "#fff" }}><li>Elevate your resume with professional review</li>
                                <li>Access top-tier opportunities with referrals from interns at MNC's</li>
                                <li>  One on one live chat with top interns</li>
                                <li>Enjoy a complimentary 1 month trial</li>
                            </Typography>
                            <Button sx={{
                                background: "#2E3232",
                                borderRadius: "10px", color: "#fff", width: "60%"
                            }}><AutoAwesomeIcon sx={{ width: "15px", right: "5px", bottom: "2px", position: "relative" }} />Upgrade Plan</Button>
                        </Stack>
                        <Stack sx={{
                            padding: "25px 30px", background: "#098FEF",
                            boxShadow: " 3px 3px 10px rgba(0, 0, 0, 0.25)",
                            borderRadius: "10px", width: "350px", justifyContent: "center", alignItems: "center", gap: "10px",marginTop:{xs:"0px",lg:"30px"}
                        }}>
                            <Stack direction="row" width="80%" padding="10px" justifyContent="space-between" alignItems="center">
                                <PersonIcon sx={{ color: "#fff",transform:"Scale(3)",minWidth:"100px"}} />
                                <Typography sx={{color:"#fff"}}><span style={{fontSize:"20px"}}>₹</span> <span style={{fontSize:"35px"}}>99</span> <span style={{fontSize:"20px"}}>/1 Month</span></Typography>
                            </Stack>
                            <Typography sx={{ textAlign: "left", color: "#fff" }}><li>Elevate your resume with professional review</li>
                                <li>Access top-tier opportunities with referrals from interns at MNC's</li>
                                <li>  One on one live chat with top interns</li>
                                <li>Enjoy a complimentary 1 month trial</li>
                            </Typography>
                            <Button sx={{
                                background: "#2E3232",
                                borderRadius: "10px", color: "#fff", width: "60%"
                            }}><AutoAwesomeIcon sx={{ width: "15px", right: "5px", bottom: "2px", position: "relative" }} />Upgrade Plan</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </>
    );
}

export default PremiumFeature;