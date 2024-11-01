import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import { DRAWER_WIDTH } from 'config/CONSTANT';
import { Button, styled } from '@mui/material';
import CategorySkeleton from './CategorySkeleton';
import CategoryList from './CategoryList';
import AddDialog from './AddDialog';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


function SidebarView({ theme, todos, open, handleDrawerClose, openDialog, handleDialogClose, isShowDialog}) {

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: `${DRAWER_WIDTH}px`,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader className="flex-items-center w-full" sx={{ justifyContent: 'space-between' }}>
        <span className="mx-3 font-semibold">دسته بندی‌ها</span>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {!todos ? <CategorySkeleton /> : <CategoryList todos={todos} />}
      <Divider />
      <div className="mt-3 px-3">
        <Button onClick={openDialog}>افزودن دسته‌بندی</Button>
      </div>
      <AddDialog open={isShowDialog} handleClose={handleDialogClose} />
    </Drawer>
  );
}

export default SidebarView