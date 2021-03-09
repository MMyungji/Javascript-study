<template>
    <div>
        <!-- 부모에게 받은 salt데이터 자식에게 이동-->
        <Fry :salt="salt"/>
        <button @click="message">emit</button>
    </div>
</template>

<script>

import Fry from './Fry'

export default {
    name:"FriedChicken",
    components:{
        Fry
    },
    props:["salt"],
    // mounted(){
    //     console.log(this.salt);
    // },
    methods:{
        message(){
            this.emit("message","치킨은 맛있다");
        }
    }

}
</script>