<template>
  <AppLoading v-if="productsLoading" />

  <div v-else class="app-container">
    <AppProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import AppLoading from '@components/AppLoading.vue';
import AppProduct from '@components/AppProduct.vue';

export default {
  components: {
    AppLoading,
    AppProduct,
  },

  mounted() {
    this.getProducts();
  },

  computed: {
    ...mapGetters({
      products: 'products/products',
      productsLoading: 'products/productsLoading',
    }),
  },

  methods: {
    ...mapActions({
      getProducts: 'products/getProducts',
    }),
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
}
</style>
