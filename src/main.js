import Vue from 'vue';
import store from './store';
import App from './App';
import router from './router';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
