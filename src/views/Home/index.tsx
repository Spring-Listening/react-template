/*
 * @Descripttion:
 * @version:
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-01-28 14:48:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-10 22:41:06
 */

import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import { handleLoginPop, isNeedEnterInfo } from '@src/store/action/user';
import { useSelector ,useDispatch } from 'react-redux';
import { IStoreState } from '@src/store/types'

function Home({routes}) {
  console.log(routes)
  const history = useHistory()
  const dispatch = useDispatch()
  const {openLoginPop} = useSelector((state: IStoreState) => ({
    openLoginPop: state.user.openLoginPop
  }))
  return (
    <div>
      <div onClick={() => {
        dispatch(handleLoginPop(!openLoginPop))
      }}>
        homexxxxx========home
      </div>
      <Link to="/tip/trc?b=33">goTips</Link>
      <button onClick={() => {
        history.push({
          pathname: '/tip/dec',
          state: {
            a: 1,
            b: 2
          }
        })
      }}>
        home按钮
      </button>
      <div>
        hahah=======dfslsfkkd
      </div>
    </div>

  )
}

export default Home;
