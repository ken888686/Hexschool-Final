import axios from 'axios';
import variables from './variables';

const customerProductUrl = `${variables.url}/customer/${variables.apiKey}/products`;
const customerCartUrl = `${variables.url}/customer/${variables.apiKey}/carts`;
const customerOrderUrl = `${variables.url}/customer/${variables.apiKey}/orders`;
const adminOrderUrl = `${variables.url}/admin/${variables.apiKey}/orders`;

/**
 * 取得產品列表
 */
function getProducts() {
  return axios.get(customerProductUrl);
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
  return axios.get(customerCartUrl);
}

/**
 * 刪除購物車內特定產品
 * @param {string} cartId 購物車id
 */
function deleteCartItem(cartId) {
  return axios.delete(`${customerCartUrl}/${cartId}`);
}

export {
  getProducts, addToCart, getCart, deleteCartItem,
};
