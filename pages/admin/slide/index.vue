<template>

  <div class="container">
    <slideform/>
    <div class="columns is-multiline">
      <imgpanel v-for="(item, id) in images" 
        :key="id" :id="item.id" :title="item.title" :path="item.path" :description="item.description"/>
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
  },
  computed: {
    ...mapState({
      images: state => state.image.images
    })
  },
  mounted() {
    this.$store.dispatch("fetchImages");
  },
};
</script>
<style>
.container {
  margin-block-start: 10px;
}
</style>
