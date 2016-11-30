'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
let CleanWebpackPlugin = require('clean-webpack-plugin');

let cssExtractPlugin = new ExtractTextPlugin("./build/styles.bundle.css");

module.exports = {
    entry: {
        vendor: './app/vendor',
        main: './app/main',
        app: './app/app.js',
        css: './app/styles.less'
    },

    output: {
        path: __dirname,
        filename: "./build/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'app'),
                query: {
                    presets: 'es2015',
                },
            },

            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },

            // load css and process lessnpm
            {
                test: /\.css$/,
                loader: cssExtractPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: cssExtractPlugin.extract("style-loader", "css-loader!less-loader")
            },
            // // load fonts(inline base64 URLs for <=8k)
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=./build/[hash].[ext]" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?name=/build/[hash].[ext]&limit=8192&mimetype=application/font-woff"}
        ]
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./build/vendor.bundle.js"),
        cssExtractPlugin,
        new CleanWebpackPlugin(['app/build', 'app/*.eot', 'app/*.woff', 'app/*.svg', 'app/*.ttf'], {
            root: __dirname
        })
],

    bail: true
};