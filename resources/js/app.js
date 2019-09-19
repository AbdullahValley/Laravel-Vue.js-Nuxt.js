/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

import Vue from 'vue';

import Vuetify from 'vuetify';


import Routes from '@/js/routes.js';

import App from '@/js/views.js';

Vue.use(Vuetify);

const app = new Vue({

    el: '#app',
    router: Routes,
    render: h => h(App);
});

export default app;