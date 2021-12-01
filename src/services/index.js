import axios from 'axios';
import variables from './variables';

const customerProductUrl = `${variables.url}/customer/${variables.apiPath}/products`;
const customerCartUrl = `${variables.url}/customer/${variables.apiPath}/carts`;
const customerOrderUrl = `${variables.url}/customer/${variables.apiPath}/orders`;
const adminOrderUrl = `${variables.url}/admin/${variables.apiPath}/orders`;

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
 * 編輯購物車產品數量
 * @param {string} cartId 購物車id
 * @param {number} quantity 數量
 */
function updateQuantity(cartId, quantity) {
  return axios.patch(customerCartUrl, {
    data: {
      id: cartId,
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
  return axios.post(`${customerOrderUrl}`, { data });
}

// 管理者 Admin

/**
 * 取得訂單列表
 */
function getOrderList() {
  return axios.get(adminOrderUrl, {
    headers: {
      authorization: variables.apiKey,
    },
  });
}

/**
 * 修改訂單狀態
 * @param {string} orderId 訂單id
 * @param {bool} paid 是否付款
 */
function updateOrderList(orderId, paid) {
  return axios.put(adminOrderUrl, {
    data: {
      id: orderId,
      paid,
    },
  }, {
    headers: {
      authorization: variables.apiKey,
    },
  });
}

/**
 * 刪除全部訂單
 */
function deleteAllOrderList() {
  return axios.delete(adminOrderUrl, {
    headers: {
      authorization: variables.apiKey,
    },
  });
}

/**
 * 刪除特定訂單
 * @param {string} orderId 訂單id
 */
function deleteOrder(orderId) {
  return axios.delete(`${adminOrderUrl}/${orderId}`, {
    headers: {
      authorization: variables.apiKey,
    },
  });
}

export {
  getProducts,
  addToCart,
  updateQuantity,
  getCart,
  deleteCartItem,
  deleteCart,
  sendOrder,
  getOrderList,
  updateOrderList,
  deleteOrder,
  deleteAllOrderList,
};
