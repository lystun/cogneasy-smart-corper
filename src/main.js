import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
    confirmButtonColor: '#1a1a54',
    cancelButtonColor: '#ff7674',
};
  
Vue.use(VueSweetalert2, options);

import JsonCSV from 'vue-json-csv' 
Vue.component('downloadCsv', JsonCSV)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
