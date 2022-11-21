/**
 * @file 数据库配置
 */

import { ConnectionOptions } from "mysql2";

const config: ConnectionOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "fragment",
};

export default config;
