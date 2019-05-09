import Vue from 'vue'
import App from './App.vue'
import router from './model/r.js';
new Vue({
  el: '#app',
  //注册组件
  router,
  render: h => h(App)
});
