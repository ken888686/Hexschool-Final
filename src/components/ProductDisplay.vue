<template>
  <section class="wrap productDisplay">
    <div class="d-flex align-items-center mb-2">
      <select name="" class="productSelect mb-0 me-3" @change="onChange" v-model="category">
        <option v-for="(category, index) in categories" :key="index" :value="category">
          {{ category }}
        </option>
      </select>
      <button type="button" class="btn btn-outline-dark" @click="getProducts">更新產品列表</button>
    </div>
    <div class="d-flex my-3">
      <input
        class="form-control me-2 searchInput"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="keyword"
      />
      <button class="btn btn-outline-success searchBtn" type="submit" @click.prevent="search">
        Search
      </button>
    </div>
    <ul class="productWrap">
      <li class="productCard" v-for="item in products" :key="item.id">
        <h4 class="productType">新品</h4>
        <img :src="item.images" :alt="item.description" />
        <a href="#" class="addCardBtn" @click.prevent="addToCart(item.id, 1)"> 加入購物車 </a>
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
  emits: ['updateCart', 'loading'],
  data() {
    return {
      allProducts: [],
      products: [],
      categories: [],
      category: '',
      keyword: '',
    };
  },
  methods: {
    onChange(event) {
      if (event.target.value === '全部') {
        this.products = this.allProducts;
        return;
      }
      this.products = this.allProducts.filter((item) => item.category === event.target.value);
    },
    getCategoryList(data) {
      this.categories = [];
      data
        .map((item) => item.category)
        .forEach((category) => {
          if (this.categories.indexOf(category) < 0) {
            this.categories.push(category);
          }
        });
      this.categories.unshift('全部');
    },
    getProducts() {
      this.$emit('loading', true);
      service.getProducts().then((res) => {
        this.products = res.data.products;
        this.allProducts = res.data.products;
        this.getCategoryList(res.data.products);
        this.category = '全部';
        this.$emit('loading', false);
      });
    },
    addToCart(id, quantity) {
      this.$emit('loading', true);
      service.addToCart(id, quantity).then((res) => {
        this.$emit('updateCart');
        this.$emit('loading', false);
      });
    },
    search() {
      const keyword = this.keyword.trim().toLowerCase();
      console.log(keyword);
      this.products = this.allProducts.filter(
        (item) => item.title.toLowerCase().match(keyword) !== null,
      );
      this.keyword = '';
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
