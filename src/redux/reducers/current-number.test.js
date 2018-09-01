import {getCurrentNumber, GET_CURRENT_NUMBER} from './current-number';

describe('Reducer: Current Number', () => {
  it('should get current number', () => {
    const expected = {
      type: GET_CURRENT_NUMBER,
    };
    expect(getCurrentNumber()).toEqual(expected);
  });
});
