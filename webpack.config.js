const webpack = require('webpack'),
    path = require('path');
    // devServer = require('webpack-dev-server');

const webpackBaseConfig = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "awesome-typescript-loader",
                }],

            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};


module.exports = webpackBaseConfig;