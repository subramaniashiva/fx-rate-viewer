import {put, select} from 'redux-saga/effects';
import {cloneableGenerator} from 'redux-saga/utils';

import {
  handlePrimaryCurrencyValueChange,
} from './handle-primary-currency-value-change.saga';
import {
  secondaryCurrencyValueChangedByPrimary,
} from '../redux/reducers/secondary-currency-value.reducer';

describe('Sagas: handle primary currency value change', () => {
  let generator: any;
  beforeEach(() => {
    generator = cloneableGenerator(handlePrimaryCurrencyValueChange)();
  });

  it('should update secondary currency value', () => {
    // Arrange
    const mockState = {
      primaryCurrency: {
        name: 'foo',
      },
      secondaryCurrency: {
        name: 'bar',
      },
      primaryCurrencyValue: 100,
      rates: {
        base: 'USD',
        rates: {
          foo: 1,
          bar: 2,
        },
      },
    };

    // Assert
    expect(generator.next().value).toEqual(select());
    expect(generator.next(mockState).value).toEqual(
      put(secondaryCurrencyValueChangedByPrimary(200)));
  });

  it('should update secondary currency value to 0', () => {
    // Arrange
    const mockState = {
      primaryCurrencyValue: '',
    };

    // Assert
    expect(generator.next().value).toEqual(select());
    expect(generator.next(mockState).value).toEqual(
      put(secondaryCurrencyValueChangedByPrimary('')));
  });
});
