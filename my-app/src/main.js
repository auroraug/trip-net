import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// VueAxios 与 axios 的位置不能交换，否则报错


Vue.config.productionTip = false

//完整引入
Vue.use(ElementUI)
Vue.use( VueAxios,axios )

//按需引入
// import {Row, Button} from 'element-ui';
// Vue.use(Button)
// Vue.use(Row)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
