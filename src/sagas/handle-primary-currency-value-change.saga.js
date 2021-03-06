import {put, select} from 'redux-saga/effects';

import {secondaryCurrencyValueChangedByPrimary}
  from '../redux/reducers/secondary-currency-value.reducer';
import convertCurrency from '../utils/convert-currency.utils';

export function* handlePrimaryCurrencyValueChange(): Iterable<*> {
  try {
    const state: any = yield select();
    let value: number | string;
    if (!state.primaryCurrencyValue || state.primaryCurrencyValue === '') {
      value = '';
    } else {
      const sourceCurrency: string = state.primaryCurrency.name;
      const sourceVal: number = state.primaryCurrencyValue;
      const destinationCurrency: string = state.secondaryCurrency.name;
      value = convertCurrency(
        sourceCurrency, sourceVal, destinationCurrency, state.rates);
    }
    yield put(secondaryCurrencyValueChangedByPrimary(value));
   } catch (e) {}
}
