import axios from 'axios';
import variables from './variables';

/**
 * 取得產品列表
 */
function getProducts() {
  return axios.get(`${variables.url}/customer/${variables.apiKey}/products`);
}

export { getProducts };
