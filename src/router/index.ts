import MainPage from '@/pages/mainPage.vue';
import ProfilePage from '@/pages/profilePage.vue';
import UsersPage from '@/pages/usersPage.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/users',
    name: 'users',
    component: UsersPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
