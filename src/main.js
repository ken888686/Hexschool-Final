import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/scss/forestage.scss';

createApp(App).use(router).mount('#app');
