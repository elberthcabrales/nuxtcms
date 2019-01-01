<template>
  <div>
    <form enctype="multipart/form-data" @submit.prevent="uploadImages">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" name="title" placeholder="Text input">
        </div>
      </div>

      <div class="file">
        <label class="file-label">
          <input class="file-input" 
            type="file"
            name="files"
			      accept="image/*">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
        </label>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" name="description" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
      <br/><br/>
			<div v-show="loading">
				loading..... <br/>
				<img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" />
			</div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
  
export default {
  name: "Slideform",
  computed: mapState({
     loading: state => state.image.loading,
  }),
  methods: { ...mapActions(['uploadImages']) }
};
</script>