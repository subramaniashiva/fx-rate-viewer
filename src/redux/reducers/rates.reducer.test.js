import reducerFunction,
  {loadRates, LOAD_RATES, setRates, SET_RATES} from './rates.reducer';
import createAction from '../../utils/create-action.utils';

describe('Reducers: rates', () => {
  it('should call load rates without options', () => {
    // Arrange
    const expected = createAction(LOAD_RATES);

    // Assert
    expect(loadRates()).toEqual(expected);
  });

  it('should call load rates with options', () => {
    // Arrange
    const expected = createAction(LOAD_RATES, {showLoading: true});

    // Assert
    expect(loadRates({showLoading: true})).toEqual(expected);
  });

  it('should set rates', () => {
    // Arrange
    const expected = createAction(SET_RATES, {foo: 'bar'});

    // Assert
    expect(setRates({foo: 'bar'})).toEqual(expected);
  });

  it('should update the rates state', () => {
    // Arrange
    const updatedState =
      reducerFunction({}, createAction(SET_RATES, {foo: 'bar'}));

    // Assert
    expect(updatedState).toEqual({foo: 'bar'});
  });

  it('should not update the rates state', () => {
    // Arrange
    const updatedState =
      reducerFunction({baz: 'test'}, createAction(LOAD_RATES, {foo: 'bar'}));

    // Assert
    expect(updatedState).toEqual({baz: 'test'});
  });
});
