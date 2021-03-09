// store에 state 변수 저장 -> 전역 변수 설정
// app과 child에서 사용가능 $store.state.counter

<template>
  <div id="app">
    <!-- 변수 사용하는 방식 1,2,3 -->
    <!-- (1) -->
    <!-- Parent Counter: {{$store.state.counter}} <br> -->
    <!-- (2) -->
    <!-- Parent Counter: {{ parentCounter }} <br> -->
    <!-- (3) -->
    Parent Counter: {{ getCounter }} <br>


    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

<!-- props대체 코드 -->
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'
import {mapGetters, mapMutations, mapActions} from 'vuex'


export default {
  components: {
    Child
  },
  // data(){
  //   return{
  //     counter:0
  //   }
  // },
  methods: {
    // mapMutations사용하여 사용하기
    ...mapMutations(['addCounter']),
    // mapActions사용하여 사용하기
    ...mapActions(['subCounter']),

    // addCounter(){
      // state값 바로 가져와서 사용하기
    //   // this.$store.state.counter++;

      // mutations(setter)값 접근하여 사용하기
    //   this.$store.commit("addCounter",10);
    // },

    
    // subCounter(){
    //   // this.$store.state.counter--;

    //   // actions사용 
    //   this.$store.dispatch('subCounter');
    // }
  },
  // computed lifecycle
  computed: {
    // (3)
    // 객체이기 때문에 ... (spread 문법)
    // 이름이 같은 것 mapping 
    ...mapGetters(['getCounter']) 
    
    // (2)
    // caching기능 : 값으로 연산할 때 filter, reverse() 계산로직이 들어갈때
    // doubleCounter(){
    //   return this.$store.getters.doubleCounter;
    // },
    // parentCounter(){
    //   // return this.$store.state.counter;
    //   // state에 접근하지않고 getters로 접근
    //   return this.$store.getters.getCounter;
    // }
  }
}
</script>

