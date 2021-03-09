<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Chicken</router-link>

      <FriedChicken :salt="salt" @message="getEmit" /> 
      
    </div>
    <router-view/>
  </div>
</template>


<script>
import FriedChicken from './views/FriedChicken.vue'
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
      console.log("0. App Component View");

      alert(`App View
              salt: ${this.salt}, message: ${message}
      `);
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
