import KoaRouter from "@koa/router";
import generateRouter from "@/utils/generateRouter";

/* 导入路由 */
import user from "@/controller/user";

const router = new KoaRouter({
  prefix: "/api/v1",
});

/* 注册路由 */
generateRouter(router, [...user]);

export default router;
