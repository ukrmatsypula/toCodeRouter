<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="not-found">
          <h1 class="title">Page not found</h1>
          <p>Go to <router-link to="/" class="link">main page?</router-link></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss">
.not-found {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
