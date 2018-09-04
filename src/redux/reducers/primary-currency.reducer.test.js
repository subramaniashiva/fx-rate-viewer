import reducerFunction, {
  SET_PRIMARY_CURRENCY,
  PRIMARY_CURRENCY_CHANGED_BY_SECONDARY,
  setPrimaryCurrency,
  primaryCurrencyChangedBySecondary,
} from './primary-currency.reducer';
import createAction from '../../utils/create-action.utils';

describe('primary currency reducer', () => {
  it('should set primary currency', () => {
    // Arrange
    const expected = createAction(SET_PRIMARY_CURRENCY, {foo: 'baz'});

    // Assert
    expect(setPrimaryCurrency({foo: 'baz'})).toEqual(expected);
  });

  it('should set primary currency changed by secondary', () => {
    // Arrange
    const expected = createAction(
      PRIMARY_CURRENCY_CHANGED_BY_SECONDARY, {foo: 'baz'});

    // Assert
    expect(primaryCurrencyChangedBySecondary({foo: 'baz'})).toEqual(expected);
  });

  it('should update the primary currency', () => {
    // Arrange
    const updatedState = reducerFunction({}, createAction(
      SET_PRIMARY_CURRENCY, {foo: 'baz'}));

    // Assert
    expect(updatedState).toEqual({foo: 'baz'});
  });

  it('should update the primary currency', () => {
    // Arrange
    const updatedState = reducerFunction({}, createAction(
      PRIMARY_CURRENCY_CHANGED_BY_SECONDARY, {foo: 'baz'}));

    // Assert
    expect(updatedState).toEqual({foo: 'baz'});
  });
});
