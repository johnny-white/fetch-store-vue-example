import { createApp } from 'vue';

import store from '@/store/index';

import '@/assets/styles/style.scss';

import App from '@/App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
