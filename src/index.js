import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link } from "react-router-dom"
import dotenv from "dotenv"
dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <Route>
      <App/>
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);