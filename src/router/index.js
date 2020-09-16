import Vue from 'vue';
import VueRouter from 'vue-router';
import Manage from '../views/Manage.vue';
import Register from '@/views/Register.vue';
import Edit from '@/views/Edit.vue';
import View from '@/views/View.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/manage",
    name: "manage",
    component: Manage
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/view",
    name: "view",
    component: View
  },
  {
    path: "/edit",
    name: "edit",
    component: Edit
  },
 {
    path: "/",
    redirect: "/manage"
  },
   {
    path: "*",
    redirect: "/manage" // page not found
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
