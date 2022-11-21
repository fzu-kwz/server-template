/**
 * @file user接口
 */

import Route from "@/types/route";
import { LoginUser } from "@/types";
import { apiLog, Response } from "@/utils/api-utils";
import { getUser } from "@/service/user";

const baseUrl = "/user";

const routes: Array<Route> = [
  {
    path: baseUrl,
    method: "post",
    controller: async (ctx) => {
      apiLog(ctx);
      const { username, password } = ctx.request.body;
      const result: Array<LoginUser> = await getUser(username, password);
      ctx.set("Content-Type", "application/json");
      ctx.body = new Response(
        200,
        "success",
        result.length === 0 ? null : result[0]
      );
    },
  },
];

export default routes;
