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