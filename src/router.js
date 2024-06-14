// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Page from '@/components/Page/Page.vue';
import SignIn from '@/components/SignIn/SignIn.vue';
import Navigation from "@/components/Navigation/Navigation.vue";
import Loading from "@/components/Loading/Loading.vue";

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
  },
  {
    path: "/Navigation",
    name: 'Navigation',
    component: Navigation
  },
  {
    path: "/Loading",
    name: 'Loading',
    component: Loading
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
