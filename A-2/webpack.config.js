var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
    'vendor': './app/vendor',
    'main': './app/main',
     'app': './app/app.js'
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
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
            }
        ]
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./build/vendor.bundle.js")
]
};