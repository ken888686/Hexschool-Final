import axios from 'axios';
import variables from './variables';

/**
 * 取得產品列表
 */
function getProducts() {
  return axios.get(`${variables.url}/customer/${variables.apiKey}/products`);
}

/**
 * 加入購物車
 * @param {string} id 產品id
 */
function addToCart(id) {}

/**
 * 取得購物車列表
 */
function getCart() {
  return axios.get(`${variables.url}/customer/${variables.apiKey}/carts`);
}

export { getProducts, addToCart, getCart };
