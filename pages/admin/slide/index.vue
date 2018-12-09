<template>
  <div class="container">
    <div class="columns is-multiline">
        <imgpanel/>
         <imgpanel/>
          <imgpanel/>
        <imgpanel/>
    </div>
  </div>
</template>
<script>
import Imgpanel from "~/components/Admin/Imgpanel.vue";
export default {
  layout: "admin",
  components: {
     Imgpanel
  }
};
</script>
<style>
.container {
  margin-block-start: 10px;
}
</style>
