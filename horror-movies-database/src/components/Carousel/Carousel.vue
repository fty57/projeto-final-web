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
    style="padding: 0px 40px"
    loop
  >
    <swiper-slide v-for="(movie, index) in movies">
      <a :href="movie.imgHref" :key="movie.id">
        <div class="ImageContent">
          <div class="CardImage">
            <img :src="movie.imgSrc" :alt="movie.imgAlt" class="CardImg" />
          </div>
        </div>
      </a>
    </swiper-slide>
  </swiper>

  <!-- Documentation: https://swiperjs.com/swiper-api -->
  <p class="append-buttons"></p>
</template>

<script lang="ts">
import "swiper/css";
import "./style.css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";
import TheBlackPhone from "../../img/TheBlackPhone.jpg";
import Cemetery from "../../img/cemiterio.jpg";
import Entidade from "../../img/entidade.jpg";
import Exorcista from "../../img/exorcista.jpg";
import ScaryMovie from "../../img/ScaryMovie.jpg";
import IT from "../../img/itcoisa.jpg";
import Jason from "../../img/jason.jpg";
import Panico from "../../img/panico.jpg";
import Umma from "../../img/Umma.jpg";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          imgSrc: TheBlackPhone,
          imgAlt: "The Black Phone",
          imgHref: "/black-phone/",
        },
        {
          id: 2,
          imgSrc: Cemetery,
          imgAlt: "Cemetery",
          imgHref: "/cemetery/",
        },
        {
          id: 3,
          imgSrc: Entidade,
          imgAlt: "Entidade",
          imgHref: "/entidade/",
        },
        {
          id: 4,
          imgSrc: Exorcista,
          imgAlt: "Exorcista",
          imgHref: "/exorcista/",
        },
        {
          id: 5,
          imgSrc: ScaryMovie,
          imgAlt: "ScaryMovie",
          imgHref: "/scary-movie/",
        },
        {
          id: 6,
          imgSrc: IT,
          imgAlt: "IT",
          imgHref: "/it/",
        },
        {
          id: 7,
          imgSrc: Jason,
          imgAlt: "Jason",
          imgHref: "/jason/",
        },
        {
          id: 8,
          imgSrc: Panico,
          imgAlt: "Panico",
          imgHref: "/panico/",
        },
        {
          id: 9,
          imgSrc: Umma,
          imgAlt: "Umma",
          imgHref: "/umma/",
        },
      ],
    };
  },
  methods: {},
};
</script>
