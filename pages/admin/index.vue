<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-6">
        <Panel
          title="Paginas"
          :entity="pages"
          @buttonClicked="eventListenerPage($event)"
          @buttonCreate="createPage()"
        />
      </div>
      <div class="column is-6">
        <Panel
          title="Etiquetas"
          :entity="tags"
          @buttonClicked="eventListenerTag($event)"
          @buttonCreate="createEtiqueta()"
        />
      </div>
      <section class="column is-10">
        {{singlePage.id}}
        <div class="field">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              v-model="singlePage.tilte"
              placeholder="Titulo"
            >
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input is-info"
              type="text"
              v-model="singlePage.description"
              placeholder="Descripcion"
            >
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-primary">
              <select v-model="singlePage.category">
                <option v-for="(ii, index) in catgories" :key="index">{{ii}}</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section class="column is-2">
        <div class="field">
          <div class="control">
            <div class="select is-multiple">
              <select multiple>
                <option v-for="(item, id) in singlePage.tagsInPage" :key="id">{{item}}</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section class="column is-12">
        <div
          class="quill-editor"
          :content="singlePage.content"
          v-on:change="onEditorChange($event)"
          v-on:blur="onEditorBlur($event)"
          v-on:focus="onEditorFocus($event)"
          v-on:ready="onEditorReady($event)"
          v-quill:myQuillEditor="editorOption"
        ></div>
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button class="button is-primary" @click="savePage()">Cuardar</button>
          </div>
        </div>
      </section>
    </div>
    <br>
    <br>
    <modal name="modalTegs" height="auto" width="80%" :scrollable="true" class="columns">
      <section class="column is-12">
        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" v-model="tagValue" placeholder="Etiqueta">
          </div>
          <br>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <a class="button is-primary" v-if="singlePage.id">Agregar a pagina</a>
            </p>
            <p class="control">
              <a class="button is-primary">Guardar</a>
            </p>
            <p class="control">
              <a class="button is-light" v-on:click="hide">Cancel</a>
            </p>
          </div>
        </div>
      </section>
    </modal>
  </div>
</template>
<script>
import Panel from "~/components/Admin/Panel.vue";
import { mapState } from "vuex";

export default {
  layout: "admin",
  components: {
    Panel
  },
  data() {
    return {
      tagValue: "",
      catgories: [
        "tecnica",
        "licenciatura",
        "capacitacion",
        "blog",
        "diplomad",
        "equipo",
        "ofertas"
      ],
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ]
        }
      }
    };
  },
  methods: {
    onEditorBlur(editor) {
      //console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      //console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      //console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      //console.log("editor change!", editor, html, text);
      //singlePage.content = html;
       this.$store.dispatch("setTagsInPage", {...this.singlePage, content:html});
    },
    eventListenerTag(event) {
      console.log(event);
      this.tagValue = event.title;
      this.$modal.show("modalTegs");
    },
    //para pasar parametros desde el otro componente
    eventListenerPage(event) {
      let page = {
        id: event.id,
        category: event.category,
        tilte: event.title,
        description: event.description,
        content: event.content,
        tagsInPage: []
      };

      this.$axios
        .get(`/tag/page/${event.id}`)
        .then(result => {
          let { data } = result;
          data.forEach(e => {
            page.tagsInPage.push(e.value);
          });
        })
        .catch(err => {
          console.log(err);
        });
      this.$store.dispatch("setTagsInPage", page);
    },
    hide() {
      this.tagValue = "";
      this.$modal.hide("modalTegs");
    },
    createPage() {
      console.log("crear pagina!");
    },
    createEtiqueta() {
      console.log("crear Etiqueta!");
    },
    savePage(){
      console.log(this.singlePage)
    }
  },
  async fetch({ store, $axios }) {
    const { data } = await $axios.get("/page");
    store.dispatch("setPages", data);

    const tags = await $axios.get("/tag");
    store.dispatch("setTags", tags.data);
  },
  computed: {
    ...mapState({
      pages: state => state.page.pages,
      tags: state => state.page.tags,
      singlePage: state => state.page.singlePage
    })
  }
};
</script>
<style>
.container {
  margin-block-start: 10px;
}
</style>
