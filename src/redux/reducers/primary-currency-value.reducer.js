import createReducer from '../../utils/create-reducer.utils';
import createAction from '../../utils/create-action.utils';
import type {ReduxAction} from '../../types/redux-action.type';

const intialState: number = 0;

export const SET_PRIMARY_CURRENCY_VALUE: string = 'set_primary_currency_value';

export const PRIMARY_CURRENCY_VALUE_CHANGED_BY_SECONDARY: string =
  'primary_currency_value_changed_by_secondary';

export const setPrimaryCurrencyValue = (data: number): ReduxAction => {
  return createAction(SET_PRIMARY_CURRENCY_VALUE, data);
}

export const primaryCurrencyValueChangedBySecondary = (
  data: number):ReduxAction => {
    return createAction(PRIMARY_CURRENCY_VALUE_CHANGED_BY_SECONDARY, data); 
}

export default createReducer(intialState, {
  [SET_PRIMARY_CURRENCY_VALUE]: (state, {data}) => {
    return data;
  },
  [PRIMARY_CURRENCY_VALUE_CHANGED_BY_SECONDARY]: (state, {data}) => {
    return data;
  },
});
