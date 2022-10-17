<template>
  <BaseHeader />

  <BaseBackdrop />

  <div class="site-body">
    <div class="backdrop">
      <div class="content-wrap">
        <div class="cols-3 overflow">
          <div class="col-6 gutter-right-1">
            <section class="poster-list">
              <div class="poster">
                <img
                  src="../../img/TheBlackPhone.jpg"
                  alt="TheBlackPhone"
                  class="image"
                  width="230"
                  height="345"
                />
              </div>
              <ul class="film-stats">
                <li>
                  <h4 class="headline-2">Avaliações</h4>
                  <i class="bi bi-star-fill text-light"></i>
                  <i class="bi bi-star-fill text-light"></i>
                  <i class="bi bi-star-fill text-light"></i>
                  <i class="bi bi-star-fill text-light"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </li>
                <li>
                  <h4 class="sub-headline-3">7.6</h4>
                  <h6 class="headline-3">Usuários gostaram</h6>
                </li>
                <li>
                  <h4 class="sub-headline-3">7.4</h4>
                  <h6 class="headline-3">Usuários não gostaram</h6>
                </li>
              </ul>
            </section>
          </div>
          <div class="col-17">
            <section class="film-header-lockup">
              <h1 class="headline-1">O Telefone Preto</h1>
              <p class="sub-headline-1">The Black Phone</p>
            </section>
            <section class="section col-10">
              <section>
                <div class="review">
                  <h4 class="tagline">Nunca fale com estranhos</h4>
                  <div class="truncate">
                    <p>
                      Finney Shaw, um garoto de 13 anos tímido, mas inteligente,
                      é sequestrado por um assassino sádico e preso em um porão
                      à prova de som, onde gritar é de pouca utilidade. Quando
                      um telefone desconectado na parede começa a tocar, Finney
                      descobre que pode ouvir as vozes das vítimas anteriores do
                      assassino. E eles estão determinados a garantir que o que
                      aconteceu com eles não aconteça com Finney.
                    </p>
                  </div>
                </div>
                <div class="info">
                  <h4 class="headline-4">Detalhes</h4>
                  <ul class="info-list">
                    <li>
                      <div class="info-item">
                        <h6 class="headline-4">Ano lançamento</h6>
                        <p class="sub-headline-4">2000</p>
                      </div>
                    </li>
                    <li>
                      <div class="info-item">
                        <h6 class="headline-4">País</h6>
                        <p class="sub-headline-4">USA</p>
                      </div>
                    </li>
                    <li>
                      <div class="info-item">
                        <h6 class="headline-4">Gênero</h6>
                        <p class="sub-headline-4">Horror - Thriller</p>
                      </div>
                    </li>
                    <li>
                      <div class="info-item">
                        <h6 class="headline-4">Diretor</h6>
                        <p class="sub-headline-4">Scott Derrickson</p>
                      </div>
                    </li>
                    <li>
                      <div class="info-item">
                        <h6 class="headline-4">Estúdio</h6>
                        <p class="sub-headline-4">Universal Pictures</p>
                      </div>
                    </li>
                    <li>
                      <div class="info-item">
                        <h6 class="headline-4">Original Language</h6>
                        <p class="sub-headline-4">English</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </section>
            <aside class="sidebar">
              <h4 class="headline-2">Atores</h4>
              <section>
                <ActorCard>
                  <template v-slot:character>
                    {{ character }}
                  </template>
                  <template v-slot:nameActor>
                    {{ nameActor }}
                  </template>
                  <template v-slot:source :image="{ imgSrc }"></template>
                </ActorCard>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>

  <BaseFooter />
</template>

<script setup lang="ts">
import BaseHeader from "../../components-v2/BaseHeader/BaseHeader.vue";
import BaseBackdrop from "../../components-v2/BaseBackdrop/BaseBackdrop.vue";
import BaseFooter from "../../components-v2/BaseFooter/BaseFooter.vue";
import ActorCard from "../../components-v2/ActorCard/ActorCard.vue";
import Girl from "../../img/girl1.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
</script>

<script lang="ts">
export default {
  data() {
    return {
      id: 1,
      character: "Michael Jackson",
      nameActor: "Martin Luter",
      imgSrc: Girl,
      actors: [],
    };
  },
};
</script>

<style scoped>
.site-body {
  height: 1300px;
}

.content-wrap {
  width: 950px;
  margin: 0 auto;
  position: relative;
}

.backdrop {
  background-image: none;
  padding-top: 375px;
}
.gutter-right-1 {
  margin-right: 50px;
}

.overflow {
  overflow: visible !important;
}
.col-6 {
  float: left;
  width: 230px;
}

.col-10 {
  float: left;
  width: 390px;
  padding-bottom: 50px;
}

.col-17 {
  float: right;
  width: 670px;
  overflow: visible;
  margin-top: 85px;
}
.poster-list {
  z-index: 0;
  position: relative;
}
.poster {
  width: 230px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  display: inline-block;
  background: #161718;
  box-shadow: 0 1px 3px rgb(0 0 0 / 35%);
}
.poster .image {
  border-radius: 4px;
  display: block;
}

.film-stats {
  clear: both;
  list-style: none;
  margin-left: -16px;
  position: relative;
  text-align: center;
  margin-right: -16px;
  padding: 10px 0 5px;
}

.film-header-lockup {
  display: grid;
  margin: -3px 0 30px;
}

.headline-1 {
  color: #fff;
  display: inline;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 7px 0 0;
  font-size: 2.46153846rem;
  text-shadow: #000 2px 0 5px;
  font-family: TiemposHeadlineWeb-Bold, Georgia, serif;
}

.headline-2 {
  color: #fff;
  font-weight: 400;
  font-size: 1.5rem;
  text-shadow: #000 2px 0 5px;
  font-family: TiemposHeadlineWeb-Bold, Georgia, serif;
}

.headline-4 {
  margin: 0;
  color: #676767;
  font-weight: 400;
  font-family: TiemposHeadlineWeb-Bold, Georgia, serif;
}
.sub-headline-1 {
  margin: 0;
  color: #9ab;
  font-size: 17px;
  display: inline;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.02em;
  text-shadow: #000 2px 0 5px;
  font-family: Graphik-Light-Web, sans-serif;
}

.sub-headline-3 {
  color: #8d0606;
  letter-spacing: 0.02em;
  text-shadow: #000 2px 0 5px;
}

.sub-headline-4 {
  color: #fff;
  font-family: Graphik-Light-Web, sans-serif;
}

.section {
  position: relative;
  padding: 0 0 2.30769231rem;
}

.review {
  overflow: hidden;
  line-height: 1.5625;
  margin-bottom: 0.625em;
  font-size: 1.23076923rem;
}

.tagline {
  color: #9ab;
  font-size: 1rem;
  margin-top: -2px;
  font-weight: 400;
  margin: 20px 0 10px;
  letter-spacing: 0.075em;
  line-height: 1.53846154;
  text-transform: uppercase;
  font-family: Graphik-Regular-Web, sans-serif;
}

.truncate {
  border: 0;
  font-family: inherit;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

.truncate p {
  color: #9ab;
  line-height: inherit;
  margin-bottom: 0.625em;
  font-family: TiemposTextWeb-Regular, Georgia, serif;
}

.info-list {
  list-style: none;
  padding: 0;
}

.info-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.sidebar {
  width: 230px;
  float: right;
  margin-right: 0;
  padding-bottom: 50px;
}
</style>
