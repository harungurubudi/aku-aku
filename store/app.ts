import { Action, Dispatch, Reducer, DeepPartial } from "redux";

// STATE
export interface State {
  isDarkMode: boolean;
}
export const initialState: DeepPartial<State> = {
  isDarkMode: false
};

// TYPES
export const actionTypes = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE"
};

// REDUCERS
export const reducer: Reducer = (
  state: DeepPartial<State> = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      };
    default:
      return state;
  }
};

// ACTION
export const appToggleDarkMode = () => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.TOGGLE_DARK_MODE });
};
