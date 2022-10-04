import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Second from './my-src/Second'
import Login from './my-src/login.js';
import Parrent from './my-src/Parrent.js';
import App from './App'

// import './my-src/Myapp.css';
import reportWebVitals from './reportWebVitals';
// import Style from './project/Style';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Second/> */}
    {/* <Login/> */}
    {/* <Parrent/> */}
       
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
