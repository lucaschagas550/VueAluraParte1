import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource'; //para utilizar api
import VueRouter from 'vue-router'; //para utilizar rotas
import { routes } from './routes'; //utiliza chaves quando não se usa export default 

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history' // remove a utilização do # na url ex: localhost:3000/#/
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})