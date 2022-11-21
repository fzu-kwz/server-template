/**
 * @file 获取ipv4地址、项目名
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { NetworkInterfaceInfo, networkInterfaces } from "os";

const buffer = readFileSync(resolve("package.json"));
const packages = JSON.parse(buffer.toString());

const networks = networkInterfaces();
const networkList: string[] = [];

Object.keys(networks).forEach((key) => {
  const net = networks[key]?.filter(
    (item) => item.family === "IPv4"
  ) as NetworkInterfaceInfo[];
  networkList.push(net[0].address);
});

export const project = packages.name;
export const address = networkList;
