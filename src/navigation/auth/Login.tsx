import { AccountCircle } from '@mui/icons-material';
import { Card, TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useUserState, useAppDispatch } from '../../redux/hooks';
import { registerUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { UnknownAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { UserState } from 'redux/slices/userSlice';
import * as React from 'react';

export type LoginForm = {
  username: string;
  password: string;
};

const formNames = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

const initalValue = {
  [formNames.USERNAME]: '',
  [formNames.PASSWORD]: '',
};

const LoginSchema = Yup.object().shape({
  [formNames.USERNAME]: Yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .required('Please enter username'),
  [formNames.PASSWORD]: Yup.string()
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!')
    .required('Please enter password'),
});

const onSubmit = (
  values: LoginForm,
  loading: boolean,
  dispatch: ThunkDispatch<{ user: UserState }, undefined, UnknownAction> & Dispatch<UnknownAction>,
) => {
  if (loading) return;
  else dispatch(registerUser({ ...values }));
};

function Login() {
  const { success, loading } = useUserState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  
  setInterval(() => {
    console.log(loading, 'pff');
  }, 3000);

  React.useEffect(() => {
    if (success) navigate('/');
  }, [navigate, success]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-5">
      <Card
        sx={{
          minWidth: 275,
          padding: '2rem',
        }}
      >
        <div className="text-secondary">
          <AccountCircle sx={{ width: 100, height: 100 }} />
        </div>
        <Formik
          initialValues={initalValue}
          validationSchema={LoginSchema}
          onSubmit={(values: LoginForm) => onSubmit(values, loading, dispatch)}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                id="username"
                label="نام کاربری"
                variant="outlined"
                sx={{ marginTop: '2rem', width: '100%', height: 79, direction: 'ltr' }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[formNames.USERNAME]}
                error={touched[formNames.USERNAME] && Boolean(errors[formNames.USERNAME])}
                helperText={touched[formNames.USERNAME] ? errors[formNames.USERNAME] : ''}
              />
              <TextField
                id="password"
                label="رمز عبور"
                variant="outlined"
                type="password"
                sx={{ marginTop: '2rem', width: '100%', height: 79, direction: 'ltr' }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[formNames.PASSWORD]}
                error={touched[formNames.PASSWORD] && Boolean(errors[formNames.PASSWORD])}
                helperText={touched[formNames.PASSWORD] ? errors[formNames.PASSWORD] : ''}
              />

              <input className="w-0 h-0 overflow-hidden" type="submit" />
              <Button type="submit" variant="contained" sx={{ fontWeight: 'bold', marginTop: '2rem', minWidth: 100 }}>
                ورود
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default Login;
