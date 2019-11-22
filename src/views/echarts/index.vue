<template>
    <div class="echarts" style="width:100%;height:100%;"></div>
</template>

<script>
import echarts from 'echarts'
import option from './option'

export default {
    mounted () {
        var myChart = echarts.init(document.querySelector('.echarts'))

        myChart.setOption(option)
    },
}
</script>
