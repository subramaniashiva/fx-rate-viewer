import {put, select} from 'redux-saga/effects';
import {cloneableGenerator} from 'redux-saga/utils';

import {
  handleSecondaryCurrencyChange,
} from './handle-secondary-currency-change.saga';
import {
  primaryCurrencyChangedBySecondary,
} from '../redux/reducers/primary-currency.reducer';
import {
  handleSecondaryCurrencyValueChange,
} from './handle-secondary-currency-value-change.saga';
import {
  handlePrimaryCurrencyValueChange,
} from './handle-primary-currency-value-change.saga';

import currenciesList from '../config/currencies-list.config';

describe('Sagas: handle secondary currency change', () => {
  let generator: any;
  beforeEach(() => {
    generator = cloneableGenerator(handleSecondaryCurrencyChange)();
  });

  it('should update primary currency', () => {
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
      put(primaryCurrencyChangedBySecondary(currenciesList[0])));
    expect(generator.next().value).toEqual(
      handleSecondaryCurrencyValueChange());
  });

  it('should not update primary currency', () => {
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
