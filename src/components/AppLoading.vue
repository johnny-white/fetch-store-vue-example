<template>
  <div class="app-loading">
    <div class="app-loading__inner"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/base';

$app-loading-sizer: 28px;

.app-loading {
  display: inline-flex;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__inner {
    flex: 1 0 auto;
    width: $app-loading-sizer;
    height: $app-loading-sizer;
    border: 4px solid $blue;
    border-top-color: $black-008;
    border-left-color: $black-008;
    border-radius: 50%;
    animation: 1s spin linear infinite;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
