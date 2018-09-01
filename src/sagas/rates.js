import type {Saga} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import API from '../api';
import {setLoading} from '../redux/reducers/loading';
import {setRates} from '../redux/reducers/rates';

function fetchRatesFromAPI() {
  return fetch(API.root + API.path.loadRates)
    .then((data) => data.json());
}

export function* loadRatesSaga(): Saga<void> {
  try {
    yield put(setLoading(true));
    const data = yield call(fetchRatesFromAPI);
    yield put(setRates(data));
    yield put(setLoading(false));
   } catch (e) {
    yield put(setLoading(false));
   }
}
