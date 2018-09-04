import type {ReduxAction} from '../types/redux-action.type';

export default function createReducer(initialState: any, reducerMap: Object) {
  return (state: any = initialState, action: ReduxAction = {}): any => {
    const reducer: any = reducerMap[action.type];
    const getNewState: any = (oldState: any, currentAction: ReduxAction) => {
      if (Array.isArray(oldState)) {
        return [...reducer(oldState, currentAction.payload)];
      }
      return (typeof oldState === 'object') ?
        ({...oldState, ...reducer(oldState, currentAction.payload)}) :
        reducer(oldState, currentAction.payload);
    };
    return reducer ? getNewState(state, action) : state;
  };
}
