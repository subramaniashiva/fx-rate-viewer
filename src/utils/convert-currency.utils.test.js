import convertCurrency from './convert-currency.utils';

describe('utils: Convert Currency', () => {
  it('should output converted currency', () => {
    // Arrange
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

    // Assert
    expect(convertedValue).toEqual(200);
  });

  it('should output converted currency in floating precision 2', () => {
    // Arrange
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

    // Assert
    expect(convertedValue).toEqual(0.33);
  });

  it('should output empty if details are invalid', () => {
    // Arrange
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

    // Assert
    expect(convertedValue).toEqual('');
  });
});
