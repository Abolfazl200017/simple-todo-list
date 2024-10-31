import { Card, TextField, Button, Alert } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useUserState, useAppDispatch } from '../../redux/hooks';
import { registerUser } from '../../redux/user/userSlices';
import { useNavigate } from 'react-router-dom';
import { UnknownAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { UserState } from 'redux/user/userSlices';
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

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
    .min(2, 'بسیار کوتاه!')
    .max(50, 'بسیار طولانی!')
    .required('لطفا نام کاربری را وارد کنید'),
  [formNames.PASSWORD]: Yup.string()
    .min(2, 'بسیار کوتاه!')
    .max(50, 'بسیار طولانی!')
    .required('لطفا رمز عبور را وارد کنید'),
});

const onSubmit = (
  values: LoginForm,
  loading: boolean,
  dispatch: ThunkDispatch<{ user: UserState }, undefined, UnknownAction> & Dispatch<UnknownAction>,
) => {
  if (loading) return;
  else dispatch(registerUser({ ...values }));
};

function LinearIndeterminate({ loading }: { loading: boolean }) {
  if (!loading) return <></>;
  return (
    <Box sx={{ width: '100%', position: 'absolute', top: 0, right: 0 }}>
      <LinearProgress />
    </Box>
  );
}

function ShowError({error}) {
   if(!error) return <></>;
   return (
    <Alert severity="error">{JSON.stringify(error)}</Alert>
   )
}

function Login() {
  const { success, loading, error } = useUserState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (success) navigate('/');
  }, [navigate, success]);

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center p-5">
        <Card
          sx={{
            minWidth: 275,
            position: 'relative'
          }}
          className='py-8 px-3 md:px-14 w-[90%] md:w-[500px]'
        >
          <LinearIndeterminate loading={loading} />
          <div className="text-secondary">
            {/* <AccountCircle sx={{ width: 100, height: 100 }} /> */}
            <img src="/images/logo.webp" className="w-24 h-24 rounded-full mx-auto" />
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

                <ShowError error={error} />

                <Button type="submit" variant="contained" disabled={loading} sx={{ fontWeight: 'bold', marginTop: '1rem', minWidth: 100 }}>
                  ورود
                </Button>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </>
  );
}

export default Login;
