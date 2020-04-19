const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = function (env, argv) {
    const cssLoader = [
        env.production ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'postcss-loader'
    ]

    const obj = {
        mode: env.production ? 'production' : 'development',
        entry: {
            main: 'src/index.js'
        },
        devServer: {
            open: true,
            historyApiFallback: true
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
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'happypack/loader?id=happybabel'
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
            new HtmlWebpackPlugin({
                meta: {
                    viewport: 'width=device-width, initial-scale=1.0'
                }
            }),
            new VueLoaderPlugin(),
            new HappyPack({
                id: 'happybabel',
                loaders: ['babel-loader?cacheDirectory'],
                threads: 8
            }),
            new PrerenderSPAPlugin({
                staticDir: path.resolve(__dirname, 'dist'),
                routes: ['/', '/home', '/scroll']
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./public/dll/vendor-manifest.json')
            })
        ],
        resolve: {
            alias: {
                src: path.resolve(__dirname, 'src')
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

    if (env.analyze) {
        obj.plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: true
            })
        )
    }

    return obj
}
