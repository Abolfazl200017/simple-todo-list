import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function ShowTaskDialog({ open, handleOpen, handleClose, title, body }) {
  return (
    <>
      <button onClick={handleOpen} className="mr-3 hover:text-text transition-colors">
        {title}
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { minWidth: '300px' }, // Set the minimum width here
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{body}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>بستن</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ShowTaskDialog;
