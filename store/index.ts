import {
  createStore,
  applyMiddleware,
  Action,
  Dispatch,
  Reducer,
  DeepPartial
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

interface State {
  count: number;
}
const exampleInitialState: DeepPartial<State> = {
  count: 0
};

export const actionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

// REDUCERS
export const reducer: Reducer = (
  state: DeepPartial<State> = exampleInitialState,
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

export const countIncrement = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.INCREMENT });
};
export const countDecrement = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.DECREMENT });
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
