import {combineReducers} from 'redux';

import loading from './loading.reducer';
import rates from './rates.reducer';
import primaryCurrency from './primary-currency.reducer';
import secondaryCurrency from './secondary-currency.reducer';
import primaryCurrencyValue from './primary-currency-value.reducer';
import secondaryCurrencyValue from './secondary-currency-value.reducer';

export default combineReducers({
  loading,
  rates,
  primaryCurrency,
  secondaryCurrency,
  primaryCurrencyValue,
  secondaryCurrencyValue,
});
