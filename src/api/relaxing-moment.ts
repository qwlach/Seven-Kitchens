import http from "./request";
import { domain_list, tianapiKey } from "./domain";

export const getPoisonousChickenSoup = () => {
  return http.get(`${domain_list["tianapi"]}/dujitang/index?key=${tianapiKey}`);
};
