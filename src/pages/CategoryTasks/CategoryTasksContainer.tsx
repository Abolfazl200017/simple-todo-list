import { useParams } from "react-router-dom"
import { useTodoState } from "../../redux/hooks"

export const CategoryTasks = () => {
  const { name } = useParams()
  const { todos } = useTodoState()

  const getTodos = () => {
    if(!name || !todos)
      return
    return todos[name].todos
  }

  return <div className="w-full text-center">
    {JSON.stringify(getTodos())}

    {`category ${name} tasks works!`}
  </div>
}