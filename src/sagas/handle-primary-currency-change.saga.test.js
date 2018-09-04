import {put, select} from 'redux-saga/effects';
import {cloneableGenerator} from 'redux-saga/utils';

import {
  handlePrimaryCurrencyChange,
} from './handle-primary-currency-change.saga';
import {
  secondaryCurrencyChangedByPrimary,
} from '../redux/reducers/secondary-currency.reducer';
import {
  handlePrimaryCurrencyValueChange,
} from './handle-primary-currency-value-change.saga';
import currenciesList from '../config/currencies-list.config';

describe('Sagas: handle primary currency change', () => {
  let generator: any;
  beforeEach(() => {
    generator = cloneableGenerator(handlePrimaryCurrencyChange)();
  });

  it('should update secondary currency', () => {
    // Assert
    expect(generator.next().value).toEqual(select());
    expect(generator.next({
      primaryCurrency: {
        name: 'foo',
      },
      secondaryCurrency: {
        name: 'foo',
      },
    }).value).toEqual(
      put(secondaryCurrencyChangedByPrimary(currenciesList[0])));
    expect(generator.next().value).toEqual(handlePrimaryCurrencyValueChange());
  });

  it('should not update secondary currency', () => {
    // Assert
    expect(generator.next().value).toEqual(select());
    expect(generator.next({
      primaryCurrency: {
        name: 'foo',
      },
      secondaryCurrency: {
        name: 'bar',
      },
    }).value).toEqual(handlePrimaryCurrencyValueChange());
  });
});
