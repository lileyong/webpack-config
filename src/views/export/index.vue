<template>
    <div>
        <el-button type="primary" @click="doExport">导出</el-button>
        <el-button type="primary" @click="doExport2">导出2</el-button>
    </div>
</template>

<script>
import student from './student'
import student2 from './student-20200128'

export default {
    methods: {
        doExport () {
            const ExportJsonExcel = require('js-export-excel')
            var sheetData = []
            student.forEach(item => {
                sheetData.push({
                    s1: item.match(/(?<=幼儿姓名：)[^\n\r]*?[\n\r]/), s2: item.match(/(?<=寒假居留城市：)[^\n\r]*?[\n\r]/), s3: item.match(/(?<=外出居留城市：)[^\n\r]*?[\n\r]/), s4: item.match(/(?<=有无居留武汉：)[^\n\r]*?[\n\r]/), s5: item.match(/(?<=离开深圳时间：)[^\n\r]*?[\n\r]/), s6: item.match(/(?<=返回深圳时间：)[^\n\r]*?[\n\r]/), s7: item.match(/(?<=家属有无居留武汉：)[^\n\r]*?[\n\r]/), s8: item.match(/(?<=有无发烧咳嗽等症状：)[^\n\r]*?[\n\r]/), s9: '',
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
        doExport2 () {
            const ExportJsonExcel = require('js-export-excel')
            var sheetData = []
            console.log(student2.length)
            student2.forEach(item => {
                sheetData.push({
                    s1: item.match(/(?<=区：)[^\n\r]*?[\n\r]/), s2: item.match(/(?<=姓名:)[^\n\r]*?[\n\r]/), s3: item.match(/(?<=性别[:：])[^\n\r]*?[\n\r]/), s4: item.match(/(?<=年龄:)[^\n\r]*?[\n\r]/), s5: item.match(/(?<=籍贯:)[^\n\r]*?[\n\r]/), s6: item.match(/(?<=所在街道（深圳）:)[^\n\r]*?[\n\r]/), s7: item.match(/(?<=所在社区（深圳）:)[^\n\r]*?[\n\r]/), s8: item.match(/(?<=所在学校（深圳）:)[^\n\r]*?[\n\r]/), s9: item.match(/(?<=所在班级（深圳）:)[^\n\r]*?[\n\r]/), s10: item.match(/(?<=现在深圳具体住址:)[^\n\r]*?[\n\r]/), s11: item.match(/(?<=是否到湖北（1-6）:)[^\n\r]*?[\n\r]/), s12: item.match(/(?<=写明具体城市:)[^\n\r]*?[\n\r]/), s13: item.match(/(?<=离开时间:)[^\n\r]*?[\n\r]/), s14: item.match(/(?<=离开目的地:)[^\n\r]*?[\n\r]/), s15: item.match(/(?<=来深时间:)[^\n\r]*?[\n\r]/), s16: item.match(/(?<=来深交通方式:)[^\n\r]*?[\n\r]/), s17: item.match(/(?<=来深目的地:)[^\n\r]*?[\n\r]/), s18: item.match(/(?<=身体是否不适:)[^\n\r]*?[\n\r]/), s19: item.match(/(?<=是否居家隔离:)[^\n\r]*?[\n\r]/), s20: item.match(/(?<=隔离起始日期:)[^\n\r]*?[\n\r]/), s21: item.match(/(?<=父母姓名（双方）:)[^\n\r]*?[\n\r]/), s22: item.match(/(?<=工作单位（双方）:)[^\n\r]*?[\n\r]/), s23: item.match(/(?<=联系电话（双方）[:：])[\s\S]+$/)
                })
            })

            var option = {}
            option.datas = [
                {
                    sheetData,
                    sheetName: 'sheet',
                    sheetFilter: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19', 's20', 's21', 's22', 's23'],
                    sheetHeader: ['2.区(新区)', '3.姓名', '4.性别', '5.年龄', '6.籍贯', '7.所在街道', '8.所在社区', '9.所在学校', '10.所在班级', '11.现在深圳具体住址', '12.寒假是否到湖北', '13.如有则写明具体城市', '14.离开时间（如第12项为否此项不填）', '15.离开填写目的地（如第12项为否', '16.来深时间（如第12项为否', '17.来深填写来深交通方式（如第12项为否', '18.来深目的地, （如第12项为否, 此项不填）', '19.身体是否不适（填具体信息）', '20.是否居家隔离', '21隔离起始日期"', '22.父母姓名', '23.工作单位', '24.联系电话是, 否'],
                    columnWidths: [20, ''],
                }
            ]
            var toExcel = new ExportJsonExcel(option)
            toExcel.saveExcel()
        }
    },
}
</script>
