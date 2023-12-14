import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;