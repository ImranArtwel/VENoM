// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Auth from "vue-token";
import vueRouter from 'vue-router';
import App from './App'

import Register from './components/register.vue'
import Login from './components/login.vue'
import AddTask from './components/task.vue'
import Tasks from './components/viewtask.vue'

Vue.config.productionTip = false

Vue.use(vueRouter);

const routes = [
{path: '/', component: Register },
{path: '/login', component: Login },
{path: '/addtask', component: AddTask},
{path: '/tasks', component: Tasks}
];

const router = new vueRouter({
  routes,
  mode:'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})

export default router;
