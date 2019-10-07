// 导入组件
import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/views/Login"

// 注册路由插件
Vue.use(Router)

// 创建路由对象
export default new Router({

  // 默认声明，url地址栏可省略#号，可忽略
  mode: 'history',

  // 可忽略
  base: process.env.BASE_URL,

  // 路由的配置
  routes: [
    { path: "/login", component: Login }
  ]

})
