import React from 'react';
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';

const SnackbarProvider = ({ children }) => (
  <NotistackSnackbarProvider maxSnack={3} autoHideDuration={3000}>
    {children}
  </NotistackSnackbarProvider>
);

export default SnackbarProvider;