import Vue from 'vue'
import App from './App.vue'
//引入Vue-Router插件
// import VueRouter from 'vue-router'
//使用vue-router
// Vue.use(VueRouter);
import router from './model/r.js';
//创建组件并引入组件
//定义路由表
//配置路由器
// const ROUTER= new VueRouter({
//   //选择模式,hash/history
//   mode:"history",
//   //设置路由表
//   routes:ROUTES,
// });
new Vue({
  el: '#app',
  //注册组件
  router,
  render: h => h(App)
});
