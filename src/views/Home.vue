<template>
  <Loading :active="isLoading" />
  <Navbar />
  <Banner />
  <FurnitureCompare />
  <Recommendation />
  <Transport />
  <ProductDisplay @updateCart="getCartList" @loading="loading" />
  <ShoppingCart ref="shoppingCart" @loading="loading" />
  <OrderInfo @updateCart="getCartList" @loading="loading" />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import FurnitureCompare from '@/components/FurnitureCompare.vue';
import Recommendation from '@/components/Recommendation.vue';
import Transport from '@/components/Transport.vue';
import ProductDisplay from '@/components/ProductDisplay.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import OrderInfo from '@/components/OrderInfo.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    Navbar,
    Banner,
    FurnitureCompare,
    Recommendation,
    Transport,
    ProductDisplay,
    ShoppingCart,
    OrderInfo,
  },
  methods: {
    getCartList() {
      this.$refs.shoppingCart.getCartList();
    },
    loading(loadingStatus) {
      this.isLoading = loadingStatus;
    },
  },
};
</script>
