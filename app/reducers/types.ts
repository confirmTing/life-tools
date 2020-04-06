import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type Password = {
  psd: string;
  id: string;
  website: string;
  time: number;
  isDelete: boolean;
};

export type StateType = {
  counter: number;
  passwordList: Password[];
};

export type GetState = () => StateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<StateType, Action<string>>;
