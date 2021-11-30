<template>
  <section class="shoppingCart">
    <h3 class="section-title">我的購物車</h3>
    <div class="overflowWrap">
      <table class="shoppingCart-table">
        <tr>
          <th width="40%">品項</th>
          <th width="15%">單價</th>
          <th width="15%">數量</th>
          <th width="15%">金額</th>
          <th width="15%"></th>
        </tr>
        <tr v-for="item in cartList" :key="item.id">
          <td>
            <div class="cardItem-title">
              <img :src="item.product.images" :alt="item.title" />
              <p>{{ item.product.title }}</p>
            </div>
          </td>
          <td>NT${{ item.product.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>NT${{ item.product.price * item.quantity }}</td>
          <td class="discardBtn">
            <a href="#" class="material-icons" @click.prevent="deleteItem(item.id)"> clear </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#" class="discardAllBtn" @click.prevent="deleteCart">刪除所有品項</a>
          </td>
          <td></td>
          <td></td>
          <td>
            <p>總金額</p>
          </td>
          <td>NT${{ sum }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>
<script>
import * as service from '@/services';

export default {
  data() {
    return {
      cartList: [],
      sum: 0,
    };
  },
  methods: {
    refreshCart(carts) {
      this.cartList = carts;
      this.sum = this.cartList.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0);
    },
    getCartList() {
      service.getCart().then((res) => {
        this.refreshCart(res.data.carts);
      });
    },
    deleteItem(cartId) {
      service.deleteCartItem(cartId).then((res) => {
        this.refreshCart(res.data.carts);
      });
    },
    deleteCart() {
      service.deleteCart().then((res) => {
        this.refreshCart(res.data.carts);
      });
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>
