import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { fixrem } from '@/utils';
// import store from "./store";

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetify = createVuetify({
  components,
  directives,
});

fixrem();
createApp(App).use(router).use(vuetify).mount('#app');
