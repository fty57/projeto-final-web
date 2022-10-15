<template>
  <header class="site-header">
    <div class="site-header-bg"></div>
    <section>
      <div style="display: flex">
        <nav class="main-nav">
          <ul class="navitems">
            <li class="navitems">
              <h5 class="titleline-1">
                <a href="/">BU</a>
              </h5>
            </li>
            <li class="navitems">
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
            </li>
            <li class="navitems">
              <a
                href="/sign-in/"
                class="border border-0 rounded-5 text-decoration-none subtitleline-1"
                >Sign In</a
              >
            </li>
            <li class="navitems">
              <a
                href="/create-account/"
                class="border border-0 rounded-5 text-decoration-none subtitleline-1"
                >Create Account</a
              >
            </li>
            <li class="navitems">
              <a href="/create-account/">
                <img
                  src=".././../img/vanallope.jpg"
                  class="rounded rounded-5 mx-auto d-block"
                  alt="Vanallope"
                  width="50px"
                  height="50px"
              /></a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </header>
</template>

<script lang="ts"></script>

<style>
.site-header {
  height: 72px;
  position: relative;
  z-index: 1100;
}

.site-body {
  height: 1300px;
}
.site-header-bg {
  top: 0;
  left: 0;
  right: 0;
  height: 95px;
  opacity: 0.7;
  position: absolute;
  background-repeat: repeat-x;
  background-color: transparent;
  transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-image: linear-gradient(
    180deg,
    #14181c 0,
    rgba(20, 24, 28, 0.945) 16.56%,
    rgba(20, 24, 28, 0.802) 30.85%,
    rgba(20, 24, 28, 0.606) 43.77%,
    rgba(20, 24, 28, 0.394) 56.23%,
    rgba(20, 24, 28, 0.198) 69.15%,
    rgba(20, 24, 28, 0.055) 83.44%,
    rgba(20, 24, 28, 0)
  );
}

.site-header section {
  height: 72px;
  margin: 0 auto;
  position: relative;
  width: 950px;
}

.main-nav {
  width: 100%;
  margin: 22px 0 0;
}

.navitems {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navitem {
  margin-left: 24px;
  display: block;
  float: left;
  font-size: 1rem;
  letter-spacing: 0.07692308em;
  line-height: 17px;
  text-transform: uppercase;
}

.titleline-1 a {
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 5px;
  color: #890808;
  text-decoration: none;
}
.subtitleline-1 {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffefe;
  text-transform: uppercase;
}
</style>
