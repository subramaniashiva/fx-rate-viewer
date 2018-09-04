import createReducer from '../../utils/create-reducer.utils';
import createAction from '../../utils/create-action.utils';
import currenciesList from '../../config/currencies-list.config';
import type {Currency} from '../../types/currency.type';
import type {ReduxAction} from '../../types/redux-action.type';

const intialState: Currency = currenciesList[1];

export const SET_SECONDARY_CURRENCY: string = 'set_secondary_currency';

export const SECONDARY_CURRENCY_CHANGED_BY_PRIMARY: string =
  'secondary_currency_changed_by_primary';

export const setSecondaryCurrency = (data: Currency): ReduxAction => {
  return createAction(SET_SECONDARY_CURRENCY, data);
}

export const secondaryCurrencyChangedByPrimary = (
  data: Currency): ReduxAction => {
  return createAction(SECONDARY_CURRENCY_CHANGED_BY_PRIMARY, data)
}

export default createReducer(intialState, {
  [SET_SECONDARY_CURRENCY]: (state, {data}) => {
    return data;
  },
  [SECONDARY_CURRENCY_CHANGED_BY_PRIMARY]: (state, {data}) => {
    return JSON.parse(JSON.stringify(data));
  },
});
