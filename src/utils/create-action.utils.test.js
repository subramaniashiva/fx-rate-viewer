import createAction from './create-action.utils';

describe('utils: create action', () => {
  it('should create action', () => {
    // Arrange
    const expected = {
      type: 'foo',
      payload: {
        data: 'baz',
      },
    };

    // Assert
    expect(createAction('foo', 'baz')).toEqual(expected);
  });
});
