<script>
import "swiper/css";
import "./style.css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <!-- CardGroupTitle -->
  <div class="CardGroupTitle">
    <h3 class="CardTitle">FILMES ANGUSTIANTES</h3>
    <h5 class="CardSubtitle">16 Anos</h5>
  </div>

  <swiper
    ref="{swiperRef}"
    :slidesPerView="5"
    :centeredSlides="true"
    :spaceBetween="30"
    :navigation="true"
    class="mySwiper"
    loop
  >
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/TheBlackPhone.jpg" alt="" class="card-img" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/cemiterio.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/entidade.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/exorcista.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/Iluminado.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/itcoisa.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/jason.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/panico.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
    <swiper-slide>
      <div class="image-content">
        <div class="card-image">
          <img src="../../img/Umma.jpg" alt="" class="card-img" />
        </div></div
    ></swiper-slide>
  </swiper>

  <!-- Documentation: https://swiperjs.com/swiper-api -->
  <p class="append-buttons"></p>
</template>
