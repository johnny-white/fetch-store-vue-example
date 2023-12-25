<template>
  <div class="app-product">
    <h3 class="app-product__title">{{ product.title }}</h3>

    <p class="app-product__description">{{ product.description }}</p>

    <p class="app-product__price">{{ product.price }}$</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables/base';

.app-product {
  border: 1px solid $black-008;
  border-radius: 4px;
  padding: 8px 16px;

  &__title {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 14px;
  }

  &__price {
    color: $black-064;
    font-size: 14px;
  }
}
</style>
