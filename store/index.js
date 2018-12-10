import Vuex from 'vuex'
import postModule from './modules/post'
import emailModule from './modules/mail'
import jwt_decode from 'jwt-decode'

const createStore = () => {
  return new Vuex.Store({
    state: {
      
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      authenticateUser(vuexContext, authData) {
        let authUrl ='auth'
  
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
          })
          .then(result => {
            vuexContext.commit("setToken", result.token);
            localStorage.setItem("token", result.token);
            console.log(jwt_decode(result.token))
            this.$router.push('/admin');
          })
          .catch(e => console.log(e));
      }
    },
    modules: {
      post: postModule,
      email:emailModule
    }
  })
}
export default createStore
