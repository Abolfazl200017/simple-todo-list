import './App.css';

//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

//mui & mui theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';

import { RouterConfig } from './navigation/RouterConfig';


const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Shabnam'
    ].join(',')
  }
})

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-darkBG text-white">
        <Provider store={store}>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <RouterConfig />
            </ThemeProvider>
          </CacheProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
