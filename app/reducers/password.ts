import { Action } from 'redux';
import md5 from 'md5';
import { ADD_PASSWORD } from '../actions/password';
import { Password } from './types';

const defaultState: Password[] = [];

function generateData(data: Password): Password {
  return {
    ...data,
    id: md5(JSON.stringify(data)),
    time: Date.now(),
    isDelete: false
  };
}

export default function password(
  state: Password[] = defaultState,
  action: Action<string>
) {
  switch (action.type) {
    case ADD_PASSWORD:
      return state.concat(generateData((action as any).params));
    default:
      return state;
  }
}
