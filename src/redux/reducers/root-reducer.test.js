import {createStore} from 'redux';

import rootReducers from './root-reducer';

describe('Root reducer', () => {
  it('should have default loading as false', () => {
    // Arrange
    const store = createStore(rootReducers);

    // Assert
    expect(store.getState().loading).toBeFalsy();
  });

  it('should have default rates as empty', () => {
    // Arrange
    const store = createStore(rootReducers);

    // Assert
    expect(store.getState().rates).toEqual({});
  });
});
