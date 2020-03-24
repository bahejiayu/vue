//引入vue,vueRouter,vueX
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入axios跟自己封装的axiosRequest

import axios from 'axios'
//axios.defaults.timeout = 5000 // 请求超时
//axios.defaults.baseURL = '/v2/'  // api 即上面 vue.config.js 中配置的地址
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//引入封装的vue过滤器
import allFilter from '@/assets/filters.js'
Vue.use(allFilter);  


//引入Mine-ui跟一些组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
import { IndexList, IndexSection ,Loadmore} from 'mint-ui';


Vue.component(Loadmore.name, Loadmore);

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);


//Vue.component(IndexList.name, IndexList);
//Vue.component(IndexSection.name, IndexSection);


import Myconfig from './config'
console.log(Myconfig)
Vue.use(Myconfig)

import VueResource from 'vue-resource';

//Vue.use(VueResource);


//router.beforeEach((to,from,next)=>{
//if(to.path == '/login' || to.path == '/register'){
//  next();
//}else{
//  alert('您还没有登录，请先登录');
//  next('/login');
//}
//})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
