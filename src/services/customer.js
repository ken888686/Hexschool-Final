import axios from 'axios';

const url = 'https://livejs-api.hexschool.io/api/livejs/v1';
const apiKey = 'ken888686';

/**
 * 取得產品列表
 */
async function getProductList() {
  return await axios.get(`${url}/customer/${apiKey}/products`);
}

export { getProductList };
