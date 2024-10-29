import './App.css'

//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

//mui & mui theme
// import { ThemeProvider } from "@mui/material";
// import { dark } from './styles/muiTheme'

import { RouterConfig } from './navigation/RouterConfig';

// function UserData() {
//   const dispatch = useAppDispatch()
//   const userData = useAppSelector((state) => JSON.stringify(state.user))
  
//   React.useEffect(() => {
//     dispatch(registerUser({username: 'emilys', password: 'emilyspass'}))
//   },[dispatch])

//   return <div>
//     {userData}
//   </div>
// }

function App() {

  return (
    <>
      <div>
        <Provider store={store}>
          <RouterConfig />
        </Provider>
      </div>
    </>
  )
}

export default App
