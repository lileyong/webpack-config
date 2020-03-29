const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: {
        // 想统一打包的类库
        vendor: ['vue', 'vue-router', 'vuex', 'element-ui', 'echarts', 'loadsh']
    },
    output: {
        path: path.join(__dirname, '../public/dll'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            // name 必须和 output.library 一致
            name: '[name]',
            // 该属性需要与 DllReferencePlugin 中一致
            context: __dirname,
            path: path.join(__dirname, '../public/dll', '[name]-manifest.json')
        })
    ]
}
