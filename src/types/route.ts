import { DefaultContext, DefaultState, Middleware } from "koa";

/**
 * @description Route format
 * @param method HTTP method
 * @param path HTTP url
 * @param middleware Array Of Koa Middleware
 * @param controller Koa Middleware (handle corresponding request)
 */
export default interface Route {
  method: "get" | "post" | "put" | "delete";
  path: string;
  middleware?: Middleware<DefaultState, DefaultContext>[];
  controller: Middleware<DefaultState, DefaultContext>;
}
