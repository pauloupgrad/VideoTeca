import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styleGlobal';



ReactDOM.render(
  <React.StrictMode>    
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);