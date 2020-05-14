const path = require('path')
const HappyPack = require('happypack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssLoader = ['style-loader', 'css-loader', 'postcss-loader']

module.exports = {
    entry: {
        app: 'src/index.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=happybabel'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: cssLoader
            },
            {
                test: /\.(scss|sass)$/,
                use: cssLoader.concat('sass-loader')
            },
            {
                test: /\.styl$/,
                use: cssLoader.concat('stylus-loader')
            },

            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader?cacheDirectory'],
            threads: 8
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            meta: {
                viewport: 'width=device-width, initial-scale=1.0'
            }
        })
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src')
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js'
    }
}
