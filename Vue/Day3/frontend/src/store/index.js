import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 로그인 유무에 따라, 보이는 뷰가 달라짐
    modal: {
      login: false,
      register: false
    },
    user: {}
  },
  mutations: {
    SET_REGISTER_MODAL(state, data){
      state.modal.login = false;
      state.modal.register = data;
    },
    SET_LOGIN_MODAL(state, data){
      state.modal.login = data;
      state.modal.register = false;
    },
    // 로그인 유지 기능
    SET_USER(state, data){
      state.user = data
    },
    SET_LOGOUT(state){
      state.user = {};
      localStorage.removeItem("token");
    }
  },
  actions: {
  },
  modules: {
  }
})
