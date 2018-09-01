export default function createReducer(initialState: any, reducerMap: Object) {
  return (state: any = initialState, action: Object = {}) => {
    const reducer: any = reducerMap[action.type];
    const getNewState = (oldState: any, currentAction: Object) => {
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
