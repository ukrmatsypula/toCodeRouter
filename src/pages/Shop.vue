<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Shop page</h1>
        <div class="item-wrapper">
          <ShopItem
            v-for="product in shopList"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem.vue";

export default {
  name: "Shop",
  components: {
    ShopItem,
  },
  data: () => ({
    shopList: null,
  }),

  created() {
    this.shopList = this.$store.getters.getShopList;
    console.log(this.shopList);
  },
};
</script>

<style lang="scss">
.item {
  max-width: 48%;
  text-align: center;

  p {
    font-size: 22px;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
