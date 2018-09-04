import {createStore} from 'redux';

import rootReducers from './reducers/root-reducer';
import {setLoading} from './reducers/loading.reducer';
import {setRates} from './reducers/rates.reducer';
import {
  setPrimaryCurrencyValue,
  primaryCurrencyValueChangedBySecondary,
}
from './reducers/primary-currency-value.reducer';

import {
  setSecondaryCurrencyValue,
  secondaryCurrencyValueChangedByPrimary,
}
from './reducers/secondary-currency-value.reducer';

import {
  setPrimaryCurrency,
  primaryCurrencyChangedBySecondary,
} from './reducers/primary-currency.reducer';

import {
  setSecondaryCurrency,
  secondaryCurrencyChangedByPrimary,
} from './reducers/secondary-currency.reducer';
import type {Currency} from '../types/currency.type';

describe('Store', () => {
  it('should set loading to false', () => {
    // Arrange
    const store = createStore(rootReducers);

    // Act
    store.dispatch(setLoading(false));

    // Assert
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

    // Act
    store.dispatch(setRates({foo: 'bar'}));

    // Assert
    expect(store.getState().rates).toEqual({foo: 'bar'});
  });

  it('should set primary currency value', () => {
    // Arrange
    const store = createStore(rootReducers);
    store.dispatch(setPrimaryCurrencyValue(100));
    expect(store.getState().primaryCurrencyValue).toEqual(100);
  });

  it('should set primary currency value', () => {
    // Arrange
    const store = createStore(rootReducers);

    // Act
    store.dispatch(primaryCurrencyValueChangedBySecondary(100));

    // Assert
    expect(store.getState().primaryCurrencyValue).toEqual(100);
  });

  it('should set secondary currency value', () => {
    // Arrange
    const store = createStore(rootReducers);

    // Act
    store.dispatch(setSecondaryCurrencyValue(100));

    // Assert
    expect(store.getState().secondaryCurrencyValue).toEqual(100);
  });

  it('should set secondary currency value', () => {
    // Arrange
    const store = createStore(rootReducers);

    // Act
    store.dispatch(secondaryCurrencyValueChangedByPrimary(100));

    // Assert
    expect(store.getState().secondaryCurrencyValue).toEqual(100);
  });

  it('should set primary currency', () => {
    // Arrange
    const store = createStore(rootReducers);
    const currency: Currency = {
      name: 'foo',
      displayName: 'foo',
      symbol: 'foo',
    };

    // Act
    store.dispatch(setPrimaryCurrency(currency));

    // Assert
    expect(store.getState().primaryCurrency).toEqual(currency);
  });

  it('should set primary currency', () => {
    // Arrange
    const store = createStore(rootReducers);
    const currency: Currency = {
      name: 'foo',
      displayName: 'foo',
      symbol: 'foo',
    };

    // Act
    store.dispatch(primaryCurrencyChangedBySecondary(currency));

    // Assert
    expect(store.getState().primaryCurrency).toEqual(currency);
  });

  it('should set secondary currency', () => {
    // Arrange
    const store = createStore(rootReducers);
    const currency: Currency = {
      name: 'foo',
      displayName: 'foo',
      symbol: 'foo',
    };

    // Act
    store.dispatch(setSecondaryCurrency(currency));

    // Assert
    expect(store.getState().secondaryCurrency).toEqual(currency);
  });

  it('should set secondary currency', () => {
    // Arrange
    const store = createStore(rootReducers);
    const currency: Currency = {
      name: 'foo',
      displayName: 'foo',
      symbol: 'foo',
    };

    // Act
    store.dispatch(secondaryCurrencyChangedByPrimary(currency));

    // Assert
    expect(store.getState().secondaryCurrency).toEqual(currency);
  });
});
