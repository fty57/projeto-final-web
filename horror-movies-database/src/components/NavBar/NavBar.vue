<script lang="ts">
import "./style.css";
</script>

<template>
  <div class="container text-center NavBarContainer">
    <div class="row">
      <div class="col">
        <h5 class="colorTitle">THE SILVER SCREAM</h5>
      </div>
      <div class="col">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Pesquisar"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div class="col colorSubTitlePrimary">TEXTO1</div>
      <div class="col colorSubTitleSecondary">TEXTO2</div>
      <div class="col">
        <img
          src=".././../img/vanallope.jpg"
          class="rounded mx-auto d-block"
          alt="Vanallope"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  </div>
</template>
