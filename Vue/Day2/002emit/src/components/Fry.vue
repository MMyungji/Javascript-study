<template>
    <div>
        <Chicken @message="getEmit"/>
    </div>
</template>

<script>
import Chicken from '../components/Chicken'
export default {
    components:{
        Chicken
    },
    methods:{
        getEmit(info){
            this.$emit("message",info)
        }
    }
}
</script>