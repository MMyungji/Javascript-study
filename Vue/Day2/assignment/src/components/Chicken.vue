<template>
    <div>
        <button @click="message">출력</button>
    </div>
</template>

<script>

export default {
    name:"Chicken",
    props: {
        salt:Number
    },
    methods:{
        message(){
            this.$emit("message","치킨은 맛있다")

            console.log("3. Chicken Component Page");
            // console.log("message: ","치킨은 맛있다");

            alert(`Chicken View
                salt: ${this.salt}, message: 치킨은 맛있다
            `);
        }
    }
}
</script>