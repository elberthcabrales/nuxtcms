import Vuex from 'vuex'
import pageModule from './modules/page'
import emailModule from './modules/mail'
import userModule from './modules/user'
import jwt_decode from 'jwt-decode'
import * as moment from 'moment'


const createStore = () => {
  return new Vuex.Store({
    state: {
      authenticated: null,
      token:null
    },
    mutations: {
      setToken(state, token) {
       
        state.authenticated = jwt_decode(token);
        var exp = moment.unix(state.authenticated.exp);
        var now = moment()
        var dias=exp.diff(now, 'days');
        state.token = token;
        if (exp.diff(now, 'days') > 1) {
          this.$router.push('/admin');
        }else{
          clearToken(state)
        }
      },
      clearToken(state) {
        //state.authenticated = null;
        localStorage.removeItem('token')
        this.$router.push('/admin/auth');
      }
    },
    actions: {
      authenticateUser(vuexContext, authData) {
        let authUrl = 'auth'
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
          })
          .then(result => {
            this.$toast.success('Logging in...')
            vuexContext.commit("setToken", result.token);
            localStorage.setItem('token', result.token)

          })
          .catch(e => console.log(e));
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
      },
      //este metodo se va ejecutar al iniciar el login
      verifyTokenExp(vuexContext) {
        let token =localStorage.getItem('token');
        if (token) {
          vuexContext.commit("setToken", token);
        }
      }
    },
    modules: {
      page: pageModule,
      email: emailModule,
      user: userModule,
    }
  })
}
export default createStore
