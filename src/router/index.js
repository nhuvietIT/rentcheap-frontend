import Vue from 'vue';
import VueRouter from 'vue-router';
if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueRouter);
}
// Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Rent Cheap' },
    component: () => import('@/views/Home/HomeRent'),
  },
  {
    path: '/rent',
    name: 'rent',
    meta: { title: 'Rent information' },
    component: () => import('@/views/Rent/InforRent'),
  },
  {
    path: '/sale',
    name: 'sale',
    meta: { title: 'Sale information' },
    component: () => import('@/views/Sale/InforSale'),
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { title: 'admin' },
    component: () => import('@/views/Sale/InforSale'),
  },
  {
    path: '/map',
    name: 'map',
    meta: { title: 'Sale information' },
    component: () => import('@/views/TestLocationMap'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
