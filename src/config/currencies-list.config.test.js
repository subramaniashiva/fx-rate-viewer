import currenciesList from './currencies-list.config';

describe('Currencies List', () => {
  it('should have array of currencies', () => {
    // Assert
    expect(currenciesList.length).toBeGreaterThan(0);
  });

  it('should have name, symbol and displayName property', () => {
    // Assert
    currenciesList.map((item) => {
      expect(typeof item.name).toBe('string');
      expect(typeof item.symbol).toBe('string');
      expect(typeof item.displayName).toBe('string');
    });
  });
});
