import {call, put} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import API from '../api/index.api';
import {setLoading} from '../redux/reducers/loading.reducer';
import {setRates} from '../redux/reducers/rates.reducer';
import type {RatesAPIResponse} from '../types/rates-api-response.type';
import type {LoadRatesOptions} from '../types/load-rates-options.type';

function fetchRatesFromAPI(): Promise<RatesAPIResponse> {
  return fetch(API.root + API.path.loadRates, {cache: 'no-cache'})
    .then((data) => data.json());
}

export function* loadRatesSaga(options: LoadRatesOptions): Iterable<*> {
  try {
    if (options && options.showLoading) {
      yield put(setLoading(true));
    }
    const data: RatesAPIResponse = yield call(fetchRatesFromAPI);
    data.success = true;
    yield put(setRates(data));
    if (options && options.showLoading) {
      yield put(setLoading(false));
    }
   } catch (e) {
    yield put(setRates({success: false}));
    yield put(setLoading(false));
   }
}
