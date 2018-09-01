import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import store from './redux/store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const dRoot = document.getElementById('root');
if (dRoot !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, dRoot);
  registerServiceWorker();
}
