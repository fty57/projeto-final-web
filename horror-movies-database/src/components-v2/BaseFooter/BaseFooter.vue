<template>
  <footer class="page-footer">
    <div class="content-wrap-footer">
      <div class="footer-title">
        <h6>2022, THE SILVER SCREAM</h6>
      </div>
      <ul class="footer-ul">
        <li class="footer-item">
          <a href="/faq/">FAQ</a>
        </li>
        <li class="footer-item">
          <a href="/we-are/">Quem somos</a>
        </li>
        <li class="footer-item">
          <a href="/our-vision/">Nossa visão</a>
        </li>
        <li class="footer-item">
          <a href="/contact/">Contato</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts"></script>

<style scoped>
.page-footer {
  background-color: #161718;
  position: relative;
  height: 80px;
}
.content-wrap-footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-ul {
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.footer-title {
  margin-left: 50px;
  width: 230px;
}
.footer-title h6 {
  margin-right: 5px;
  color: rgb(140, 2, 2);
  font-size: 14px;
}
.footer-item a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>
