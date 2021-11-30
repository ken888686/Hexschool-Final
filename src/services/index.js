import axios from 'axios';
import variables from './variables';

const customerProductUrl = `${variables.url}/customer/${variables.apiKey}/products`;
const customerCartUrl = `${variables.url}/customer/${variables.apiKey}/carts`;
const customerOrderUrl = `${variables.url}/customer/${variables.apiKey}/orders`;
const adminOrderUrl = `${variables.url}/admin/${variables.apiKey}/orders`;

// 產品 Product
/**
 * 取得產品列表
 */
function getProducts() {
  return axios.get(customerProductUrl);
}

// 購物車 Cart

/**
 * 加入購物車
 * @param {string} id 產品id
 * @param {number} quantity 數量
 */
function addToCart(id, quantity) {
  return axios.post(customerCartUrl, {
    data: {
      productId: id,
      quantity,
    },
  });
}

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

/**
 * 清除購物車內全部產品
 */
function deleteCart() {
  return axios.delete(`${customerCartUrl}`);
}

// 訂單 Order

/**
 * 送出購買訂單
 * @param {訂單資料} data object
 */
function sendOrder(data) {
  return axios.delete(`${customerOrderUrl}`, data);
}

export {
  getProducts, addToCart, getCart, deleteCartItem, deleteCart, sendOrder,
};
