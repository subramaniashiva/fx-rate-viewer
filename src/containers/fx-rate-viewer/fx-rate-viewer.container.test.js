import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from '../../redux/store';

import FXRateViewer from './fx-rate-viewer.container';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <FXRateViewer />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
