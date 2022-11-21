import { createConnection } from "mysql2";
import config from "@/config/database";

const connection = createConnection(config);

/**
 * @description 发送sql请求
 * @param {strin} sql sql语句
 * @param {any | any[] | { [param: string]: any }} params 参数
 */
export default class DBUtil {
  static query(
    sql: string,
    params?: any | any[] | { [param: string]: any }
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (err, result, fields) => {
        if (err) {
          console.log(err.message);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
