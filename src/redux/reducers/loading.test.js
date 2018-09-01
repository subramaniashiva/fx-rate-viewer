import {setLoading, SET_LOADING} from './loading';

describe('Reducer: loading', () => {
  it('set loading value to true', () => {
    const expected = {
      type: SET_LOADING,
      payload: {
        data: true,
      },
    };
    expect(setLoading(true)).toEqual(expected);
  });

  it('set loading value to false', () => {
    const expected = {
      type: SET_LOADING,
      payload: {
        data: false,
      },
    };
    expect(setLoading(false)).toEqual(expected);
  });
});
