import { Action } from "redux";

export function createActionTypes(
  stateName: string,
  ActionsEnum: object
): string[] {
  let result = [];
  Object.keys(ActionsEnum).forEach(action => {
    result[action] = `@${stateName}/${ActionsEnum[action]}`;
  });
  return result;
}

export interface BaseAction extends Action {
  // tslint:disable-next-line:no-any
  payload?: any;
  // tslint:disable-next-line:no-any
  meta?: any;
}
