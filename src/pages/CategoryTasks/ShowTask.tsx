import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"


function ShowTaskDialog({ open, handleClose, title, body}) {
  
  return <Dialog
  open={open}
  onClose={handleClose}
>
  <DialogTitle>{title}</DialogTitle>
  <DialogContent>
    {body}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>بستن</Button>
  </DialogActions>
</Dialog>
}

export default ShowTaskDialog