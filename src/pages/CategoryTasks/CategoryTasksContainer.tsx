import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodoState } from '../../redux/hooks';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddTaskDialog from './AddTask';
import { Divider } from '@mui/material';
import TaskList from './TaskList';

export const CategoryTasks = () => {
  const { name } = useParams();
  const { todos } = useTodoState();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const navigate = useNavigate();

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  // const getTodos = () => {
  //   if(!name || !todos)
  //     return
  //   return todos[name].todos
  // }

  if (!name || !todos) return <div>loading</div>;

  if (!todos[name]) navigate('/not-found');

  return (
    <div className="w-full text-start px-16">
      <div className="text-2xl font-bold">{name}</div>

      <TaskList category={name} todos={Object.entries(todos[name].todos)} />

      <Divider sx={{ marginTop: 2 }} />
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="py-3"
        onClick={openDialog}
      >
        <span className={`${isHovered ? 'text-text' : 'text-secondary'} transition-colors ml-2`}>افزودن وظیفه</span>
        {isHovered ? <AddCircleIcon color="primary" /> : <AddIcon color="primary" />}
      </button>
      <AddTaskDialog open={isDialogOpen} handleClose={closeDialog} categoryName={name} />
    </div>
  );
};
