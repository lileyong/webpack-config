<template>
    <div>
        <el-button type="primary" @click="doExport">导出</el-button>
    </div>
</template>

<script>
import student from './student'

export default {
    methods: {
        doExport () {
            const ExportJsonExcel = require('js-export-excel')
            var sheetData = []
            student.forEach(item => {
                sheetData.push({
                    s1: item.match(/(?<=幼儿姓名：).+?\s/), s2: item.match(/(?<=寒假居留城市：).+?\s/), s3: item.match(/(?<=外出居留城市：).+?\s/), s4: item.match(/(?<=有无居留武汉：).+?\s/), s5: item.match(/(?<=离开深圳时间：).+?\s/), s6: item.match(/(?<=返回深圳时间：).+?\s/), s7: item.match(/(?<=家属有无居留武汉：).+?\s/), s8: item.match(/(?<=有无发烧咳嗽等症状：).+?\s/), s9: '',
                })
            })

            var option = {}
            option.datas = [
                {
                    sheetData,
                    sheetName: 'sheet',
                    sheetFilter: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
                    sheetHeader: ['学生姓名', '寒假居留城市', '外出居留城市', '有无居留武汉', '离深时间', '返深时间', '家属有无居留武汉', '有无发烧', '咳嗽等症状', '备注'],
                    columnWidths: [20, ''],
                }
            ]
            var toExcel = new ExportJsonExcel(option)
            toExcel.saveExcel()
        },
    },
}
</script>
