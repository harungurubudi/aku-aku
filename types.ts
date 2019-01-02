import { Store } from "redux";
import { RootState } from "./store";
import { NextContext } from "next";

export interface AppContext extends NextContext {
  isServer?: boolean;
  // tslint:disable-next-line:no-any
  store?: Store<RootState>;
}

// { err: 'undefined' },
//   { req: 'object' },
//   { res: 'object' },
//   { pathname: 'string' },
//   { query: 'object' },
//   { asPath: 'string' },
//   { store: 'object' },
//   { isServer: 'boolean' }
