import Vue from "vue";
import router from "vue-router";

Vue.use(router);

import Home from "@/pages/Home";
import Example from "@/pages/Example";
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
      path: "/example",
      name: "example",
      component: Example,
    },

    {
      path: "*",
      name: "notFound",
      component: notFound,
    },
  ],
});
