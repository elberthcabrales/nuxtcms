<template>
  <div>
    <Menu/>
    <nuxt/>
  </div>
</template>
<script>

import Menu from "~/components/Admin/Menu";

export default {
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
