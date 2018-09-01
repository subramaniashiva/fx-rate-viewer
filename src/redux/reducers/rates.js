import createReducer from '../../utils/create-reducer';

const initialState: Object = {};

export const SET_RATES: string = 'set_rates';
export const LOAD_RATES: string = 'load_rates';

export function setRates(data: Object): Object {
  return {
    type: SET_RATES,
    payload: {
      data,
    },
  };
}

export function loadRates(): Object {
  return {
    type: LOAD_RATES,
  };
}

// The actual reducer
export default createReducer(initialState, {
  [SET_RATES]: (state, {data}) => data,
  [LOAD_RATES]: (state) => state,
});
