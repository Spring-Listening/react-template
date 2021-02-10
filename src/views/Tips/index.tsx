/*
 * @Descripttion:
 * @version:
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-01-28 14:20:56
 * @LastEditors:
 * @LastEditTime: 2021-02-10 22:41:35
 */
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'

function Tips({routes}) {
  // const history = useHistory()
  console.log(routes)
  return (
    <div>
        tips============
      <button>tips</button>

      <Switch>
        {
          routes.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                render={() => (
                  <item.component routes={item.children}/>
                )}
              />
            )
          })
        }
      </Switch>
    </div>

  )
}

export default Tips;
