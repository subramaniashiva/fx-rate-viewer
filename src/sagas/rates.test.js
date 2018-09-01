import {put} from 'redux-saga/effects';
import {cloneableGenerator} from 'redux-saga/utils';

import {loadRatesSaga} from './rates';
import {loadRates, setRates} from '../redux/reducers/rates';
import {setLoading} from '../redux/reducers/loading';

describe('Sagas: rates', () => {
  let loadRatesAction;
  let generator;
  beforeEach(() => {
    loadRatesAction = loadRates();
    generator = cloneableGenerator(loadRatesSaga)(loadRatesAction);
  });
  it('fetch rates', () => {
    expect(generator.next().value).toEqual(put(setLoading(true)));
    generator.next();
    expect(generator.next({foo: 'bar'}).value)
      .toEqual(put(setRates({foo: 'bar'})));
    expect(generator.next().value).toEqual(put(setLoading(false)));
  });

  it('should set loading to false on error', () => {
    expect(generator.next().value).toEqual(put(setLoading(true)));
    expect(generator.throw({}).value).toEqual(put(setLoading(false)));
  });
});
