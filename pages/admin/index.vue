<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <Panel/>
      </div>
      <div class="column is-6">
        <Panel/>
      </div>
    </div>
    
  </div>
</template>
<script>
import Panel from "~/components/Admin/Panel.vue";
export default {
  layout: "admin",
  components: {
    Panel
  }
};
</script>
<style>
.container {
  margin-block-start: 10px;
}
</style>
