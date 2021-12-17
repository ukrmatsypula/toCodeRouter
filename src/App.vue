<template>
  <div id="app">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <router-link class="logo" to="/">VUE-CLI</router-link>
            <ul class="navbar-list">
              <li
                class="navbar-item"
                v-for="(link, index) in links"
                :key="index"
              >
                <router-link class="navbar-link" :to="link.url">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    links: [
      { title: "Home", url: "/" },
      { title: "Shop", url: "/shop" },
    ],
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-link {
  &.router-link-exact-active {
    color: #541321;
  }
}
</style>
