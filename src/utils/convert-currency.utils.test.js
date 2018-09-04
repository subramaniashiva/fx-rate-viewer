import convertCurrency from './convert-currency.utils';

describe('utils: Convert Currency', () => {
  it('should output converted currency', () => {
    const sourceCurrencyName: string = 'foo';
    const sourceCurrencyValue: number = 100;
    const destinationCurrencyName: string = 'bar';
    const fxData: Object = {
      rates: {
        foo: 1,
        bar: 2,
      },
    };

    const convertedValue: number = convertCurrency(
      sourceCurrencyName,
      sourceCurrencyValue,
      destinationCurrencyName,
      fxData
      );

    expect(convertedValue).toEqual(200);
  });

  it('should output converted currency in floating precision 2', () => {
    const sourceCurrencyName: string = 'foo';
    const sourceCurrencyValue: number = 1;
    const destinationCurrencyName: string = 'bar';
    const fxData: Object = {
      rates: {
        foo: 3,
        bar: 1,
      },
    };

    const convertedValue: number = convertCurrency(
      sourceCurrencyName,
      sourceCurrencyValue,
      destinationCurrencyName,
      fxData
      );

    expect(convertedValue).toEqual(0.33);
  });

  it('should output 0 if details are invalid', () => {
    const sourceCurrencyName: string = 'foo';
    const sourceCurrencyValue: number = 1;
    const destinationCurrencyName: string = 'bar';
    const fxData: Object = {
      rates: {},
    };

    const convertedValue: number = convertCurrency(
      sourceCurrencyName,
      sourceCurrencyValue,
      destinationCurrencyName,
      fxData
      );

    expect(convertedValue).toEqual(0);
  });
});
