import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import '@fontsource/roboto';
import '@mdi/font/css/materialdesignicons.css';
import { getUserInfo } from './utils/auth.utils';

const user = getUserInfo();
if (user) {
  store.dispatch('saveUser', user);
}

createApp(App).use(vuetify).use(i18n).use(store).use(router).mount('#app');
