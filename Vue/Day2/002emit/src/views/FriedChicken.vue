<template>
    <div>
        <Fry @message="getEmit"/>
    </div>
</template>

<script>
import Fry from '../components/Fry'
export default {
    components:{
        Fry
    },
    data(){
        return {
            message:""
        }
    },
    methods:{
        getEmit(message){
            console.log("후라이드치킨 컴포넌트");
            alert(message);
        }
    }
}
</script>