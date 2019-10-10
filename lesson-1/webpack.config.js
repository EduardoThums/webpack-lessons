const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
    entry: './src/app.js',
    resolve: {
        alias: {
            '@component': path.resolve(__dirname, 'src/component'),
            '@style': path.resolve(__dirname, 'src/style'),
        },
        extensions: ['.js', '.scss']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        contentBase: './dist',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}