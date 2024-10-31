import { DRAWER_WIDTH } from 'config/CONSTANT';
import { DrawerHeader } from './Sidebar';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

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
    <MUIMain open={open}>
        <DrawerHeader />
        <Outlet />
    </MUIMain>
  )
}

export default Main