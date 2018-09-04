import reducerFunction, {
  SET_SECONDARY_CURRENCY_VALUE,
  SECONDARY_CURRENCY_VALUE_CHANGED_BY_PRIMARY,
  setSecondaryCurrencyValue,
  secondaryCurrencyValueChangedByPrimary,
} from './secondary-currency-value.reducer';
import createAction from '../../utils/create-action.utils';

describe('Seondary Currency Value Reducer', () => {
  it('should set secondary currency value', () => {
    // Arrange
    const expected = createAction(SET_SECONDARY_CURRENCY_VALUE, 100);

    // Assert
    expect(setSecondaryCurrencyValue(100)).toEqual(expected);
  });

  it('should set generate action secondary currency changed by primary',
    () => {
    // Arrange
    const expected = createAction(
      SECONDARY_CURRENCY_VALUE_CHANGED_BY_PRIMARY, 100);

    // Assert
    expect(secondaryCurrencyValueChangedByPrimary(100)).toEqual(expected);
  });

  it('updates the secondary currency value', () => {
    // Arrange
    const updatedState = reducerFunction(100, createAction(
        SET_SECONDARY_CURRENCY_VALUE, 200));

    // Assert
    expect(updatedState).toEqual(200);
  });

  it('updates the secondary currency value', () => {
    // Arrange
    const updatedState = reducerFunction(100, createAction(
      SECONDARY_CURRENCY_VALUE_CHANGED_BY_PRIMARY, 200));

    // Assert
    expect(updatedState).toEqual(200);
  });
});