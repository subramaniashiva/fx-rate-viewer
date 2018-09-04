import createAction from './create-action.utils';

describe('utils: create action', () => {
  it('should create action', () => {
    const expected = {
      type: 'foo',
      payload: {
        data: 'baz',
      },
    };

    expect(createAction('foo', 'baz')).toEqual(expected);
  });
});
