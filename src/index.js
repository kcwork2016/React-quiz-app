import React from 'react';
import ReactDOM from 'react-dom';
import './services/junk/index.css';
//import App from './services/junk/App';
import QuizContainer  from '../src/containers/QuizContainer';
import registerServiceWorker from './services/junk/registerServiceWorker';

ReactDOM.render(<QuizContainer />, document.getElementById('root'));
registerServiceWorker();
