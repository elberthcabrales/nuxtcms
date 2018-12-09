<template>
  <!--los componentes deben en el mismo arbol del dom-->
  <div>
   diplomados
   <Panel/>
  </div>
</template>
<script>

import Card from "~/components/Front/Card.vue";
import Panel from "~/components/Admin/Panel.vue";
export default {
  components: {
    Card,
    Panel
  }
};
</script>
