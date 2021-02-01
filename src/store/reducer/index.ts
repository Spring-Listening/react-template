import {combineReducers, Reducer} from 'redux'
import { IStoreState, IAction } from '../types'
import user from './user'


let reducer: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
  user
})

export default reducer