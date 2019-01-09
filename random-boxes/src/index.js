import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorBoxApp from './ColorBoxApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ColorBoxApp />, document.getElementById('root'));
registerServiceWorker();
