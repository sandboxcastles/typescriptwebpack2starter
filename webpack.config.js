var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
    entry: './src/ts/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.bundle.js'
    },
    devServer: {
        // Added for angular routing - The production server must also have
        // settings to default to the angular app, or html5Mode must be disabled
        // for bookmarking purposes
        //historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9001,
        open: true,
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Typescript Webpack Sample',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}

module.exports = webpackConfig;