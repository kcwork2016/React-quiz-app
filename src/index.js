import React from 'react';
import ReactDOM from 'react-dom';
import './services/junk/index.css';
import App from './services/junk/App';
import registerServiceWorker from './services/junk/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
