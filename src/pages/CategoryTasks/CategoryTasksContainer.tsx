import * as React from "react";
import { useParams } from "react-router-dom"
import { useTodoState } from "../../redux/hooks"
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const CategoryTasks = () => {
  const { name } = useParams()
  const { todos } = useTodoState()
  const [ isHovered, setIsHovered ] = React.useState(false)

  const getTodos = () => {
    if(!name || !todos)
      return
    return todos[name].todos
  }

  return <div className="w-full text-start px-16">
    <div className="text-2xl font-bold">
      {name}
    </div>

    <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)} className="py-3 my-1">
      <span className={`${isHovered ? 'text-text' : 'text-secondary'} transition-colors ml-2`}>
        افزودن وظیفه
      </span>
      {isHovered ? <AddCircleIcon color="primary" /> : <AddIcon color="primary" /> }
    </button>
  </div>
}