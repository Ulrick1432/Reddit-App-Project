//This file is the Root of the app
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals.js';
import store from './app/store.js'; //"store is not a named variable in the file"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/*takes the Redux store as a prop and makes it available to the entire React application through the context API.*/}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
