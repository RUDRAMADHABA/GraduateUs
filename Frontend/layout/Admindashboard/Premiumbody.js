import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
  Stack,
  Avatar,
  TablePagination,
  Button,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { PieChart, Pie, Cell } from 'recharts';

const UserDataPage = () => {
  // Example user data
  const allUserData = [
    { username: 'Soham Samantaray', email: 'john@example.com', phone: '1234567890', status: 'premium' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'basic' },
    { username: 'Soham Samantaray', email: 'john@example.com', phone: '1234567890', status: 'premium' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'basic' },
    { username: 'Soham Samantaray', email: 'john@example.com', phone: '1234567890', status: 'standard' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'basic' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'basic' },
    // Add more example data here...
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [filter, setFilter] = useState('all');
  const [userData, setUserData] = useState(allUserData);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'all') {
      setUserData(allUserData);
    } else {
      const filteredData = allUserData.filter((user) => user.status === selectedFilter);
      setUserData(filteredData);
    }

    setPage(0); // Reset the current page when changing filters
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'premium':
        return '#FCBB3CAD'; // Green color
      case 'standard':
        return '#23D37F'; // Orange color
      case 'basic':
        return '#098FEF'; // Blue color
      default:
        return '#098FEF'; // Black color as fallback
    }
  };
  const getStatusTColor = (status) => {
    switch (status) {
      case 'premium':
        return '#FCA600'; // Green color
      case 'standard':
        return '#1BAA66'; // Orange color
      case 'basic':
        return '#066BB4'; // Blue color
      default:
        return '#066BB4'; // Black color as fallback
    }
  };

  // Data for pie chart
  const statusData = [
    { name: 'Basic', value: 30 },
    { name: 'Standard', value: 50 },
    { name: 'Premium', value: 20 },
  ];

  // Colors for pie chart
  const statusColors = ['#098FEF', '#23D37F', '#FCBB3CAD'];

  return (
    <Stack marginTop={{ xs: '70px', md: '80px' }} marginLeft={{ xs: '10px', md: '240px' }} padding="30px ">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography fontSize={{ xs: '24px', md: '28px', lg: '32px' }} fontWeight="600" fontFamily="Montserrat">
          Premium Users
        </Typography>
        <Select value={filter} onChange={handleFilterChange}>
          <MenuItem value="all" sx={{ fontFamily: 'Montserrat' }}>
            All
          </MenuItem>
          <MenuItem value="basic" sx={{ fontFamily: 'Montserrat' }}>
            Basic
          </MenuItem>
          <MenuItem value="standard" sx={{ fontFamily: 'Montserrat' }}>
            Standard
          </MenuItem>
          <MenuItem value="premium" sx={{ fontFamily: 'Montserrat' }}>
            Premium
          </MenuItem>
        </Select>
      </div>
      <Stack direction={{ xs: "column", xl: "row" }} gap="15px" alignItems={{ xs: "center", xl: "flex-start" }}>
        <TableContainer component={Paper} sx={{ width: { xs: "100%", xl: '75%' }, background: 'transparent', boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#5F5F5F', fontWeight: '500', fontSize: '20px', fontFamily: 'Montserrat' }}>
                  Username
                </TableCell>
                <TableCell sx={{ color: '#5F5F5F', fontWeight: '500', fontSize: '20px', fontFamily: 'Montserrat' }}>
                  Email
                </TableCell>
                <TableCell sx={{ color: '#5F5F5F', fontWeight: '500', fontSize: '20px', fontFamily: 'Montserrat' }}>
                  Phone Number
                </TableCell>
                <TableCell sx={{ color: '#5F5F5F', fontWeight: '500', fontSize: '20px', fontFamily: 'Montserrat' }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '10px',
                      alignItems: 'center',
                      fontWeight: '500',
                      fontSize: { sm: '16px', xs: '15px' },
                      fontFamily: 'Montserrat',
                    }}
                  >
                    <Avatar alt={user.username} src={user.imageSrc} />
                    {user.username}
                  </TableCell>
                  <TableCell sx={{ fontWeight: '500', fontSize: { sm: '16px', xs: '15px' }, fontFamily: 'Montserrat' }}>
                    {user.email}
                  </TableCell>
                  <TableCell sx={{ fontWeight: '500', fontSize: { sm: '16px', xs: '15px' }, fontFamily: 'Montserrat' }}>
                    {user.phone}
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: getStatusColor(user.status),
                        borderRadius: '14px',
                        textTransform: 'none',
                        padding: '8px 17px',
                        color: getStatusTColor(user.status),
                        '&:hover': {
                          background: getStatusColor(user.status),
                        },
                      }}
                    >
                      Premium
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack sx={{
          borderRadius: "10px",
          background: "var(--light-version-neutral, #FFF)", padding: "15px", height: "max-content", width: "fit-content"
        }} >
          <Typography fontWeight="500" fontFamily="Montserrat">Premium  Status</Typography>
          <PieChart width={410} height={220}>
            <Pie
              data={statusData}
              cx={202}
              cy={110}
              innerRadius={50}
              outerRadius={70}
              fill="#8884d8"
              label={(entry) => `${entry.name} ${entry.value}%`}
            >
              {statusData.map((entry, index) => (
                <Cell key={entry.name} fill={statusColors[index % statusColors.length]} />
              ))}
            </Pie>
          </PieChart>
          <Stack direction="column" justifyContent="center" width="100%" alignItems="center" gap="10px">
            <Typography fontFamily="Montserrat" fontWeight="500" sx={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "150px" }}><PersonIcon sx={{ color: "#098FEF" }} /> ₹ 99 <span style={{ fontSize: "14px" }}>/1Month</span></Typography>
            <Typography fontFamily="Montserrat" fontWeight="500" sx={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "150px" }}><StarIcon sx={{ color: "#23D37F" }} /> ₹199 <span style={{ fontSize: "14px" }}>/3Month</span></Typography>
            <Typography fontFamily="Montserrat" fontWeight="500" sx={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "150px" }}><MilitaryTechIcon sx={{ color: "#FCBB3C" }} /> ₹499 <span style={{ fontSize: "14px" }}>/6Month</span> </Typography>
          </Stack>
        </Stack>
      </Stack>
      <TablePagination
        component="div"
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[]}
        nextIconButtonProps={{
          disabled: page >= Math.ceil(userData.length / rowsPerPage) - 1,
        }}
        backIconButtonProps={{
          disabled: page === 0,
        }}
        nextIconButtonText="Next Page"
        backIconButtonText="Previous Page"
        nextIcon={<KeyboardArrowRight />}
        backIcon={<KeyboardArrowLeft />}
      />

    </Stack>
  );
};

export default UserDataPage;
