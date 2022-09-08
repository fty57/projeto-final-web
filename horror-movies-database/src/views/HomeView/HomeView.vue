<script setup lang="ts">
import NavBarVue from "@/components/NavBar/NavBar.vue";
import Carousel from "../../components/Carousel/Carousel.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ImagemCover from "../../components/ImageCover/ImageCover.vue";
import MainFooter from "../../components/MainFooter/MainFooter.vue";
</script>

<template>
  <div class="HomeMain">
    <NavBarVue></NavBarVue>
  </div>

  <div class="HomeOffMain">
    <div class="HomeBody">
      <ImagemCover />
      <Carousel />
      <Carousel />
      <MainFooter />
    </div>
  </div>
</template>

<style scoped>
.HomeMain {
  padding-top: 2.5%;
  background-color: transparent;
}
.HomeBody {
  background-color: #131212;
}
</style>
