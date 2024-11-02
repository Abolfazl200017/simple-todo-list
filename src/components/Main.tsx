import { DRAWER_WIDTH } from 'config/CONSTANT';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { DrawerHeader } from './Sidebar/SidebarView';
import { drawerWidth } from 'layouts/MainLayout';

const MUIMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

function Main({ open }) {

  return (
    <MUIMain open={open} className='min-h-screen' style={{ paddingRight: drawerWidth+24 }}>
        <DrawerHeader />
        <Outlet />
    </MUIMain>
  )
}

export default Main