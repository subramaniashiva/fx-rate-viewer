import getFirstDiffItemArray from './get-first-diff-item-array.utils';

describe('utils: get first diff item', () => {
  it('should return the first different item', () => {
    // Arrange
    const sourceArray = ['foo', 'baz', 'bar'];
    const expected = 'baz';

    // Assert
    expect(getFirstDiffItemArray('foo', sourceArray)).toEqual(expected);
  });

  it('should return undefined if no match', () => {
    // Arrange
    const sourceArray = ['foo', 'foo', 'foo'];
    const expected = undefined;

    // Assert
    expect(getFirstDiffItemArray('foo', sourceArray)).toEqual(expected);
  });

  it('should return the first different item', () => {
    // Arrange
    const sourceArray = [{
      'key1': 'value1',
    }, {
      'key1': 'value1',
    }, {
      'key2': 'value2',
    }];
    const expected = {
      'key2': 'value2',
    };

    // Assert
    expect(getFirstDiffItemArray({'key1': 'value1'}, sourceArray, 'key1'))
      .toEqual(expected);
  });
});
