<script setup lang="ts">
import NavBarVue from "@/components/NavBar/NavBar.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

</script>

<template>
  <div class="HomeMain">
    <NavBarVue></NavBarVue>
  </div>

  <div class="HomeOffMain">
    <div class="HomeBody">
    </div>
  </div>
</template>

<style scoped>
.HomeMain {
  width: 100%;
  height: 15%;
  padding-top: 2.5%;
  background-color: transparent;
}
.HomeBody {
  width: 100%;
  height: 85%;
  background-color: #131212;
}
</style>
