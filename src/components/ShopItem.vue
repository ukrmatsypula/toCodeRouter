<template>
  <div>
    <img :src="product.img" :alt="product.title" />
    <p>{{ product.title }}</p>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
