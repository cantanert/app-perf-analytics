import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {GlobalContextProvider} from "./context/GlobalContext";

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById('root')
);

