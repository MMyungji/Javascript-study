<template>
    <div>
        <button @click="message">button</button>
    </div>
</template>

<script>

export default {
    methods:{
        message(){
            this.$emit("message","치킨은 맛있다")
        }
    }
}
</script>