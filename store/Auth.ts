import { Dispatch, Reducer, DeepPartial } from "redux";
import { createActionTypes, BaseAction } from "./utils";
import { AxiosResponse, AxiosError } from "axios";
import { DoRequest, Api } from "./api";

// STATE
export interface State {
  data: object;
  loading: boolean;
  error: object;
}
export const initialState: DeepPartial<State> = {
  data: {},
  loading: false,
  error: {}
};

// TYPES
enum ActionTypes {
  AUTH_GITHUB_START,
  AUTH_GITHUB_SUCCESS,
  AUTH_GITHUB_ERROR,
  AUTH_GITHUB_END,
  AUTH_GITHUB_RESET
}
export const actionTypes = createActionTypes("auth", ActionTypes);

// REDUCERS
export const reducer: Reducer = (
  state: DeepPartial<State> = initialState,
  action: BaseAction
) => {
  switch (action.type) {
    case actionTypes[ActionTypes.AUTH_GITHUB_START]:
      return {
        ...state,
        loading: true
      };
    case actionTypes[ActionTypes.AUTH_GITHUB_SUCCESS]:
      return {
        ...state,
        data: action.payload
      };
    case actionTypes[ActionTypes.AUTH_GITHUB_ERROR]:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes[ActionTypes.AUTH_GITHUB_END]:
      return {
        ...state,
        loading: false
      };
    case actionTypes[ActionTypes.AUTH_GITHUB_RESET]:
      return initialState;
    default:
      return state;
  }
};

// ACTION

export const authGithub = () => (dispatch: Dispatch<BaseAction>) => {
  return DoRequest<BaseAction>({
    apiMethod() {
      return Api.get("/");
    },
    onStart() {
      dispatch({ type: actionTypes[ActionTypes.AUTH_GITHUB_START] });
    },
    onSuccess(data: AxiosResponse) {
      dispatch({
        type: actionTypes[ActionTypes.AUTH_GITHUB_SUCCESS],
        payload: data
      });
    },
    onError(e: AxiosError) {
      dispatch({
        type: actionTypes[ActionTypes.AUTH_GITHUB_ERROR],
        payload: e
      });
    },
    onEnd() {
      dispatch({ type: actionTypes[ActionTypes.AUTH_GITHUB_END] });
    }
  });
};
