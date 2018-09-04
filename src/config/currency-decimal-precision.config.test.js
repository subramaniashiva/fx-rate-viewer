import CURRENCY_DECIMAL_PRECISION from './currency-decimal-precision.config';

describe('config: Currency Decimal Precision', () => {
  it('should export Currency Decimal Precision as a number', () => {
    // Assert
    expect(typeof CURRENCY_DECIMAL_PRECISION).toBe('number');
  });
});
