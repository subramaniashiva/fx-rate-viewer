import type {Saga} from 'redux-saga';
import {takeEvery, all} from 'redux-saga/effects';

/* ------------- Types ------------- */

import {LOAD_RATES} from '../redux/reducers/rates.reducer';
import {SET_PRIMARY_CURRENCY}
  from '../redux/reducers/primary-currency.reducer';
import {SET_SECONDARY_CURRENCY}
  from '../redux/reducers/secondary-currency.reducer';
import {SET_PRIMARY_CURRENCY_VALUE}
  from '../redux/reducers/primary-currency-value.reducer';
import {SET_SECONDARY_CURRENCY_VALUE}
  from '../redux/reducers/secondary-currency-value.reducer';

/* ------------- Sagas ------------- */

import {loadRatesSaga} from './rates.saga';
import {handlePrimaryCurrencyChange}
  from './handle-primary-currency-change.saga';
import {handleSecondaryCurrencyChange}
from './handle-secondary-currency-change.saga';
import {handlePrimaryCurrencyValueChange}
  from './handle-primary-currency-value-change.saga';
import {handleSecondaryCurrencyValueChange}
from './handle-secondary-currency-value-change.saga';

/* ------------- Connect Types To Sagas ------------- */

export default function* root(): Saga<void> {
  yield all([
    // some sagas only receive an action
    takeEvery(LOAD_RATES, loadRatesSaga),
    takeEvery(SET_PRIMARY_CURRENCY_VALUE, handlePrimaryCurrencyValueChange),
    takeEvery(SET_SECONDARY_CURRENCY_VALUE, handleSecondaryCurrencyValueChange),
    takeEvery(SET_PRIMARY_CURRENCY, handlePrimaryCurrencyChange),
    takeEvery(SET_SECONDARY_CURRENCY, handleSecondaryCurrencyChange),
  ]);
}
