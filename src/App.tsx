import './App.css'

//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <>
      <div>
        <Provider store={store}>
          <div>
            App
          </div>
        </Provider>
      </div>
    </>
  )
}

export default App
