import CURRENCY_DECIMAL_PRECISION
  from '../config/currency-decimal-precision.config';

export default function convertCurrency(
  sourceCurrencyName: string,
  sourceCurrencyValue: number,
  destinationCurrencyName: string,
  fxData: Object
  ): number | string {
  if (sourceCurrencyName &&
    sourceCurrencyValue &&
    destinationCurrencyName &&
    fxData &&
    fxData['rates'] &&
    fxData['rates'][sourceCurrencyName] &&
    fxData['rates'][destinationCurrencyName]
    ) {
    const fxValSourceCurrency: number = fxData['rates'][sourceCurrencyName];
    const fxValDestinationCurrency: number =
      fxData['rates'][destinationCurrencyName];
    const convertedValue: number =
      (fxValDestinationCurrency/fxValSourceCurrency)*sourceCurrencyValue;

    return convertedValue % 1 === 0 ?
      convertedValue :
      Number(convertedValue.toFixed(CURRENCY_DECIMAL_PRECISION));
  }
  return '';
}
