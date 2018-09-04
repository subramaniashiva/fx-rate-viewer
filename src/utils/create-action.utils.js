import type {ReduxAction} from '../types/redux-action.type';

export default function createAction(type: string, data: any): ReduxAction {
  return {
    type,
    payload: {
      data,
    },
  };
};
