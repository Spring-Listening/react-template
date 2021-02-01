import { userState } from './reducer/user'

export interface IStoreState {
  user: userState
}

export interface IAction<T> {
  type: string;
  payload: T;
}