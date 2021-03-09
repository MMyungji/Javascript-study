<template>
    <div>
    Child Counter: {{childCounter}}
    <br>
    <button>+</button>
    <button>-</button>
    </div>

</template>

<script>
export default {
//   props:["num"],
  components: {
    
  },
  data(){
    return{

    }
  },
  computed: {
    doubleCounter(){
      return this.$store.getters.doubleCounter;
    },
    childCounter(){
    //   return this.$store.state.counter;
    return this.$store.getters.getCounter;
    }
  }
}
</script>

