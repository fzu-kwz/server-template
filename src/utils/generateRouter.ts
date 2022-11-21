/**
 * @file 生成路由
 */

import KoaRouter from "@koa/router";
import KoaRoute from "@/types/route";

/**
 * @description 注册路由
 * @param {KoaRouter} router 全局路由
 * @param {Array<KoaRoute>} routes 路由数组
 */
export default (router: KoaRouter, routes: Array<KoaRoute>) => {
  routes.forEach(({ method, path, controller }) => {
    router[method](path, controller);
  });
};
