import createReducer from '../../utils/create-reducer';

const initialState: boolean = false;

export const SET_LOADING: string = 'set_loading';

export function setLoading(data: boolean): Object {
  return {
    type: SET_LOADING,
    payload: {
      data,
    },
  };
}

// The actual reducer
export default createReducer(initialState, {
  [SET_LOADING]: (state, {data}) => data,
});
