import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Home from 'pages/home/Home';
import PrivateRoute from './auth/PrivateRoute';
import { HOME, LOGIN } from './CONSTANT';
import { useAppDispatch } from './../redux/hooks';
import { resetUserState } from '../redux/user/userSlices';
import PublicRoute from './auth/PublicRoute';
import { getAccessTokenToLocalStorage } from 'utils/localStorage';
import { registerMe } from '../redux/user/userThunks';

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
          dispatch(resetUserState())
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
