<template>
  <!-- START NAV -->
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo">
        </a>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item">Inicio</nuxt-link>
          <nuxt-link to="/carreras" class="navbar-item">Carreras</nuxt-link>
          <nuxt-link to="/diplomados" class="navbar-item">Diplomados</nuxt-link>
          <nuxt-link to="/capacitaciones" class="navbar-item">capacitaciones</nuxt-link>
          <nuxt-link to="/blog" class="navbar-item">Blog</nuxt-link>
          <nuxt-link to="/conocenos" class="navbar-item">Conocenos</nuxt-link>
          <nuxt-link to="/contacto" class="navbar-item">Contacto</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
  <!-- END NAV -->
</template>
<script>
export default {
  mounted() {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }
};
</script>
