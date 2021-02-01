/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2021-01-28 14:50:43
 * @LastEditors: 
 * @LastEditTime: 2021-02-01 14:00:14
 */
import React from 'react';

export interface IRouteBase {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  // 是否精确匹配
  exact?: boolean;
  // 路由信息
  meta?: IRouteMeta;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
}

export interface IRouteMeta {
  title?: string;
  icon?: string;
}

export interface IRoute extends IRouteBase {
  children?: IRoute[];
}

/**
 * routes 第一级路由负责最外层的路由渲染，比如 userLayout 和 Layout 的区分
 * 所有系统内部存在的页面路由都要在此地申明引入，而菜单栏的控制是支持异步请求控制的
 */

const routes: IRoute[] = [
  {
    path: '/home',
    exact: true,
    component: React.lazy(() => import('@views/Home'))
  },
  {
    path: '/tip',
    exact: false,
    component: React.lazy(() => import('@views/Tips')),
    children: [
      {
        path: '/tip/dec',
        component: React.lazy(() => import('@src/views/Tips/Dec'))
      },
      {
        path: '/tip/trc',
        component: React.lazy(() => import('@src/views/Tips/Trc'))
      }
    ]
  },
  
];

export default routes;
