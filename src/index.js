import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import CounterContainer from './containers/CounterContainer';

ReactDOM.render(<CounterContainer />, document.getElementById('root'));
registerServiceWorker();
