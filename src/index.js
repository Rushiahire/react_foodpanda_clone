import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './index.css'
import App from './App';
import './responsive.css'


ReactDom.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);