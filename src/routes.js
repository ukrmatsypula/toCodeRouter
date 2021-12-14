import Vue from "vue";
import router from "vue-router";

Vue.use(router);

import Home from "@/pages/Home";
import Example from "@/pages/Example";

export default new router({
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
  ],
});
