import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome/home',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/welcome/home',
        name: 'BsHome',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '首页',
          icon: 'mdi-home',
          showInFooter: true,
        },
      },
      {
        path: '/welcome/sort',
        name: 'BsSort',
        component: () => import('@/views/Sort.vue'),
        meta: {
          title: '分类',
          icon: 'mdi-sort-reverse-variant',
          showInFooter: true,
        },
      },
      {
        path: '/welcome/cart',
        name: 'BsCart',
        component: () => import('@/views/Cart.vue'),
        meta: {
          title: '购物车',
          icon: 'mdi-cart-arrow-up',
          showInFooter: true,
        },
      },
      {
        path: '/welcome/account',
        name: 'BsAccount',
        component: () => import('@/views/Account.vue'),
        meta: {
          title: '我的',
          icon: 'mdi-account-heart-outline',
          showInFooter: true,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'BsAbout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Layout.vue'),
    meta: {
      title: '关于',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
