import * as React from 'react';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useTodoState } from '../../redux/hooks';
import { AddTodo, addTodo } from '../../redux/todos/todosSlices';
import useSnackbar from 'components/Snackbar/useSnackbar';

type Dispatch = (arg0: { payload: AddTodo; type: 'todosSlice/addTodo' }) => void;

const handleSubmit = (
  categoryName: string,
  event: React.FormEvent<HTMLFormElement>,
  dispatch: Dispatch,
  setIsSubmitted: (value: boolean) => void,
) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formJson = Object.fromEntries(formData.entries());
  const title: string = formJson.title.toString();
  const body: string = formJson.body.toString();
  const addPayload:AddTodo = {
    category: categoryName,
    todo: {
      title,
      body
    }
  }
  dispatch(addTodo(addPayload));
  setIsSubmitted(true);
};

function  AddTaskDialog({ open, handleClose, categoryName }) {
  const { error, success, loading } = useTodoState();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const dispatch = useAppDispatch();
  const enqueueSnackbar = useSnackbar();

  const showSuccessMessage = React.useCallback(() => {
    enqueueSnackbar(`دسته‌بندی جدید با موفقیت ایجاد شد.`, { variant: 'success', autoHideDuration: 3000 });
  }, [enqueueSnackbar]);

  const showErrorMessage = React.useCallback(
    (errorMessage: string) => {
      enqueueSnackbar(errorMessage, { variant: 'error', autoHideDuration: 3000 });
    },
    [enqueueSnackbar],
  );

  React.useEffect(() => {
    if (!isSubmitted || loading) return;

    if (success) {
      showSuccessMessage();
      handleClose();
    } else if (error) showErrorMessage(error.toString());

    setIsSubmitted(false);
  }, [error, success, isSubmitted, showSuccessMessage, showErrorMessage, handleClose, loading]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => handleSubmit(categoryName, event, dispatch, setIsSubmitted),
      }}
    >
      <DialogTitle>افزودن وظیفه</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="عنوان"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          name="body"
          id="body"
          label="جزئیات"
          multiline
          rows={4}
          variant="filled"
          fullWidth
          sx={{
            backgroundColor: 'background.paper', // Use the theme background color
            color: 'text.primary', // Use the theme text color
            borderRadius: '4px',
            marginTop: 3,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>انصراف</Button>
        <Button type="submit">افزودن</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddTaskDialog;
