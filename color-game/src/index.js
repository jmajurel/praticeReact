import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorGameApp from './ColorGameApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ColorGameApp />, document.getElementById('root'));
registerServiceWorker();
