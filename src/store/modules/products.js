import axios from 'axios';

const state = {
  products: [],
  productsLoading: false,
};

const getters = {
  products: (state) => state.products,
  productsLoading: (state) => state.productsLoading,
};

const mutations = {
  GET_PRODUCTS_REQUEST: (state) => {
    state.productsLoading = true;
  },

  GET_PRODUCTS_SUCCESS: (state, payload) => {
    state.products = payload;
    state.productsLoading = false;
  },

  GET_PRODUCTS_FAILURE: (state) => {
    state.products = [];
    state.productsLoading = false;
  },
};

const actions = {
  async getProducts(store) {
    store.commit('GET_PRODUCTS_REQUEST');

    try {
      const data = await axios.get('https://dummyjson.com/products?limit=16');

      store.commit('GET_PRODUCTS_SUCCESS', data.data.products);
    } catch (error) {
      store.commit('GET_PRODUCTS_FAILURE');

      throw new Error(error);
    }
  },
};

const products = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default products;
