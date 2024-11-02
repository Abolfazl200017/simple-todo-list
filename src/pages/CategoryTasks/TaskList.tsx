import * as React from "react";
import { Divider } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ShowTaskDialog from "./ShowTask";
import { useAppDispatch } from "../../redux/hooks";
import { doneTodo } from "../../redux/todos/todosSlices";

function TaskList({ category, todos }) {
  const [open, setOpen ] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const dispatch = useAppDispatch()
  const setDoneTodo = (id:string) => dispatch(doneTodo({category, id}))

  return (
    <>
      {todos.map(([id, todo]) => {
        return (
          <div key={id} className={todo.isDone ? 'text-secondary hover:text-secondary' : ''}>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <div className="flex items-center transition-colors hover:bg-slate-900 bg-opacity-30 py-3 px-1">
              <button onClick={() => setDoneTodo(id)}>
                {!todo.isDone ? <CircleOutlinedIcon /> : <CheckCircleOutlineOutlinedIcon />}
              </button>
              <ShowTaskDialog open={open} handleOpen={handleOpen} handleClose={handleClose} title={todo.title} body={todo.body} />
            </div>
          </div>
        );
      })}
    </>
  )
}

export default TaskList