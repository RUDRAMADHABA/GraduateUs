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

const UserDetailsbody = () => {
  // Example user data
  const allUserData = [
    { username: 'Soham Samantaray', email: 'john@example.com', phone: '1234567890', status: 'premium' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'general' },
    { username: 'Soham Samantaray', email: 'john@example.com', phone: '1234567890', status: 'general' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'premium' },
    { username: 'Soham Samantaray', email: 'john@example.com', phone: '1234567890', status: 'general' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'general' },
    { username: 'Soham Samantaray', email: 'jane@example.com', phone: '0987654321', status: 'premium' },
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
      case 'general':
        return '#098FEF'; // Blue color
      default:
        return '#098FEF'; // Black color as fallback
    }
  };
  const getStatusTColor = (status) => {
    switch (status) {
      case 'premium':
        return '#FCA600'; // Green color
      case 'general':
        return '#066BB4'; // Blue color
      default:
        return '#066BB4'; // Black color as fallback
    }
  };

  return (
    <Stack marginTop={{ xs: '70px', md: '80px' }} marginLeft={{ xs: '10px', md: '240px' }} padding="30px ">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography fontSize={{ xs: '24px', md: '28px', lg: '32px' }} fontWeight="600" fontFamily="Montserrat">
          User Details
        </Typography>
        <Select value={filter} onChange={handleFilterChange}>
          <MenuItem value="all" sx={{ fontFamily: 'Montserrat' }}>
            All
          </MenuItem>
          <MenuItem value="general" sx={{ fontFamily: 'Montserrat' }}>
            General
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
                        textTransform: 'capitalize',
                        padding: '8px 17px',
                        minWidth: "100px",
                        color: getStatusTColor(user.status),
                        '&:hover': {
                          background: getStatusColor(user.status),
                        },
                      }}
                    >
                      {user.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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

export default UserDetailsbody;
