<template>

  <div class="container">
    <slideform/>
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
import Slideform from "~/components/Admin/Slideform.vue";
import { mapState } from "vuex";

export default {
  layout: "admin",
  components: {
    Imgpanel,
    Slideform
  }
};
</script>
<style>
.container {
  margin-block-start: 10px;
}
</style>
