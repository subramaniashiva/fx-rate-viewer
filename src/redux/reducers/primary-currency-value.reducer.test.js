import reducerFunction, {
  SET_PRIMARY_CURRENCY_VALUE,
  PRIMARY_CURRENCY_VALUE_CHANGED_BY_SECONDARY,
  setPrimaryCurrencyValue,
  primaryCurrencyValueChangedBySecondary,
} from './primary-currency-value.reducer';
import createAction from '../../utils/create-action.utils';

describe('Primary Currency Value Reducer', () => {

  it('should set primary currency value', () => {
    // Arrange
    const expected = createAction(SET_PRIMARY_CURRENCY_VALUE, 100);

    // Assert
    expect(setPrimaryCurrencyValue(100)).toEqual(expected);
  });

  it('should set generate action primary currency changed by secondary',
    () => {
    // Arrange
    const expected = createAction(
      PRIMARY_CURRENCY_VALUE_CHANGED_BY_SECONDARY, 100);

    // Assert
    expect(primaryCurrencyValueChangedBySecondary(100)).toEqual(expected);
  });

  it('updates the primary currency value', () => {
    // Arrange
    const updatedState = reducerFunction(100, createAction(
        SET_PRIMARY_CURRENCY_VALUE, 200));

    // Assert
    expect(updatedState).toEqual(200);
  });

  it('updates the primary currency value', () => {
    // Arrange
    const updatedState = reducerFunction(100, createAction(
      PRIMARY_CURRENCY_VALUE_CHANGED_BY_SECONDARY, 200));

    // Assert
    expect(updatedState).toEqual(200);
  });
});

