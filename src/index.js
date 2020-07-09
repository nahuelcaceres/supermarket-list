import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as GroceryProvider} from "./grocery/context";
import {ThemeProvider} from "styled-components";
import theme from "./theme.json";

ReactDOM.render(

  <ThemeProvider theme={theme}>
    <GroceryProvider>
    <App />
  </GroceryProvider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
