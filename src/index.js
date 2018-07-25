import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import View from './containers/CounterContainer';

ReactDOM.render(<View />, document.getElementById('root'));
registerServiceWorker();
