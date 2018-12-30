import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import * as Counter from "./Counter";
import * as App from "./App";
import * as Auth from "./Auth";

export interface RootState {
  counter: Counter.State;
  app: App.State;
  auth: Auth.State;
}
export const rootInitialState = {
  counter: Counter.initialState,
  app: App.initialState,
  auth: Auth.initialState
};

export const rootReducer = combineReducers({
  counter: Counter.reducer,
  app: App.reducer,
  auth: Auth.reducer
});

export const initStore = (initialState = rootInitialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
