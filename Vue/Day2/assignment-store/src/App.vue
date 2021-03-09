<template>
    <div id="app">
      <h2>치킨 리팩토링</h2> <br/>
      App: {{getSalt}}, {{getMessage}}
      <button @click="popAlert">App</button>
      
      <FriedChicken />
        
    </div>
</template>


<script>
import FriedChicken from '../src/components/FriedChicken'
import {mapGetters} from 'vuex'

export default {
    name:"App",
    components:{
        FriedChicken
    },
    computed: {
        ...mapGetters(['getSalt']),
        ...mapGetters(['getMessage'])
    },
    methods: {
        popAlert(){
          this.$store.commit("popAlert","App");
          return "";
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
