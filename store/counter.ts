import { Action, Dispatch, Reducer, DeepPartial } from "redux";
import { createActionTypes } from "./utils";

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
  action: Action
) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// ACTION
export const counterIncrement = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.INCREMENT });
};
export const counterIncrementAsync = () => async (dispatch: Dispatch) => {
  return await setTimeout(
    () => dispatch({ type: actionTypes.INCREMENT }),
    2000
  );
};
export const counterDecrement = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.DECREMENT });
};
