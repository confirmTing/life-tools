export const ADD_PASSWORD = 'ADD_PASSWORD';

export function addPassword(params: any) {
  return {
    type: ADD_PASSWORD,
    params
  };
}
