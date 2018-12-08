<template>
  <div class="hero-carousel carousel-animated carousel-animate-fade">
    <div class="carousel-container">
      <div class="carousel-item has-background is-active">
        <img
          class="is-background"
          src="https://via.placeholder.com/1080x500.png?text=XXX+WhoIsHostingThis.com/"
          alt
        >
      </div>
      <div class="carousel-item has-background">
        <img
          class="is-background"
          src="https://via.placeholder.com/1080x500.png?text=asdsdas+zzzzzzzz.com/"
          alt
        >
      </div>
      <div class="carousel-item has-background">
        <img
          class="is-background"
          src="https://via.placeholder.com/1080x500.png?text=zzzzzzz+asdsadsadsadsad.com/"
          alt
        >
      </div>
      <div class="carousel-item has-background">
        <img
          class="is-background"
          src="https://via.placeholder.com/1080x500.png?text=Visit+e4234234234.com/"
          alt
        >
      </div>
    </div>
    <div class="carousel-navigation is-overlay">
      <div class="carousel-nav-left">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="carousel-nav-right">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var carousels = bulmaCarousel.attach();
  }
};
</script>