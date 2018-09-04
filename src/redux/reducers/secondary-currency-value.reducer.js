import createReducer from '../../utils/create-reducer.utils';
import createAction from '../../utils/create-action.utils';
import type {ReduxAction} from '../../types/redux-action.type';

const intialState: number | string = '';

export const SET_SECONDARY_CURRENCY_VALUE: string =
  'set_secondary_currency_value';

export const SECONDARY_CURRENCY_VALUE_CHANGED_BY_PRIMARY: string =
  'secondary_currency_value_changed_by_primary';

export const setSecondaryCurrencyValue = (data: number | string): ReduxAction => {
  return createAction(SET_SECONDARY_CURRENCY_VALUE, data);
}

export const secondaryCurrencyValueChangedByPrimary = (
  data: number | string): ReduxAction => {
  return createAction(SECONDARY_CURRENCY_VALUE_CHANGED_BY_PRIMARY, data);
}

export default createReducer(intialState, {
  [SET_SECONDARY_CURRENCY_VALUE]: (state, {data}) => {
    return data;
  },
  [SECONDARY_CURRENCY_VALUE_CHANGED_BY_PRIMARY]: (state, {data}) => {
    return data;
  },
});
