import { useParams } from "react-router-dom"

export const CategoryTasks = () => {
  const { name } = useParams()

  return <div>
    {`category ${name} tasks works!`}
  </div>
}