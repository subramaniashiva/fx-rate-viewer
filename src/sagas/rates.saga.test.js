import {put} from 'redux-saga/effects';

import {loadRatesSaga} from './rates.saga';
import {setRates} from '../redux/reducers/rates.reducer';
import {setLoading} from '../redux/reducers/loading.reducer';

describe('Sagas: rates', () => {
  let generator;
  beforeEach(() => {
    generator = loadRatesSaga({showLoading: true});
  });
  it('fetch rates', () => {
    expect(generator.next().value).toEqual(put(setLoading(true)));
    generator.next();
    expect(generator.next({foo: 'bar'}).value)
      .toEqual(put(setRates({foo: 'bar', success: true})));
    expect(generator.next().value).toEqual(put(setLoading(false)));
  });

  it('fetch rates without loading', () => {
    generator = loadRatesSaga({showLoading: false});
    generator.next();
    expect(generator.next({foo: 'bar'}).value)
      .toEqual(put(setRates({foo: 'bar', success: true})));
  });

  it('should set loading to false on error', () => {
    expect(generator.next().value).toEqual(put(setLoading(true)));
    expect(generator.throw({}).value).toEqual(put(setRates({success: false})));
    expect(generator.next().value).toEqual(put(setLoading(false)));
  });
});
