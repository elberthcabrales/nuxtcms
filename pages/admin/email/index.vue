<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <Panel
          title="Emails"
          :entity="emails"
          @buttonClicked="selectedContact($event)"
          @buttonCreate="createCorreo()"
          @buttonDelete="deleteCorreo($event)"
        />
      </div>

      <div class="column is-6">
        <div class="box emparejamelo">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p v-for="(item, index) in messages" :key="index">
                  <strong>{{item.subject}}</strong>
                  <br>
                  <strong>telefono</strong> <small>{{item.tel}}</small>
                  <br>
                  {{item.content}}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Panel from "~/components/Admin/Panel.vue";

export default {
  layout: "admin",
  components: {
    Panel
  },
  data(){
    return{
      toggleToas:true,
    }
  },
  async fetch({ store, $axios }) {
    const { data } = await $axios.get("/contact");
    store.dispatch("setEmails", data);
  },
  computed: {
    ...mapState({
      emails: state => state.email.emails,
      messages: state => state.email.messages
    })
  },
  methods: {
    selectedContact($event){
      //console.log($event);
      this.$store.dispatch("setEmail",{id:$event.emailId})
    },
    deleteCorreo($event){
      this.$store.dispatch("deleteEmail",{id:$event.emailId})
    },
    createCorreo(){
      this.toggleToas=!this.toggleToas;
     if(this.toggleToas){
       this.$toast.clear()
     }
     this.$toast.info("esta option esta desabilidad!")
    }
    
  },
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
