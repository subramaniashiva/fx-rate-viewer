import type {Saga} from 'redux-saga';
import {put, select} from 'redux-saga/effects';

import {primaryCurrencyValueChangedBySecondary}
  from '../redux/reducers/primary-currency-value.reducer';

import convertCurrency from '../utils/convert-currency.utils';

export function* handleSecondaryCurrencyValueChange(): Saga<void> {
  try {
    const state = yield select();
    let value: number;
    if (!state.secondaryCurrencyValue || state.secondaryCurrencyValue === '') {
      value = 0;
    } else {
      const sourceCurrency: string = state.secondaryCurrency.name;
      const sourceVal: number = state.secondaryCurrencyValue;
      const destinationCurrency: string = state.primaryCurrency.name;
      value =convertCurrency(
        sourceCurrency, sourceVal, destinationCurrency, state.rates);
    }
    yield put(primaryCurrencyValueChangedBySecondary(value));
   } catch (e) {}
}
