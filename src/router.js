// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Page from '@/components/Page/Page.vue';
import SignIn from '@/components/SignIn/SignIn.vue';

const routes = [
  {
    path: '/',
    redirect: '/SignIn' // Redirect root to SignIn page
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/Page',
    name: 'Page',
    component: Page
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
