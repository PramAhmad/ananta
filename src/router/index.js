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
  },
  {
    path: '/edu',
    name: 'Edu',
    component: () => import('@/views/EduPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});
export default router;