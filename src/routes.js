import Vue from "vue";
import router from "vue-router";

Vue.use(router);

import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDatail from "@/pages/ProductDatail";
import notFound from "@/pages/404";

export default new router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },

    {
      path: "/shop/:id",
      name: "product",
      component: ProductDatail,
    },

    {
      path: "*",
      name: "notFound",
      component: notFound,
    },
  ],
});
