// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Page from '@/components/Page/Page.vue';
import SignIn from '@/components/SignIn/SignIn.vue';
import Navigation from "@/components/Navigation/Navigation.vue";
import Loading from "@/components/Loading/Loading.vue";
import Error from "@/components/Error/Error.vue";
import Menu from "@/components/Menu/Menu.vue";
import AboutWe from "@/components/AboutWe/AboutWe.vue";
import Book from "@/components/Book/Book.vue";


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
    path: "/Book",
    name: 'Book',
    component: Book
  },
  {
    path: "/Loading",
    name: 'Loading',
    component: Loading
  },
  {
    path: "/Error",
    name: 'Error',
    component: Error
  },
  {
    path: "/Menu",
    name: 'Menu',
    component: Menu
  },
  {
    path: "/Aboutwe",
    name: 'AboutWe',
    component: AboutWe
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
