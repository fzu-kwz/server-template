/**
 * @file 分页
 */

interface PageResult<T> {
  page: number;
  size: number;
  totalPage: number;
  total: number;
  list: Array<T>;
}

/**
 * @description 分页函数, 参数默认值为 page: 1, size: 10
 * @param page 页码
 * @param size 数量
 * @param list 列表
 * @returns PageResult<T> 分页后结果
 */
export function paging<T>(
  page: number,
  size: number = 10,
  list: Array<T>
): PageResult<T> {
  // 默认值
  if (isNaN(page)) {
    page = 1;
  }
  if (isNaN(size)) {
    size = 10;
  }

  // 总数
  const total = list.length;
  // 总页数
  const totalPage = Math.ceil(total / size);

  // 列表0条数据
  if (list.length === 0) return { page, size, totalPage, total, list: [] };

  // 参数小于0
  if (page <= 0 || size <= 0) return { page, size, totalPage, total, list: [] };

  // page 超出 totalPage
  if (page > totalPage) return { page, size, totalPage, total, list: [] };

  // 正常情况
  const pagedList = list.filter((item, index) => {
    if (index + 1 > (page - 1) * size && index + 1 <= page * size) {
      return item;
    }
  }) as T[];
  return { page, size, totalPage, total, list: pagedList };
}
