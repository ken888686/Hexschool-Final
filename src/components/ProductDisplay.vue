<template>
  <section class="wrap productDisplay">
    <div class="d-flex align-items-center mb-2">
      <select name="" class="productSelect mb-0 me-3" @change="onChange">
        <option value="全部">全部</option>
        <option value="床架">床架</option>
        <option value="收納">收納</option>
        <option value="窗簾">窗簾</option>
      </select>
      <button type="button" class="btn btn-outline-dark" @click="getProducts">更新產品列表</button>
    </div>
    <ul class="productWrap">
      <Loading :active="isLoading" />
      <li class="productCard" v-for="item in products" :key="item.id">
        <h4 class="productType">新品</h4>
        <img :src="item.images" :alt="item.description" />
        <a href="#" class="addCardBtn" @click.prevent="addToCart(item.id)">加入購物車</a>
        <h3>{{ item.title }}</h3>
        <del class="originPrice">NT${{ item.origin_price }}</del>
        <p class="nowPrice">NT${{ item.price }}</p>
      </li>
    </ul>
  </section>
</template>
<script>
import * as service from '@/services';

export default {
  data() {
    return {
      isLoading: false,
      allProducts: [],
      products: [],
    };
  },
  methods: {
    onChange(event) {
      const category = event.target.value;
      if (category === '全部') {
        this.products = this.allProducts;
        return;
      }

      this.products = this.allProducts.filter((item) => item.category === category);
    },
    getProducts() {
      this.isLoading = true;
      service.getProducts().then((res) => {
        this.products = res.data.products;
        this.allProducts = res.data.products;
        this.isLoading = false;
      });
    },
    addToCart(id) {
      console.log(id);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
