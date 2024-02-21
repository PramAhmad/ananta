import { createRouter, createWebHistory } from '@ionic/vue-router';



const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/gesture',
    name: 'Gesture',
    component: () => import('@/views/GesturePage.vue'),
     
  },
  {
    path: '/voice',
    name: 'Voice',
    component: () => import('@/views/VoicePage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;