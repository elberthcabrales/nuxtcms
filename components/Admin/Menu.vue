<template>
  <!-- START NAV -->
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/admin/" class="navbar-item">Paginas</nuxt-link>
        <nuxt-link to="/admin/slide/" class="navbar-item">Slide</nuxt-link>
        <nuxt-link to="/admin/email/" class="navbar-item">Email</nuxt-link>
        <nuxt-link to="/admin/user/" class="navbar-item">Users</nuxt-link>
      </div>

      <div class="navbar-end">
        <a class="navbar-item">Usuario logeado</a>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-warning" v-on:click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- END NAV -->
</template>
<script>
export default {
  name: "AdminMenu",
  mounted() {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  },
  methods: {
    logout() {
      console.log("ejecutado");
      this.$store.dispatch("logout");
      //this.$store.dispatch("logout")
    }
  }
};
</script>
