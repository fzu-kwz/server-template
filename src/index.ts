import "module-alias/register";
import Koa from "koa";
import chalk from "chalk";
import moment from "moment";
import koaBody from "koa-body";
import koaStatic from "koa-static";

import "@/config/env";
import { cross } from "@/config/origin";
import { project, address } from "@/config/address";
import router from "@/router";

const App = new Koa();

// request body数据
App.use(
  koaBody({
    multipart: true,
  })
);

// 访问静态资源
App.use(koaStatic("static"));

// 跨域
App.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", cross);
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length,Authorization,Accept,X-Requested-With"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (ctx.method.toLowerCase() === "options") {
    ctx.body = 200;
  } else {
    await next();
  }
});

App.use(router.routes());

App.listen(process.env.SERVER_PORT, () => {
  console.log(
    chalk.blue(
      `${project} running success at ${moment(Date.now()).format(
        "YYYY-MM-DD HH:mm:ss"
      )}`
    )
  );

  switch (process.env.NODE_ENV) {
    case "development":
      console.log(chalk.blue("Development address:"));
      address.forEach((ipv4: string) => {
        console.log(`http://${ipv4}:${process.env.SERVER_PORT}`);
      });
      break;
    case "production":
      console.log(chalk.green("Prodction address:"));
      console.log(`${process.env.PRODUCTION_ADDRESS}`);
      break;
    default:
      console.error("error: Lack of environment differentiation (NODE_ENV)");
  }
});
