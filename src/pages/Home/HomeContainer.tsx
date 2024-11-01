import { todoListHome } from "../../assets/image"

export const HomeContainer = () => {

  return (
    <div className="my-auto flex flex-col items-center justify-center">
      <div className="w-3/4">
        <img src={todoListHome} alt="todo-list" className="w-full" />
      </div>
    </div>
  )
}