import { Avatar, Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography ,TableContainer , TablePagination } from "@mui/material";
// import faizan from '/pictures/faizan.jpg'
import Image from "next/image";
import { useState } from "react";
const Recent = () => {

const recentdata = [
    {photo:faizan , name:"Faizan Akram" , email:"faizanrock753@gmail.com" , phone:"123456789" , design:"Premium" },
    {photo:faizan , name:"Faizan Akram" , email:"faizanrock753@gmail.com" , phone:"123456789" , design:"General"},
    {photo:faizan , name:"Faizan Akram" , email:"faizanrock753@gmail.com" , phone:"123456789" , design:"Premium" },
    {photo:faizan , name:"Faizan Akram" , email:"faizanrock753@gmail.com" , phone:"123456789" , design:"Premium" },
    {photo:faizan , name:"Faizan Akram" , email:"faizanrock753@gmail.com" , phone:"123456789" , design:"General"},
]

const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};
console.log(setRowsPerPage)


    return ( 
        <>
        <Box sx={{width:"100%"  , background:"#fff" , height:"100%" , display:"flex" , flexDirection:"column" , padding:"1em 1em" , gap:"1.2em" , borderRadius:"7px"}}>
       <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
        <Typography className="fonti" sx={{fontSize:{sm:"19px" , xs:"16px"} , fontWeight:"700"}}>Recent Users</Typography>
        <Button sx={{textTransform:"none" , fontSize:{sm:"17px" , xs:"15px"}}}>View all&gt;</Button>
        </Box>
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table  stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell className="fonti" sx={{fontWeight:"700" , fontSize:{sm:"17px" , xs:"15px"} , color:"#5F5F5F",border:"none"}} >Username</TableCell>
                    <TableCell className="fonti" sx={{fontWeight:"700" , fontSize:{sm:"17px" , xs:"15px"} , color:"#5F5F5F",border:"none"}}>Email</TableCell>
                    <TableCell className="fonti" sx={{fontWeight:"700" , fontSize:{sm:"17px" , xs:"15px"} , color:"#5F5F5F" ,border:"none", whiteSpace:"nowrap"}}>Phone Number</TableCell>
                    <TableCell className="fonti" sx={{fontWeight:"700" , fontSize:{sm:"17px" , xs:"15px"} , color:"#5F5F5F",border:"none"}}>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
          {
            recentdata.map((dta)=>(
                <TableRow>
                <TableCell className="fonti"  sx={{display:"flex" , alignItems:"center" , gap:"0.5em" , fontWeight:"700" , whiteSpace:"nowrap"}}>
                    <Avatar>
                        <Image src={dta.photo} width={50}/>
                    </Avatar>
                    {dta.name}
                </TableCell>
                <TableCell className="fonti"  sx={{fontWeight:"700"}}>{dta.email}</TableCell>
                <TableCell className="fonti"  sx={{fontWeight:"700"}}>{dta.phone}</TableCell>
                <TableCell className="fonti" sx={{fontWeight:"700"}}> <Button variant="contained" sx={{background: dta.design === 'Premium' ? 'rgba(252, 187, 60, 0.68) !important ' : 'rgba(79, 169, 232, 0.69) !important ' , borderRadius:"15px" , color:dta.design === 'Premium' ? "#FCA600" : "#0096FF" , textTransform:"none"}}>{dta.design}</Button></TableCell>
              </TableRow>
            ))
          }
            </TableBody>
        </Table>
        </TableContainer>
        <TablePagination
  component="div"
  count={recentdata.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPageOptions={[]}
/>
        </Box>
        </Box>
        </>
     );
}
 
export default Recent;