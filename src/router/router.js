import {
  createRouter,
  createWebHistory
} from 'vue-router';
import MainPage from '@/components/mainPage/MainPage.vue';
import CatalogPage from '@/components/catalogPage/CatalogPage.vue';




const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage,
  },
  {
    path: '/catalog',
    name: 'catalog-page',
    component: CatalogPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;