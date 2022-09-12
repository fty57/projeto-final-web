<script lang="ts">
import "./style.css";
</script>

<template>
  <div class="container text-center NavBarContainer">
    <div class="row">
      <div class="col col-4">
        <h5 class="ColorTitle Title">THE SILVER SCREAM</h5>
      </div>
      <div class="col col-3">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control rounded-5"
            aria-label="Pesquisar"
            aria-describedby="button-addon2"
            style="background-color: #5c5c5c; color: #fff"
          />
          <button
            class="btn btn-outline-secondary border border-0 rounded-5"
            type="button"
            id="button-addon2"
          >
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div class="col col-2">
        <a
          href="#"
          class="border border-0 rounded-5 text-decoration-none colorSubTitlePrimary SubTitle"
          >TEXTO</a
        >
      </div>
      <div class="col col-2">
        <a
          href="#"
          class="border border-0 rounded-5 text-decoration-none colorSubTitleSecondary SubTitle"
        >
          TEXTO
        </a>
      </div>
      <div class="col col-1">
        <img
          src=".././../img/vanallope.jpg"
          class="rounded rounded-5 mx-auto d-block"
          alt="Vanallope"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  </div>
</template>
