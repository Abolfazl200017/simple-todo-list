import { useUserState } from '../../redux/hooks';
import { WEBSITE_TITLE } from 'config/CONSTANT';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from './Home';
import { IconButton, styled, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  
function Header({ handleDrawerOpen, open }) {
  const { userData } = useUserState();


  return (
    <AppBar position="fixed" open={open}>
      <Toolbar className="flex-items-center">
        <div className="flex-items-center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <div className="h-16 py-2 ml-3">
            <img src="/images/logo.webp" className="h-full aspect-square" />
          </div>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
            {WEBSITE_TITLE}
          </Typography>
        </div>
        <div className="flex-items-center">
          <span>logout</span>
          <div className="h-16 py-3 mr-2">
            <img className="h-full aspect-square rounded-full overflow-hidden" src={userData?.image} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;