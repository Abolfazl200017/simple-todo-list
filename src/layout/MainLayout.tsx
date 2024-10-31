import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import Main from '@components/Main';

export const drawerWidth = 240;

function MainLayout() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <Main open={open} />
    </Box>
  );
}

export default MainLayout;
