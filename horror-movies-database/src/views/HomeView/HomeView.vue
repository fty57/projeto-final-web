<script setup lang="ts">
import NavBarVue from "@/components/NavBar/NavBar.vue";
import MovieCard from "@/components/MovieCard/MovieCard.vue";
import MovieGroup from "@/components/MovieGroup/MovieGroup.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
</script>

<template>
  <div class="HomeMain">
    <NavBarVue></NavBarVue>
    <div style="height: 500px"></div>
  </div>

  <div class="HomeOffMain">
    <div class="HomeBody">
      <MovieGroup></MovieGroup>
    </div>
  </div>
</template>

<style scoped>
.HomeMain {
  padding: 2.5%;
  background-color: #c9c9c9;
}
.HomeBody {
  background-color: #141810;
}
</style>
