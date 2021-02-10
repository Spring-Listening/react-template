/*
 * @Descripttion:
 * @version:
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-01-13 19:45:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-10 22:40:50
 */

import * as React from 'react';
import * as ReactDOM from "react-dom";
import './theme/style.less';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store'
import zhCN from 'antd/es/locale/zh_CN';
import App from './App';

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>
, mountNode);
