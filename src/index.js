import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MainCounterContainer from './containers/MainCounterContainer';

ReactDOM.render(<MainCounterContainer />, document.getElementById('root'));
registerServiceWorker();
