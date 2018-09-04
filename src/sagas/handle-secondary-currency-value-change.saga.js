import {put, select} from 'redux-saga/effects';

import {primaryCurrencyValueChangedBySecondary}
  from '../redux/reducers/primary-currency-value.reducer';

import convertCurrency from '../utils/convert-currency.utils';

export function* handleSecondaryCurrencyValueChange(): Iterable<*> {
  try {
    const state: any = yield select();
    let value: number | string;
    if (!state.secondaryCurrencyValue || state.secondaryCurrencyValue === '') {
      value = '';
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
