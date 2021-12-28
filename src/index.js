import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route path="/" exact component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);