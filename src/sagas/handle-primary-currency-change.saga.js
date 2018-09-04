import {put, select} from 'redux-saga/effects';

import getFirstDiffItemArray
  from '../utils/get-first-diff-item-array.utils';

import {secondaryCurrencyChangedByPrimary}
  from '../redux/reducers/secondary-currency.reducer';
import currenciesList from '../config/currencies-list.config';

import {handlePrimaryCurrencyValueChange}
  from './handle-primary-currency-value-change.saga';

import type {Currency} from '../types/currency.type';

export function* handlePrimaryCurrencyChange(): Iterable<*> {
  try {
    const state: any = yield select();
    const primaryCurrency: Currency = state.primaryCurrency;
    const secondaryCurrecy: Currency = state.secondaryCurrency;

    if (primaryCurrency.name === secondaryCurrecy.name) {
      const updatedSecondaryCurrency: Currency = getFirstDiffItemArray(
        primaryCurrency, currenciesList, 'name');
      yield put(
        secondaryCurrencyChangedByPrimary(updatedSecondaryCurrency));
    }
    yield handlePrimaryCurrencyValueChange();
   } catch (e) {}
}
