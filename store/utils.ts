export const createActionTypes = (
  stateName: string,
  actions: object
): { [x: string]: string } => {
  let result = {};
  Object.keys(actions).forEach(action => {
    result[action] = `@${stateName}/${action}`;
  });
  return result;
};
