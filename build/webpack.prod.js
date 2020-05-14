const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
})
