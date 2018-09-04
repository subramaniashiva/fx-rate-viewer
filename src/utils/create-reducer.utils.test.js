import createReducer from './create-reducer.utils';

describe('Utils: createReducer', () => {
  it('should return a function', () => {
    expect(typeof createReducer()).toEqual('function');
  });

  it('should return the updated state: Object', () => {
    // Arrange
    const reducerFn = createReducer({}, {foo: (oldState, payload) => payload});
    const newState =
      reducerFn({}, {type: 'foo', payload: {baz: 'bat'}});

    // Assert
    expect(newState).toEqual({baz: 'bat'});
  });

  it('should return the updated state: Array', () => {
    // Arrange
    const reducerFn = createReducer([], {foo: (oldState, payload) => payload});
    const newState =
      reducerFn([], {type: 'foo', payload: [1, 2]});

    // Assert
    expect(newState).toEqual([1, 2]);
  });

  it('should return the updated state: String', () => {
    // Arrange
    const reducerFn = createReducer('', {foo: (oldState, payload) => payload});
    const newState =
      reducerFn('', {type: 'foo', payload: 'test'});

    // Assert
    expect(newState).toEqual('test');
  });

  it('should not update the state', () => {
    // Arrange
    const reducerFn = createReducer(
      {test: '1'}, {baz: (oldState, payload) => payload});
    const newState =
      reducerFn({test: '1'}, {type: 'foo', payload: {test: '2'}});

    // Assert
    expect(newState).toEqual({test: '1'});
  });
});
