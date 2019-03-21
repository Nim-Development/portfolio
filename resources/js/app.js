
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

// Vue router
import Routes from './routes.js';

// Main component
import App from './App.vue';

Vue.use(Vuetify);

// render: h => h(App), = magic for simply rendering App.vue
const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;