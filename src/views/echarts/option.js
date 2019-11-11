const option = {
    // 标题
    title: {
        text: '柱形图',
        left: 'center',
        top: 15
    },
    // 图例
    legend: {
        data: ['产量', '销量'],
        bottom: 10
    },
    // 工具箱
    toolbox: {
        right: 50,
        feature: {
            dataView: {},
            restore: {},
            dataZoom: {},
            magicType: {
                type: ['line', 'bar', 'stack', 'tiled']
            },
            brush: {},
            saveAsImage: {}
        }
    },
    // 提示框
    tooltip: {
        axisPointer: {
            type: 'cross'
        }
    },
    // x轴
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    // y轴
    yAxis: [
        {
            name: '产量',
            min: 0,
            max: 50,
        },
        {
            name: '销量',
            min: 0,
            max: 100,
            splitNumber: 5,
        }
    ],
    // 数据
    series: [
        {
            name: '产量',
            type: 'bar',
            data: [7, 25, 48, 15, 17, 40],
            yAxisIndex: 0
        },
        {
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
            yAxisIndex: 1
        }
    ]
}

export default option
