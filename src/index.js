//require('bootstrap/dist/css/bootstrap.min.css');
//import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(
    <App />,
    document.getElementById('app')
);