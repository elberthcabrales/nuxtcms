import Vuex from 'vuex'
import pageModule from './modules/page'
import emailModule from './modules/mail'
import userModule from './modules/user'
import jwt_decode from 'jwt-decode'
import * as moment from 'moment'


const createStore = () => {
  return new Vuex.Store({
    state: {
      authenticated:null,
      isLoading:null //aqui controlaremos cuando haya procesos cargando y será nuestra bandera para mostrar imgs
    },
    mutations: {
      setToken(state, token) {
        state.authenticated = jwt_decode(token);
      },
      clearToken(state) {
        state.authenticated = null;
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
            this.$router.push('/admin');
          })
          .catch(e => console.log(e));
      },
      logout(vuexContext,authData){
        vuexContext.commit("clearToken");
      },
      //este metodo se va ejecutar al iniciar el login
      verifyTokenExp(vuexContext,authData){
         let user = jwt_decode(authData.token);
         var exp = moment.unix(user.exp);
         var now = moment()
         if (exp.diff(now, 'days') < 0) {
          vuexContext.commit("setToken", authData.token);
          this.$router.push('/admin');
         }
      }
    },
    modules: {
      post: pageModule,
      email:emailModule,
      user:userModule,
    }
  })
}
export default createStore
