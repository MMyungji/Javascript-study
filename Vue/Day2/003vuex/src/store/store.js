import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 전역상태
    counter:0
  },
  getters: {
    // 상태를 변화시키는 코드, 상태 변화 로직을 담고있음
    // -> 각각의 컴포넌트에서 변화시키는 것이 아닌 getter에서 변화시키고 컴포넌트에는 결과값만 가지고 옴
    doubleCounter: function(state){
      return state.counter*2;
    },
    getCounter: function(state){
      return state.counter;
    }
  },
  mutations: {
    // 동기적 로직정의, 다른이름으로 setter
    // payload : 두번째 인자
    addCounter: function(state){
      // console.log(payload)
      return state.counter++;
    },
    subCounter: function(state){
      return state.counter--;
    }
  },
  // mutations VS actions
  actions: {
    // 비동기적 로직 정의
    subCounter: function(context){
      return setTimeout(()=>{
        context.commit('subCounter')
      },1000)
    }
  },
  modules: {
  }
})
