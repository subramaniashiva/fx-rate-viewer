import {put, select} from 'redux-saga/effects';
import {cloneableGenerator} from 'redux-saga/utils';

import {
  handleSecondaryCurrencyValueChange,
} from './handle-secondary-currency-value-change.saga';
import {
  primaryCurrencyValueChangedBySecondary,
} from '../redux/reducers/primary-currency-value.reducer';

describe('Sagas: handle secondary currency value change', () => {
  let generator: any;
  beforeEach(() => {
    generator = cloneableGenerator(handleSecondaryCurrencyValueChange)();
  });

  it('should update primary currency value', () => {
    // Arrange
    const mockState = {
      primaryCurrency: {
        name: 'foo',
      },
      secondaryCurrency: {
        name: 'bar',
      },
      secondaryCurrencyValue: 100,
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
      put(primaryCurrencyValueChangedBySecondary(50)));
  });

  it('should update secondary currency value to 0', () => {
    // Arrange
    const mockState = {
      secondaryCurrencyValue: '',
    };

    // Assert
    expect(generator.next().value).toEqual(select());
    expect(generator.next(mockState).value).toEqual(
      put(primaryCurrencyValueChangedBySecondary('')));
  });
});
