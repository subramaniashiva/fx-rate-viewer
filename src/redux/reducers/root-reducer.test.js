import {createStore} from 'redux';

import rootReducers from './root-reducer';

describe('Root reducer', () => {
  it('should have default loading as false', () => {
    const store = createStore(rootReducers);
    expect(store.getState().loading).toBeFalsy();
  });

  it('should have default rates as empty', () => {
    const store = createStore(rootReducers);
    expect(store.getState().rates).toEqual({});
  });
});
