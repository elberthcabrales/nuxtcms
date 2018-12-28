const state = () => ({
  pages: [], //uno de sus elementos sera tag
  tags: [], //uno de sus elementos sera page
  singlePage: {
    category: "",
    tagsInPage: [],
    title: "",
    description: "",
    autor: "",
    id: "",
    autor: null,
    content: "<p>Escribe en mi :)</p>",
  },
  singleTag: {
    id: "",
    value: ""
  },
  errrosPage: ""
})
const getters = {}
const mutations = {
  SET_TAGS_IN_PAGE(state, payload) {
    state.singlePage = payload;
  },
  SET_PAGES(state, payload) {
    state.pages = payload
  },
  SAVE_PAGE(state, payload) {
    state.pages.push(payload)
    state.singlePage = { id: "", value: "" }
  },
  UPDATE_PAGE(state, payload) {
    const index = state.pages.findIndex(p => p.id === payload.id)
    state.pages[index].title = payload.title
    state.pages[index].description = payload.description
    state.pages[index].content = payload.content
    state.singlePage = { id: "", value: "" }
  },
  DELETE_PAGE(state, payload) {
    const index = state.pages.findIndex(p => p.id === payload.id)
    state.pages.splice(index, 1)
  },
  SAVE_TAGEPAGE(state, payload) {
    state.singlePage.tagsInPage.push({id:payload.id,value:payload.value});
  },
  //tags
  SET_TAGS(state, payload) {
    state.tags = payload
  },
  SAVE_TAG(state, payload) {
    console.log(payload)
    state.tags.push(payload)
  },
  UPDATE_TAG(state, payload) {
    const index = state.tags.findIndex(p => p.id === payload.id)
    state.tags[index].title = payload.value
  },
  DELETE_TAG(state, payload) {
    const index = state.tags.findIndex(p => p.id === payload.id)
    state.tags.splice(index, 1)
  },
  SET_SINGLE_TAG(state, payload) {
    state.singleTag = payload;
  },
  REMOVE_TAG_FROM_PAGE(state,payload){
    console.log(payload)
    const index = state.singlePage.tagsInPage.findIndex(t=> t.id === payload.tagId)
    state.singlePage.tagsInPage.splice(index, 1)
  }
}
const actions = {
  setPages({ commit }, payload) { //esta en plural
    commit('SET_PAGES', payload)
  },
  async savePage({ commit }, payload) {
    //console.log(payload)
    this.$axios.setToken(this.state.token, 'Bearer')
    const { data } = await this.$axios.post('/page', payload)
    commit('SAVE_PAGE', { ...payload, id: data.id })
    this.$toast.success("Pagina creada correctamente!");
  },
  async updatePage({ commit }, payload) {
    this.$axios.setToken(this.state.token, 'Bearer')
    const { data } = await this.$axios.put(`/page`,
      {
        title: payload.title,
        description: payload.description,
        category: payload.category,
        id: payload.id,
        content: payload.content
      })
      this.$toast.success(data);
    commit('UPDATE_PAGE', payload)
  },
  async deletePage({ commit }, payload) {
    this.$axios.setToken(this.state.token, 'Bearer')
    const { data } = await this.$axios.delete(`/page/${payload.id}`)
    commit('DELETE_PAGE', payload)
    this.$toast.success("Se borro la pagina correctamente ")
  },
  //set tags
  setTags({ commit }, payload) {
    commit('SET_TAGS', payload)
  },
  async saveTag({ commit }, payload) {
    const {value} =payload;
    const { data } = await this.$axios.post('/tag', {value:value})
    console.log(data);
    commit('SAVE_TAG', {title:value, id:data})
  },
  async updateTag({ commit }, payload) {
    //console.log({...payload})
    const { data } = await this.$axios.put(`/tag`, {...payload})
    //console.log(data)
    commit('UPDATE_TAG', {...payload})
  },
  async deleteTag({ commit }, payload) {
    const { data } = await this.$axios.delete(`/tag/${payload.id}`)
    commit('DELETE_TAG', payload)
  },
  //agregarle una etiquetaa una
  async addTagToPag({ commit }, payload) { // pageId,tagId
    const { data } = await this.$axios.post('/page/tag',{
      pageId:payload.singlePage.id,
      tagId:payload.singleTag.id
    });
    commit('SAVE_TAGEPAGE', payload.singleTag)
    this.$toast.success("Se agrego la etiqueta correctamente ")
  },
  //singePage
  setTagsInPage({ commit }, payload) { //esta en plural
    commit('SET_TAGS_IN_PAGE', payload)
  },
  setSingleTag({ commit }, payload) {
    commit('SET_SINGLE_TAG', payload);
  },
  async removeTagFromPage({commit},payload){
    console.log(payload)
    const {pageId, tagId} = payload;
    const { data } = await this.$axios.delete(`/page/${pageId}/tag/${tagId}`);
    this.$toast.success("Se elimino la etiqueta correctamente")
    commit('REMOVE_TAG_FROM_PAGE',payload);
  }
}

const pageModule = {
  state,
  getters,
  mutations,
  actions
}
export default pageModule
