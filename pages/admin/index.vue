<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-6">
        <Panel
          title="Paginas"
          :entity="pages"
          @buttonClicked="eventListenerPage($event)"
          @buttonCreate="createPage()"
          @buttonDelete="deletePage($event)"
        />
      </div>
      <div class="column is-6">
        <Panel
          title="Etiquetas"
          :entity="tags"
          @buttonClicked="eventListenerTag($event)"
          @buttonCreate="createEtiqueta()"
           @buttonDelete="deleteTag($event)"
        />
      </div>
      <section class="column is-10">
        {{singlePage.id}}
        <div class="field">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              v-model="singlePage.title"
              placeholder="Titulo"
              required
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
                <option
                  v-for="(item, id) in singlePage.tagsInPage"
                  :key="id"
                  @click="selectTag(item)"
                >{{item.value}}</option>
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
            <button class="button is-primary" @click="updatePage()" v-if="isUpdate">Actualizar</button>
            <button class="button is-primary" @click="savePage()" v-else>Crear nueva</button>
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
            <input
              class="input is-primary"
              type="text"
              v-model="singleTag.value"
              placeholder="Etiqueta"
            >
          </div>
          <br>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <a
                class="button is-primary"
                v-if="singlePage.id && singleTag.id"
                @click="addTagToPage()"
              >Agregar a pagina seleccionada</a>
            </p>
            <p class="control">
              <a class="button is-primary" v-if="!singleTag.id" @click="SaveTag()">Guardar</a>
              <a class="button is-primary" v-else @click="updateTag()">Actualizar</a>
            </p>
            <p class="control">
              <a class="button is-light" v-on:click="hide">Cancel</a>
            </p>
          </div>
        </div>
      </section>
    </modal>
    <modal name="removeTag" class="columns">
      <section class="column is-12 is-center">
        <button class="button is-large is-fullwidth is-danger" @click="deleteTagFromPage()">Desea quitar esta etiqueta</button>
           <span class="tag">{{tagToPopFromPage.id}}</span>
         <span class="tag">{{tagToPopFromPage.value}}</span>
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
      isUpdate: false,
      tagToPopFromPage:{},
      catgories: [
        "tecnica",
        "licenciatura",
        "capacitacion",
        "blog",
        "diplomad",
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
      this.$store.dispatch("setTagsInPage", {
        ...this.singlePage,
        content: html
      });
    },
    eventListenerTag(event) {
      console.log(event);
      this.$store.dispatch("setSingleTag", {
        id: event.id,
        value: event.title
      });
      this.$modal.show("modalTegs");
    },
    //para pasar parametros desde el otro componente
    eventListenerPage(event) {
      let page = {
        id: event.id,
        category: event.category,
        title: event.title,
        description: event.description,
        content: event.content,
        tagsInPage: []
      };
      this.isUpdate = true;
      this.$axios
        .get(`/tag/page/${event.id}`)
        .then(result => {
          let { data } = result;
          //console.log(data);
          data.forEach(e => {
            page.tagsInPage.push({ id: e.tagId, value: e.value });
          });
        })
        .catch(err => {
          console.log(err);
        });

      this.$store.dispatch("setTagsInPage", page);
    },
    addTagToPage() {
      //validar que no exista la etiqueta
      this.$store.dispatch("addTagToPag", {
        singleTag: this.singleTag,
        singlePage: this.singlePage
      });
      this.$modal.hide("modalTegs");
    },
    hide() {
      this.$store.dispatch("setSingleTag", { id: null, value: "" });
      this.$modal.hide("modalTegs");
    },
    updateTag(){
      this.$store.dispatch("updateTag",this.singleTag)
      this.$modal.hide("modalTegs");
    },
    createPage() {
      let data = {
        category: "",
        tagsInPage: [],
        title: "",
        description: "",
        autor: "",
        id: "",
        autor: null,
        content: ""
      };
      this.$store.dispatch("setTagsInPage", data);
      this.isUpdate = false;
      window.scrollBy(0, 1000);
    },
    createEtiqueta() {
      let data = {
        id: "",
        value: ""
      };
      this.$store.dispatch("setSingleTag", data);
      this.$modal.show("modalTegs");
    },
    savePage() {
      this.singlePage.autor = this.$store.state.authenticated.id;
      this.$store.dispatch("savePage", this.singlePage);
    },
    updatePage() {
      this.singlePage.autor = this.$store.state.authenticated.id;
      this.$store.dispatch("updatePage", this.singlePage);
    },
    SaveTag() {
      this.$store.dispatch("saveTag", this.singleTag);
      this.$modal.hide("modalTegs");
    },
    deletePage($event) {
      //console.log($event);
      this.$store.dispatch("deletePage", $event);
    },
    deleteTag($event) {
      this.$store.dispatch("deleteTag", $event);
    },
    selectTag(item) {
      //console.log(item);
      this.tagToPopFromPage={id:item.id,value:item.value};
      this.$modal.show("removeTag");
    },
    deleteTagFromPage(){
      this.$store.dispatch("removeTagFromPage",{pageId:this.singlePage.id,tagId:this.tagToPopFromPage.id})
      this.$modal.hide("removeTag")
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
      singlePage: state => state.page.singlePage,
      singleTag: state => state.page.singleTag
    })
  }
};
</script>
<style>
.container {
  margin-block-start: 10px;
}
</style>
