import FX_RATES_API_FETCH_INTERVAL from './fx-rates-fetch-interval.config';

describe('FX Rates Fetch Interval', () => {
  it('should export FX rates Fetch Interval', () => {
    expect(typeof FX_RATES_API_FETCH_INTERVAL).toBe('number');
  });
});
