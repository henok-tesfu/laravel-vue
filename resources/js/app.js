require('./bootstrap');

import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import vueRouter from 'vue-router';
Vue.use(vueRouter);

const router = new vueRouter({
    mode: 'history',
    routes: require('./routes.js')
})

const store = new vuex.Store(
    {
        state: {},
        mutations: {},
        actions: {},
    }
)

const app = new Vue({
    router,
    store,
    el: '#app'
})