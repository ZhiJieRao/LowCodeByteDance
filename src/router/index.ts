import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/css/nprogress.css'; // 进度条样式

NProgress.configure({ showSpinner: false }); // NProgress Configuration

// 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/visual-editor/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  NProgress.start(); // 开启进度条
  return true;
});

router.afterEach(() => {
  NProgress.done(); // 关闭进度条
});

export default router;
