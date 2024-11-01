import './App.css';

//mui & mui theme
import CssBaseline from '@mui/material/CssBaseline';
import AppProviders from './contexts/AppProvider';

import { RouterConfig } from 'navigation/RouterConfig';


function App() {
  return (
    <>
      <div className="bg-darkBG text-white">
        <AppProviders>
          <CssBaseline />
          <RouterConfig />
        </AppProviders>
      </div>
    </>
  );
}

export default App;
