import createReducer from '../../utils/create-reducer.utils';
import createAction from '../../utils/create-action.utils';
import type {RatesAPIResponse} from '../../types/rates-api-response.type';
import type {ReduxAction} from '../../types/redux-action.type';
import type {LoadRatesOptions} from '../../types/load-rates-options.type';

const initialState: RatesAPIResponse = {};

export const SET_RATES: string = 'set_rates';
export const LOAD_RATES: string = 'load_rates';

export const setRates = (data: RatesAPIResponse): ReduxAction => {
  return createAction(SET_RATES, data);
}

export const loadRates = (options?: LoadRatesOptions): ReduxAction => {
  return createAction(LOAD_RATES, options);
}

// The actual reducer
export default createReducer(initialState, {
  [SET_RATES]: (state, {data}) => data,
  [LOAD_RATES]: (state, {data}) => state,
});
