/*
 * @Descripttion:
 * @version:
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-01-28 14:07:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-19 22:12:59
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { hot } from "react-hot-loader/root";
import routers from "@src/routers"
import { Spin } from 'antd';

function App() {
  return (
    <>
      <Suspense fallback={<Spin size="large" />}>
        <Router basename="/react-template">
          <Switch>
            {routers.map((item) => {
              return (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  render={() => <item.component routes={item.children} />}
                />
              );
            })}
            <Redirect from="/*" to="/home" />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default hot(App);
