<template>
  <BaseHeader />
  <BaseBackdrop />
  <div class="site-body">
    <div class="backdrop">
      <Carousel />
      <CarouselBottom />
    </div>
  </div>

  <BaseFooter />
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BaseHeader from "../../components-v2/BaseHeader/BaseHeader.vue";
import BaseBackdrop from "../../components-v2/BaseBackdrop/BaseBackdrop.vue";
import Carousel from "../../components/Carousel/Carousel.vue";
import CarouselBottom from "../../components/CarouselBottom/CarouselBottom.vue";
import BaseFooter from "../../components-v2/BaseFooter/BaseFooter.vue";
</script>

<style scoped>
.site-body {
  height: 1300px;
}

.backdrop {
  background-image: none;
  padding-top: 400px;
}

</style>
