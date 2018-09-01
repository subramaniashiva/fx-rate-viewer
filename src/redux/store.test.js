import {createStore} from 'redux';

import rootReducers from './reducers/root-reducer';
import {setLoading} from './reducers/loading';
import {setRates} from './reducers/rates';

describe('Store', () => {
  it('should set loading to false', () => {
    // Arrange
    const store = createStore(rootReducers);
    store.dispatch(setLoading(false));
    expect(store.getState().loading).toBeFalsy();
  });

  it('should set loading to true', () => {
    // Arrange
    const store = createStore(rootReducers);
    store.dispatch(setLoading(true));
    expect(store.getState().loading).toBeTruthy();
  });

  it('should set rates', () => {
    // Arrange
    const store = createStore(rootReducers);
    store.dispatch(setRates({foo: 'bar'}));
    expect(store.getState().rates).toEqual({foo: 'bar'});
  });
});
