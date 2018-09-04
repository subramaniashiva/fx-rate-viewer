import createReducer from '../../utils/create-reducer.utils';
import createAction from '../../utils/create-action.utils';
import type {ReduxAction} from '../../types/redux-action.type';

const initialState: boolean = false;

export const SET_LOADING: string = 'set_loading';

export const setLoading = (data: boolean): ReduxAction => {
  return createAction(SET_LOADING, data);
}

// The actual reducer
export default createReducer(initialState, {
  [SET_LOADING]: (state, {data}) => data,
});
