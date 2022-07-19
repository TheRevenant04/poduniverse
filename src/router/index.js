/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/podcast/:id',
    name: 'podcast',
    component: () =>
      import(/* webpackChunkName: "podcast" */ '@/views/Podcast.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
