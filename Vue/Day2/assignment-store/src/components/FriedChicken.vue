<template>
    <div>
        FriedChicken: {{getSalt}}, {{getMessage}}
        <button @click="popAlert">FriedChicken</button>
        <Fry />
    </div>
</template>


<script>
import Fry from './Fry'
import {mapGetters} from 'vuex'

export default {
    name:"FriedChicken",
    components:{
        Fry
    },
    computed: {
        ...mapGetters(['getSalt']),
        ...mapGetters(['getMessage'])
    },
    methods: {
        popAlert(){
            this.$store.commit("popAlert","FriedChicken");
        }
    }
}
</script>