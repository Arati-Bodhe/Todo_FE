import React from 'react';
import MainNav from './src/navigation/Main';
import { Provider } from 'react-redux';
import store from './src/redux/Store';

function App() {
  return (
    <Provider store={store}>
   <MainNav />
    </Provider>
  );
}


export default App;
