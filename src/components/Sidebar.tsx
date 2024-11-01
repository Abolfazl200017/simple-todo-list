import * as React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import { DRAWER_WIDTH } from 'config/CONSTANT';
import { useTodoState } from '../redux/hooks';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Skeleton } from '@mui/material';
import { UserTodos } from '../redux/todos/todosSlices';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function CategorySkeleton() {
  return (
    <div className="w-full mt-3 px-2 py-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} variant="rounded" height={40} sx={{ marginBottom: '15px' }} />
      ))}
    </div>
  );
}

function CategoryList({ todos }: { todos: UserTodos }) {
  const customCategories = Object.entries(todos).filter((t) => t[0] !== 'inbox');
  return (
    <>
      <List>
        <RouterLink to="category/inbox">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>{todos['inbox'].config.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        </RouterLink>
      </List>
      {customCategories.length ? (
        <>
          <Divider />
          <List>
            {customCategories.map((cat, index) => (
              <ListItem key={cat[0]} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={cat[1].config.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      ) : null}
    </>
  );
}

function AddDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData).entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>افزودن دسته‌بندی</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="نام دسته‌بندی"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>انصراف</Button>
        <Button type="submit">افزودن</Button>
      </DialogActions>
    </Dialog>
  );
}

function Sidebar({ handleDrawerClose, open }) {
  const theme = useTheme();
  const { todos } = useTodoState();
  const [ showDialog, setShowDialog ] = React.useState(false)

  const handleDialogClose = () => setShowDialog(false)

  React.useEffect(() => {
    if (todos) console.log('todos', todos);
  }, [todos]);

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
        <Button onClick={() => setShowDialog(true)}>افزودن دسته‌بندی</Button>
      </div>
      <AddDialog open={showDialog} handleClose={handleDialogClose} />
    </Drawer>
  );
}

export default Sidebar;
