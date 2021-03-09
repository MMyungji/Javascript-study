<template>
    <div>
        <Chicken :salt="salt" @message="getEmit"/>
    </div>
</template>

<script>
import Chicken from '../components/Chicken'
export default {
    components:{
        Chicken
    },
    props:["salt"],
    methods:{
        getEmit(info){
            this.$emit("message",info)

            console.log("2. Fly Component Page");
            // console.log("message: ",info);

            alert(`Fry View
                salt: ${this.salt}, message: ${info}
            `);
        }
    }
}
</script>