import * as React from "react";
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useTodoState } from '../../redux/hooks';
import { addCategory } from '../../redux/todos/todosSlices';
import useSnackbar from "components/Snackbar/useSnackbar";

type Dispatch = (arg0: { payload: { name: string; }; type: "todosSlice/addCategory"; }) => void

const handleSubmit = (event: React.FormEvent<HTMLFormElement>, dispatch: Dispatch, setIsSubmitted: (value: boolean) => void) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formJson = Object.fromEntries((formData).entries());
  const name:string = formJson.name.toString()
  dispatch(addCategory({ name }))
  setIsSubmitted(true)
}

function AddDialog({ open, handleClose }) {
  const { error, success, loading } = useTodoState()
  const [ isSubmitted, setIsSubmitted ] = React.useState(false)
  const dispatch = useAppDispatch()
  const enqueueSnackbar = useSnackbar();

  const showSuccessMessage = React.useCallback(() => {
    enqueueSnackbar(`دسته‌بندی جدید با موفقیت ایجاد شد.`, { variant: 'success', autoHideDuration: 3000 });
  }, [enqueueSnackbar]);

  const showErrorMessage = React.useCallback((errorMessage: string) => {
    enqueueSnackbar(errorMessage, { variant: 'error', autoHideDuration: 3000 });
  }, [enqueueSnackbar]);

  React.useEffect(() => {
    if(!isSubmitted || loading)
      return

    if(success){
      showSuccessMessage()
      handleClose()
    } else if (error)
      showErrorMessage(error.toString())

    setIsSubmitted(false)
  }, [error, success, isSubmitted, showSuccessMessage, showErrorMessage, handleClose, loading])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => handleSubmit(event, dispatch, setIsSubmitted),
      }}
    >
      <DialogTitle>افزودن دسته‌بندی</DialogTitle>
      <DialogContent>
        <DialogContentText>
          برای ایجاد دسته‌بندی یک نام غیرتکراری وارد نمایید
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

export default AddDialog;