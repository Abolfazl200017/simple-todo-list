import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import { HOME, LOGIN } from './CONSTANT';
import { useAppDispatch } from './../redux/hooks';
import { setStateForUnknownToken } from '../redux/user/userSlices';
import PublicRoute from './auth/PublicRoute';
import { getAccessTokenToLocalStorage } from 'utils/localStorage';
import { registerMe } from '../redux/user/userThunks';
import MainLayout from 'layouts/MainLayout';

export const RouterConfig = () => {
  const isSubmitted = React.useRef<boolean>(false)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const token:string | undefined = getAccessTokenToLocalStorage()
    if (!isSubmitted.current) {
        isSubmitted.current = true
        if(token)
          dispatch(registerMe());
        else
          dispatch(setStateForUnknownToken())
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={LOGIN} element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<MainLayout />}>
          <Route path={HOME} element={<div>hello home</div>}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
