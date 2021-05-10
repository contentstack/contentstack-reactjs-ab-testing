import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import './static/bootstrap-3.3.6-dist/css/bootstrap.css'
import './static/bootstrap-3.3.6-dist/css/bootstrap.min.css'
import './static/css/font-awesome.css'
import './static/css/icon-fonts.css'
import './static/css/normalize.css'
import './static/css/style.css'
import './static/css/style1.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();

