import React from 'react';
import ReactDOM from 'react-dom';
import './services/junk/index.css';
//import App from './services/junk/App';
import QuizContainer  from '../src/containers/QuizContainer';
import registerServiceWorker from './services/junk/registerServiceWorker';

ReactDOM.render(<QuizContainer />, document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, hasHistory } from 'react-router';
// import configureStore from './store/configureSore'
//
// const store = configureStore();
//
// render(
//     <Provider store= { store } >
//         <div>
//             <Router history={ hasHistory } routes={ routes } />
//         </div>
//
//     </Provider>,
//     document.getElementById('root')
// );