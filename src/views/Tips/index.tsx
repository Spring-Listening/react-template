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