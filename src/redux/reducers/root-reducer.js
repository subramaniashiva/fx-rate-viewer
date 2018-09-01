import {combineReducers} from 'redux';

import currentNumber from './current-number';
import loading from './loading';
import rates from './rates';

export default combineReducers({
  loading,
  currentNumber,
  rates,
});
