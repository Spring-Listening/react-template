/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2021-01-28 14:16:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-01 13:59:45
 */
import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom'

function Dec() {
  // const history = useHistory()
  const location = useLocation()
  console.log(location)
  const param = useParams()
  console.log(param)
  return (
    <div>
        dec============
      <button>dec</button>
    </div>
    
  )
}

export default Dec;