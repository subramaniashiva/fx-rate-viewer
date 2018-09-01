import createReducer from '../../utils/create-reducer';

const initialState: string = '3';

export const GET_CURRENT_NUMBER: string = 'get_current_number';
export const APPEND_CURRENT_NUMBER: string = 'append_current_number';
export const RESET_CURRENT_NUMBER: string = 'reset_current_number';

export function getCurrentNumber(): Object {
  return {
    type: GET_CURRENT_NUMBER,
  };
}

export function appendCurrentNumber(data: string): Object {
  return {
    type: APPEND_CURRENT_NUMBER,
    payload: {
      data,
    },
  };
}

export function resetCurrentNumber(): Object {
  return {
    type: RESET_CURRENT_NUMBER,
  };
}
// The actual reducer
export default createReducer(initialState, {
  [GET_CURRENT_NUMBER]: (state) => state,
  [APPEND_CURRENT_NUMBER]: (state, {data}) => (state + data),
  [RESET_CURRENT_NUMBER]: () => '',
});
