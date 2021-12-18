<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <div class="product-slider">
            <Carousel
              :perPage="1"
              paginationEnable="true"
              paginationColor="#b3b3b3"
              paginationActiveColor="#494ce8"
            >
              <slide v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.name" />
                {{ slide.name }}
              </slide>
            </Carousel>
          </div>
          <div class="product-content">
            <h1 class="product-title">{{ product.title }}</h1>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ProductDatail",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    product: null,
  }),
  created() {
    const id = Number(this.$route.params.id);

    this.product = this.$store.getters.getProduct(id);
  },
};
</script>

<style>
.product__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-slider,
.product-content {
  max-width: 48%;
}

.product-title {
  font-weight: bold;
  font-size: 26px;
}

.VueCarousel-inner {
  visibility: visible !important;
  flex-basis: 100% !important;
  width: 100% !important;
}
</style>
