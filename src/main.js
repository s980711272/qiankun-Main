import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps} from 'qiankun';
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.use(ElementUI);

//注册子应用
registerMicroApps([
  {
    name: 'vue app', // app name registered
    entry: '//localhost:8081',
    container: '#vue',
    activeRule: '/vue',
    props:{
      id:'111'
    }
  },
  {
    name: 'child app', // app name registered
    entry: '//localhost:8082',
    container: '#child',
    activeRule: '/child',
  },
]);


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
