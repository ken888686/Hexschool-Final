import axios from 'axios';

const url = 'https://livejs-api.hexschool.io/api/livejs/v1';
const apiKey = 'ken888686';

/**
 * 取得產品列表
 */
function getProducts() {
  return axios.get(`${url}/customer/${apiKey}/products`);
}

export { getProducts };
