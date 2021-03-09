<template>
    <div>
        <Fry :salt="salt" @message="getEmit"/>
    </div>
</template>

<script>
import Fry from '../components/Fry'
export default {
    name:"FriedChicken",
    components:{
        Fry
    },
    props:["salt"],
    // data(){
    //     return {
    //         salt:0,
    //         message:""
    //     }
    // },
    methods:{
        getEmit(message){
            this.$emit("message",message)

            console.log("1. FriedChicken Component Page");
            // console.log("message: ", message);

            alert(`FriedChicken View
                salt: ${this.salt}, message: ${message}
            `);
        }
    }
}
</script>