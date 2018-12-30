import { Dispatch, Reducer, DeepPartial } from "redux";
import { createActionTypes, BaseAction } from "./utils";

// STATE
export interface State {
  count: number;
}
export const initialState: DeepPartial<State> = {
  count: 0
};

// TYPES
enum ActionTypes {
  INCREMENT,
  DECREMENT
}
export const actionTypes = createActionTypes("counter", ActionTypes);

// REDUCERS
export const reducer: Reducer = (
  state: DeepPartial<State> = initialState,
  action: BaseAction
) => {
  switch (action.type) {
    case actionTypes[ActionTypes.INCREMENT]:
      return {
        ...state,
        count: state.count + action.payload
      };
    case actionTypes[ActionTypes.DECREMENT]:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// ACTION
export const counterIncrement = (amount: number = 1) => (
  dispatch: Dispatch
) => {
  return dispatch({
    type: actionTypes[ActionTypes.INCREMENT],
    payload: amount
  });
};
export const counterIncrementAsync = () => async (dispatch: Dispatch) => {
  return await setTimeout(
    () => dispatch({ type: actionTypes[ActionTypes.INCREMENT] }),
    2000
  );
};
export const counterDecrement = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes[ActionTypes.DECREMENT] });
};
