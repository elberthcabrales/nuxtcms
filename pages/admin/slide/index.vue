<template>
  <div class="container">
    <div class="columns is-multiline">
      <imgpanel/>
      <imgpanel/>
      <imgpanel/>
      <imgpanel/>
    </div>
    {{posts}}
  </div>
</template>
<script>
import Imgpanel from "~/components/Admin/Imgpanel.vue";
import { mapState } from "vuex";

export default {
  layout: "admin",
  middleware: ["authentication"],
  components: {
    Imgpanel
  },
  async fetch({ store, $axios }) {
     // const { data } = await $axios.get("/posts");
      //store.dispatch("setPosts", data);
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts
    })
  }
};
</script>
<style>
.container {
  margin-block-start: 10px;
}
</style>
