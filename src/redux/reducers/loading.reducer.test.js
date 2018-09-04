import reducerFunction, {setLoading, SET_LOADING} from './loading.reducer';
import createAction from '../../utils/create-action.utils';

describe('Reducer: loading', () => {
  it('set loading value to true', () => {
    // Arrange
    const expected = createAction(SET_LOADING, true);

    // Assert
    expect(setLoading(true)).toEqual(expected);
  });

  it('set loading value to false', () => {
    // Arrange
    const expected = createAction(SET_LOADING, false);

    // Assert
    expect(setLoading(false)).toEqual(expected);
  });

  it('updates the state loading status to false', () => {
    // Arrange
    const updatedState = reducerFunction(true,
      createAction(SET_LOADING, false));

    // Assert
    expect(updatedState).toEqual(false);
  });

  it('updates the state loading status to true', () => {
    // Arrange
    const updatedState = reducerFunction(true,
      createAction(SET_LOADING, true));

    // Assert
    expect(updatedState).toEqual(true);
  });

});
