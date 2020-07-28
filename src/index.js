import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Landing from './components/Landing/index';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Landing />
  </BrowserRouter>,
  document.getElementById('root')
);

