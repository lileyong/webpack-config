const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    VueLoaderPlugin
} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = function (env, argv) {
    const cssLoader = [
        env.production ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'postcss-loader'
    ]

    const obj = {
        mode: env.production ? 'production' : 'development',
        entry: {
            main: 'src/index.js',
            vendor: ['vue']
        },
        devServer: {
            open: true,
            historyApiFallback: true
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
            }, {
                test: /\.css$/,
                use: cssLoader
            }, {
                test: /\.(scss|sass)$/,
                use: cssLoader.concat('sass-loader')
            }, {
                test: /\.styl$/,
                use: cssLoader.concat('stylus-loader')
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader'
            }, {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }, {
                test: /\.(ttf|eot|woff)$/,
                loader: 'file-loader'
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
        optimization: {
            splitChunks: {
                name: 'vendor',
                chunks: 'all'
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[chunkhash:8].js'
        }
    }

    if (env.development) {
        obj.devtool = 'source-map'
    } else {
        obj.plugins = obj.plugins.concat([
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[chunkhash:8].css'
            })
        ])
    }

    return obj
}
