import type {Saga} from 'redux-saga';
import {takeEvery, all} from 'redux-saga/effects';

/* ------------- Types ------------- */

import {LOAD_RATES} from '../redux/reducers/rates';

/* ------------- Sagas ------------- */

import {loadRatesSaga} from './rates';

/* ------------- Connect Types To Sagas ------------- */

export default function* root(): Saga<void> {
  yield all([
    // some sagas only receive an action
    takeEvery(LOAD_RATES, loadRatesSaga),
  ]);
}
