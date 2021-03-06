import Vue from 'vue';
import App from './App.vue';
import router from './router';
import http from '@/http';
import 'lib-flexible/flexible';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.prototype.$bus = new Vue();
new Vue({
    render: h => h(App),
    router
}).$mount('#app')