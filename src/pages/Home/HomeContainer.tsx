import { drawerWidth } from "layouts/MainLayout"
import { todoListHome } from "../../assets/image"

export const HomeContainer = () => {

  return (
    <div className="h-full flex flex-col items-center justify-center"  style={{ paddingRight: drawerWidth}}>
      <div className="w-3/4">
        <img src={todoListHome} alt="todo-list" className="w-full" />
      </div>
    </div>
  )
}