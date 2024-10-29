import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Home from '../pages/home/Home';
import PrivateRoute from './auth/PrivateRoute';
import { HOME, LOGIN } from './CONSTANT';
import { useAppDispatch } from './../redux/hooks';
import { registerUser } from './../redux/slices/userSlice';
import * as React from 'react';
import PublicRoute from './auth/publicRoute';

export const RouterConfig = () => {
  const isSubmitted = React.useRef<boolean>(false)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!isSubmitted.current) {
        isSubmitted.current = true
        dispatch(registerUser({ password: 'emilyspasss', username: 'emilys' }));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={LOGIN} element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={HOME} element={<Home />} />
      </Route>
    </Routes>
  );
};
