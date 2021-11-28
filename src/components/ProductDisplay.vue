<template>
  <section class="wrap productDisplay">
    <select name="" class="productSelect" @change="onChange">
      <option value="全部">全部</option>
      <option value="床架">床架</option>
      <option value="收納">收納</option>
      <option value="窗簾">窗簾</option>
    </select>
    <ul class="productWrap">
      <li class="productCard" v-for="item in productList" :key="item.id">
        <h4 class="productType">新品</h4>
        <img :src="item.images" :alt="item.description" />
        <a href="#" class="addCardBtn">加入購物車</a>
        <h3>{{ item.title }}</h3>
        <del class="originPrice">NT${{ item.origin_price }}</del>
        <p class="nowPrice">NT${{ item.price }}</p>
      </li>
    </ul>
  </section>
</template>
<script>
import * as customerService from '@/services/customer';

export default {
  date() {
    return {
      selected: '',
      productList: [],
    };
  },
  methods: {
    onChange(event) {
      this.productList = this.productList.filter((item) => item.category === event.target.value);
      console.log(this.productList);
    },
    async getProductList() {
      await customerService.getProductList().then((res) => {
        this.productList = res.data.products;
      });
    },
  },
  mounted() {
    this.getProductList();
  },
};
</script>
