import reducerFunction, {
  SET_SECONDARY_CURRENCY,
  SECONDARY_CURRENCY_CHANGED_BY_PRIMARY,
  setSecondaryCurrency,
  secondaryCurrencyChangedByPrimary,
} from './secondary-currency.reducer';
import createAction from '../../utils/create-action.utils';

describe('secondary currency reducer', () => {
  it('should set secondary currency', () => {
    // Arrange
    const expected = createAction(SET_SECONDARY_CURRENCY, {foo: 'baz'});

    // Assert
    expect(setSecondaryCurrency({foo: 'baz'})).toEqual(expected);
  });

  it('should set secondary currency changed by primary', () => {
    // Arrange
    const expected = createAction(
      SECONDARY_CURRENCY_CHANGED_BY_PRIMARY, {foo: 'baz'});

    // Assert
    expect(secondaryCurrencyChangedByPrimary({foo: 'baz'})).toEqual(expected);
  });

  it('should update the secondary currency', () => {
    // Arrange
    const updatedState = reducerFunction({}, createAction(
      SET_SECONDARY_CURRENCY, {foo: 'baz'}));

    // Assert
    expect(updatedState).toEqual({foo: 'baz'});
  });

  it('should update the secondary currency', () => {
    // Arrange
    const updatedState = reducerFunction({}, createAction(
      SECONDARY_CURRENCY_CHANGED_BY_PRIMARY, {foo: 'baz'}));

    // Assert
    expect(updatedState).toEqual({foo: 'baz'});
  });
});
