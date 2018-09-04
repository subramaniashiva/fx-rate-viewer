import CURRENCY_TYPES from './currency-types.constants';

describe('Currency Types', () => {
  it('should export Currency Types', () => {
    expect(typeof CURRENCY_TYPES).toBe('object');
    expect(typeof CURRENCY_TYPES.PRIMARY_CURRENCY).toBe('string');
    expect(typeof CURRENCY_TYPES.SECONDARY_CURRENCY).toBe('string');
  });
});
