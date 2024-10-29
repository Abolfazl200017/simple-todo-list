import * as React from "react";

import './App.css'

//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { registerUser } from './redux/slices/userSlice';

//mui & mui theme
import { ThemeProvider } from "@mui/material";
import { dark } from './styles/muiTheme'

import FullPageLoadingSpinner from "./components/FullPageLoadingSpinner";

function UserData() {
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => JSON.stringify(state.user))
  
  React.useEffect(() => {
    dispatch(registerUser({username: 'emilys', password: 'emilyspass'}))
  },[dispatch])

  return <div>
    {userData}
  </div>
}

function App() {

  return (
    <>
      <div>
        <Provider store={store}>
          <FullPageLoadingSpinner />
        </Provider>
      </div>
    </>
  )
}

export default App
