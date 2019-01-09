import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountryGame from './CountryGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <CountryGame />, 
    document.getElementById('root')
);
registerServiceWorker();
