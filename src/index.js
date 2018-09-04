import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import store from './redux/store';
import FxRateViewer from './containers/fx-rate-viewer/fx-rate-viewer.container';
import registerServiceWorker from './registerServiceWorker';

const dRoot = document.getElementById('root');
if (dRoot !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <FxRateViewer />
    </Provider>, dRoot);
  registerServiceWorker();
}
