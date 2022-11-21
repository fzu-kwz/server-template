/**
 * @file api日志打印、响应数据格式
 */

import { Context } from "koa";
import chalk from "chalk";
import moment from "moment";

/**
 * @description 打印请求的method、url、时间
 * @param ctx koa上下文
 */
export function apiLog(ctx: Context) {
  const { method, url } = ctx;
  console.log(
    chalk.greenBright(
      method,
      " - ",
      url,
      " - ",
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    )
  );
}

/**
 * @description 响应数据格式
 * @param code HTTP 状态码
 * @param message 返回消息
 * @param data 数据
 */
export class Response {
  code: number;
  message: string;
  data: object | null;
  constructor(code: number, message: string, data: object | null) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
