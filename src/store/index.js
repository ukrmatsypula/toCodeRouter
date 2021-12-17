import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import shop from "@/store/shop";

export default new Vuex.Store({
  modules: {
    shop,
  },
});
