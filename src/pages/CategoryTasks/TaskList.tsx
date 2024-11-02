import * as React from "react";
import { Divider } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ShowTaskDialog from "./ShowTask";

function TaskList({ todos }) {
  const [open, setOpen ] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      {todos.map(([id, todo]) => {
        return (
          <div key={id}>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <div className="flex items-center transition-colors hover:bg-slate-900 bg-opacity-30 py-3 px-1">
              <button>
                {!todo.isDone ? <CircleOutlinedIcon /> : <CheckCircleOutlineOutlinedIcon />}
              </button>
              <button onClick={handleOpen} className='mr-3 hover:text-text transition-colors'>{todo.title}</button>
            </div>
            <ShowTaskDialog open={open} handleClose={handleClose} title={todo.title} body={todo.body} />
          </div>
        );
      })}
    </>
  )
}

export default TaskList