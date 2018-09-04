import reducerFunction,
  {loadRates, LOAD_RATES, setRates, SET_RATES} from './rates.reducer';
import createAction from '../../utils/create-action.utils';

describe('Reducers: rates', () => {
  it('should call load rates without options', () => {
    const expected = createAction(LOAD_RATES);
    expect(loadRates()).toEqual(expected);
  });

  it('should call load rates with options', () => {
    const expected = createAction(LOAD_RATES, {showLoading: true});
    expect(loadRates({showLoading: true})).toEqual(expected);
  });

  it('should set rates', () => {
    const expected = createAction(SET_RATES, {foo: 'bar'});
    expect(setRates({foo: 'bar'})).toEqual(expected);
  });

  it('should update the rates state', () => {
    const updatedState =
      reducerFunction({}, createAction(SET_RATES, {foo: 'bar'}));
    expect(updatedState).toEqual({foo: 'bar'});
  });

  it('should not update the rates state', () => {
    const updatedState =
      reducerFunction({baz: 'test'}, createAction(LOAD_RATES, {foo: 'bar'}));
    expect(updatedState).toEqual({baz: 'test'});
  });
});
