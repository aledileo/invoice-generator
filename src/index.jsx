import 'core-js/stable';
import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductContextProvider } from "./contexts/ProductContext";
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ProductContextProvider>
    <CssBaseline />
    <App />
  </ProductContextProvider>
, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') module.hot.accept();
