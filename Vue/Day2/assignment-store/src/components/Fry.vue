<template>
    <div>
        Fry: {{getSalt}}, {{getMessage}}
        <button @click="popAlert">Fry</button>
        <Chicken />
    </div>
</template>


<script>
import Chicken from './Chicken'
import {mapGetters} from 'vuex'

export default {
    name:"Fry",
    components:{
        Chicken
    },
    computed: {
        ...mapGetters(['getSalt']),
        ...mapGetters(['getMessage'])
    },
    methods: {
        popAlert(){
            this.$store.commit("popAlert","Fry");
        }
    }
}
</script>