import { createStore } from 'vuex';

// modules
import products from '@/store/modules/products';

const modules = {
  products,
};

const store = createStore({
  modules,
});

export default store;
