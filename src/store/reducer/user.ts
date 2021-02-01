import {Reducer} from 'redux'

import { IAction } from '../types'

export interface userState {
  token: string, 
  username: string,
  openLoginPop: boolean,
  isNeed: Object
}

let initState: userState = {
  token: '',
  username: '',
  openLoginPop: false,
  isNeed: {}
}

let user: Reducer<userState, IAction<any>> = (state = initState, action: IAction<any>) => {
  const {type, payload} = action
  console.log(payload)
  switch (type) {
    case 'setLoginPop':
      return Object.assign({}, state, {
        openLoginPop: payload
      })
    case 'enterInfomation':
      return Object.assign({}, state, {
        isNeed: payload
      })
    default:
      return state
  }
}

export default user