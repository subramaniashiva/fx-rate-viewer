import createReducer from '../../utils/create-reducer.utils';
import createAction from '../../utils/create-action.utils';
import currenciesList from '../../config/currencies-list.config';
import type {Currency} from '../../types/currency.type';
import type {ReduxAction} from '../../types/redux-action.type';

const intialState: Currency = currenciesList[0];

export const SET_PRIMARY_CURRENCY: string = 'set_primary_currency';

export const PRIMARY_CURRENCY_CHANGED_BY_SECONDARY: string =
  'primary_currency_changed_by_seondary';

export const setPrimaryCurrency = (data: Currency): ReduxAction => {
  return createAction(SET_PRIMARY_CURRENCY, data);
}

export const primaryCurrencyChangedBySecondary = (
  data: Currency): ReduxAction => {
    return createAction(PRIMARY_CURRENCY_CHANGED_BY_SECONDARY, data);
}

export default createReducer(intialState, {
  [SET_PRIMARY_CURRENCY]: (state, {data}) => {
    return data;
  },
  [PRIMARY_CURRENCY_CHANGED_BY_SECONDARY]: (state, {data}) => {
    return data;
  },
});
