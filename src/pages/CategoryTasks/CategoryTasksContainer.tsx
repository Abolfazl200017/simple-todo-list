import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodoState } from '../../redux/hooks';
import CategoryTasksView from './CategoryTasksView';


export const CategoryTasks = () => {
  const { name } = useParams();
  const { todos } = useTodoState();
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

  return <CategoryTasksView name={name} todos={todos} isDialogOpen={isDialogOpen} openDialog={openDialog} closeDialog={closeDialog} />;
};
