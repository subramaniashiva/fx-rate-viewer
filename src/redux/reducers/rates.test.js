import {loadRates, LOAD_RATES, setRates, SET_RATES} from './rates';

describe('Reducers: rates', () => {
  it('should call load rates', () => {
    const expected = {
      type: LOAD_RATES,
    };
    expect(loadRates()).toEqual(expected);
  });

  it('should set rates', () => {
    const expected = {
      type: SET_RATES,
      payload: {
        data: {
          foo: 'bar',
        },
      },
    };
    expect(setRates({foo: 'bar'})).toEqual(expected);
  });
});
