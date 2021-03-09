<template>
    <div>
        Chicken: {{getSalt}}, {{getMessage}}
        <button @click="popAlert">Chicken</button>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    name:"Chicken",
    computed: {
        ...mapGetters(['getSalt']),
        ...mapGetters(['getMessage'])
    },
    methods: {
        popAlert(){
            this.$store.commit("popAlert","Chicken");
        }
    }
}
</script>