<template>
    <div>
        <Form></Form>

        <bar-chart 
        style="width:30vw;"
        v-if="chartData" 
        :chart-data="chartData"
        ></bar-chart>
    </div>
    
</template>

<script>
// mapActions가져오기
import {mapState,mapActions} from "vuex";
import BarChart from '../components/ReactiveBarChart';
import Form from '../components/Form';

export default {
    components:{
        BarChart,
        Form
    },
    data(){
        return {
            // chartData: null 
        }
    },
    // mapState는 computed에서 가져옴
    computed:{
        ...mapState(['chartData'])
    },
    methods: {
        // mapActions 넣기
        ...mapActions(["generateChartData"]),
        generateData() {
            let newArray = [];
            let newArray2 = [];

            for(let i=0;i<10;i++){
                let randomValue = Math.floor(Math.random()*10);
                newArray.push(randomValue);
            }

            for(let i=0;i<10;i++){
                let randomValue = Math.floor(Math.random()*10);
                newArray2.push(randomValue);
            }

            this.chartData = {
                // labels: x축, datasets의 data: y축
                labels: ["Red","Blue","Yellow","Green","Purple","Orange"],
                datasets: [
                    {
                        label:"Data One",
                        backgroundColor:"#f87979",
                        data: newArray,
                        fill: false
                    },
                    {
                        label:"Data Two",
                        backgroundColor:"green",
                        data: newArray2,
                        fill: false
                    }
                ]
            }
        }
    },
    

    mounted(){
        // this.generateData();
        // setInterval(this.generateData, 2000);
        this.generateChartData();
    }
}
</script>


<style>

</style>