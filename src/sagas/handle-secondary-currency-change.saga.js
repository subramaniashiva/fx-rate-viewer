import {put, select} from 'redux-saga/effects';

import getFirstDiffItemArray
  from '../utils/get-first-diff-item-array.utils';

import {primaryCurrencyChangedBySecondary}
  from '../redux/reducers/primary-currency.reducer';
import currenciesList from '../config/currencies-list.config';

import {handlePrimaryCurrencyValueChange}
  from './handle-primary-currency-value-change.saga';

import {handleSecondaryCurrencyValueChange}
  from './handle-secondary-currency-value-change.saga';

import type {Currency} from '../types/currency.type';

export function* handleSecondaryCurrencyChange(): Iterable<*> {
  try {
    const state: any = yield select();
    const primaryCurrency: Currency = state.primaryCurrency;
    const secondaryCurrency: Currency = state.secondaryCurrency;

    if (secondaryCurrency.name === primaryCurrency.name) {
      const updatedPrimaryCurrency = getFirstDiffItemArray(
        secondaryCurrency, currenciesList, 'name');
      yield put(
        primaryCurrencyChangedBySecondary(updatedPrimaryCurrency));
      yield handleSecondaryCurrencyValueChange();
    } else {
      yield handlePrimaryCurrencyValueChange();
    }
   } catch (e) {}
}
