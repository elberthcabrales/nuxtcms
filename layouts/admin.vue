<template>
  <div>
    <Menu/>
    <nuxt/>
  </div>
</template>
<script>
import Menu from "~/components/Admin/Menu";
export default {
  name: "admin",
  middleware: ["authentication"],
  components: {
    Menu
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
