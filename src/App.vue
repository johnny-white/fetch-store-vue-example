<template>
  <app-loading v-if="productsLoading" />

  <div
    v-else
    class="app-container"
  >
    <app-product
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

  computed: {
    ...mapGetters({
      products: 'products/products',
      productsLoading: 'products/productsLoading',
    }),
  },

  mounted() {
    this.getProducts();
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
