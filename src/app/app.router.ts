import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './app.routes';

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [...appRoutes],
});

/**
 * 默认导出
 */
export default router;
