<template>
  <div class="column is-12">
    <div class="card is-shady">
      <div class="card-image">
        <figure class="image">
          <img
            v-bind:src="'http://localhost:9000/static/' + path" 
            alt="Placeholder image"
          >
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4>{{title}}</h4>
          <p>{{description}}</p>
          <span class="button is-medium is-danger" @click="remove(id)">Borrar imagen</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Imgpanel",
  props:{
    path:{
      type:String
    },
    title:{
      type:String
    },
    description:{
      type:String
    },
    id:{
      type:Number
    }
  },
  methods: {
    remove(id){
      this.$store.dispatch("deleteEmage",{id:id})
    }
  },
};
</script>