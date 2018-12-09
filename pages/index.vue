<template>
  <!--los componentes deben en el mismo arbol del dom-->
  <div>
    <slide/>
    <minicard/>
    <card/>
    <Footer/>
  </div>
</template>
<script>
import Slide from "~/components/Front/Slide.vue";
import Minicard from "~/components/Front/Minicard.vue";
import Card from "~/components/Front/Card.vue";
import Footer from "~/components/Front/Footer.vue";

export default {
  components: {
    Slide,
    Minicard,
    Card,
    Footer
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
