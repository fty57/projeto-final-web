<template>
  <div class="actor-card">
    <slot name="source" v-bind:image="{ imagePreview }">
      <v-img :src="{ imagePreview }" class="actor-img" />
    </slot>
    <div>
      <h6 class="headline-3">
        <slot name="character"></slot>
      </h6>
      <p class="sub-headline-2">
        <slot name="nameActor"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.actor-card {
  display: flex;
  margin-bottom: 20px;
}

.actor-img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 60px;
}

.headline-3 {
  margin: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: #000 2px 0 5px;
  font-family: TiemposHeadlineWeb-Bold, Georgia, serif;
}

.sub-headline-2 {
  color: #9ab;
  display: inline;
  font-family: Graphik-Light-Web, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-shadow: #000 2px 0 5px;
}
</style>
