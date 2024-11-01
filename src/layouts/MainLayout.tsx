import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import { useAppDispatch, useUserState } from '../redux/hooks';
import { initState } from '../redux/todos/todosSlices';

export const drawerWidth = 240;

function MainLayout() {
  const [open, setOpen] = React.useState(true);
  const { userData } = useUserState()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(initState({id: userData.id}))
  }, [dispatch, userData.id])

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
