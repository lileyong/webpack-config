const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = function (env, argv) {
    return new Promise((resolve, reject) => {
        resolve({
            mode: env.production ? 'production' : 'development',
            devServer: {
                open: true
            },
            module: {
                rules: [{
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }, {
                    test: /\.vue$/,
                    use: 'vue-loader'
                }]
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new VueLoaderPlugin()
            ],
            resolve: {
                alias: {
                    src: path.resolve(__dirname, 'src')
                }
            },
            output: {
            }
        })
    })
}
