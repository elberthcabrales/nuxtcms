
<template>
  <section class="container">
    <div class="quill-editor" 
         :content="content"
         v-on:change="onEditorChange($event)"
         v-on:blur="onEditorBlur($event)"
         v-on:focus="onEditorFocus($event)"
         v-on:ready="onEditorReady($event)"
         v-quill:myQuillEditor="editorOption">
    </div>
  </section>
</template>

<script>
  export default {
    name:'vuequilljs',
    data () {
      return {
        content: '<p>I am Example</p>',
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          }
        }
      }
    },
    mounted() {
      console.log('app init, my quill insrance object is:', this.myQuillEditor)
      setTimeout(() => {
        this.content = 'i am changed'
      }, 3000)
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 60%;
    margin: 0 auto;
    padding: 50px 0;
  }
</style>