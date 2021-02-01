/** 触发提示登录框弹起 */ 
export const handleLoginPop = (openLoginPop: boolean) => {
  return {
    type : 'setLoginPop',
    payload: openLoginPop
  }
}

/** 企业信息是否完善了 */ 
export const isNeedEnterInfo = (isNeed: object) => {
  return {
    type : 'enterInfomation',
    payload: isNeed
  }
}

