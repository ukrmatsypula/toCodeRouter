<template>
  <div>
    <img :src="product.img" :alt="product.title" />
    <router-link class="link" :to="`/shop/${product.id}`" tag="p">
      {{ product.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ShopItemList",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.product);
  },
};
</script>

<style lang="scss"></style>
