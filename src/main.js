import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import router from './router';
import App from './App.vue';

import 'c3/c3.min.css';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '@/assets/scss/forestage.scss';
import '@/assets/scss/backstage.scss';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

createApp(App)
  .use(VueAxios, axios)
  .use(router)
  .component('Loading', Loading)
  .mount('#app');
