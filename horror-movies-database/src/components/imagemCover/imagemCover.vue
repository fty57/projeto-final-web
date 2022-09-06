<template>
  <div class="imagemCover"></div>
  <div class="imagemGradient"></div>
</template>

<style scoped>
.imagemCover {
  width: 100%;
  height: 745px;
  background-image: url(../../img/TheBlackPhoneWallpaper.jpg);
  background-size: cover;
  color: #000;
  margin-top: -15%;
}
.imagemGradient {
  height: 745px;
  margin-top: -745px;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0,
    transparent 40%,
    transparent 75%,
    rgba(0, 0, 0, 0.8)
  );
}
</style>
