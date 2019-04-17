import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home';
import Categery from '../components/Categery';
import Cart from '../components/Cart';
import Me from '../components/Me';
Vue.use(VueRouter);

export default new VueRouter({
    mode:"hash",
    routes:[
        {name:'home',path:'/home',component:Home},
        {name:'categery',path:'/categery',component:Categery},
        {name:'cart',path:'/cart',component:Cart},
        {name:'me',path:'/me',component:Me},
        {name:'default',path:'*',redirect:'/Home'}
        ]
});