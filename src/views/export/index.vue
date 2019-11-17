<template>
    <div>
        <el-button type="primary" @click="doExport">导出</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        doExport () {
            const ExportJsonExcel = require('js-export-excel')

            var option = {}
            option.datas = [
                {
                    sheetData: [
                        {
                            one: '一行一列',
                            two: '一行二列',
                        },
                        {
                            one: '二行一列',
                            two: '二行二列',
                        },
                    ],
                    sheetName: 'sheet',
                    sheetFilter: ['two', 'one'],
                    sheetHeader: ['第一列', '第二列'],
                    columnWidths: [20, ''],
                },
                {
                    sheetData: [
                        {
                            one: '一行一列',
                            two: '一行二列',
                        },
                        {
                            one: '二行一列',
                            two: '二行二列',
                        },
                    ],
                },
            ]
            var toExcel = new ExportJsonExcel(option)
            toExcel.saveExcel()
        },
    },
}
</script>
