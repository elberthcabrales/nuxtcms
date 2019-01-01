<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <div class="box emparejamelo">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>En proceso!</strong>
                  <small>@sorry aun no esta terminado :(</small>
                  <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
            </div>
            <div class="select">
              <select>
                <option>Correos</option>
                <option>Subscriptiores</option>
              </select>
            </div>
          </article>
        </div>
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
.emparejamelo {
  margin-top: 46px;
}
.container {
  margin-block-start: 10px;
}
</style>
