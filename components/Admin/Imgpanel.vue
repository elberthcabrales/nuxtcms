<template>
  <div class="column is-6">
    <div class="card is-shady">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://source.unsplash.com/RWnpyGtY1aU"
            alt="Placeholder image"
            class="modal-button"
            data-target="modal-image2"
          >
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4>Click on image above</h4>
          <p>Pre ac ut consequat semper viverra nam.</p>
          <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Imgpanel"
};
</script>