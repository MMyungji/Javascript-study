import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element ui import
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 다국어지원 -> 한국어 설정
import locale from 'element-ui/lib/locale/lang/ko';

Vue.use(ElementUI,{locale});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
