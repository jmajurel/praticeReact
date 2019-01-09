import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HackerNewsApp from './HackerNewsApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HackerNewsApp />, 
    document.getElementById('root')
);

registerServiceWorker();
