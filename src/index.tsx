import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={legacy_createStore(rootReducer)}>

    <App />
    </Provider>
  </React.StrictMode>
);
