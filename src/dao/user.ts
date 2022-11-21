import DBUtil from "@/utils/connection";

/**
 * @description 查询用户
 * @param {string} username 用户名
 * @param {string} password 密码
 * @return {Promise<any[]>} 查询到的用户
 */
export async function selectUser(
  username: string,
  password: string
): Promise<any[]> {
  return await DBUtil.query(
    "select username from user where username=? and password=?",
    [username, password]
  );
}
