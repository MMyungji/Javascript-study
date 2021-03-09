// 최상단 컴포넌트 = App
// 부모로부터 자식이 데이터 가지고오기

<template>
  <div id="app">
    <!-- salt 데이터 자식에게-->
    <FriedChicken :salt="salt" /> 

  </div>
</template>



<script>
import FriedChicken from './components/FriedChicken.vue'
export default {
  name:'App',
  components:{
    FriedChicken
  },
  data(){
    return {
      salt:30,
      message:""
    }
  },
  methods: {
    getEmit(message){
      console.log("이곳은 App컴포넌트");
      alert(message);
    }
  }
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
