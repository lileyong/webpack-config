const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = function (env = {}) {
    return merge(baseConfig, {
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[chunkhash:8].css'
            }),
            ...(env.analyze ? [new BundleAnalyzerPlugin()] : [])
        ],
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    })
}
