const webpack = require('webpack'),
    fs = require('fs-extra'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path');
    // devServer = require('webpack-dev-server');

const buildVariables = require('./buildVariables');

const DEV_PORT = 9000;
const BACKEND_HOST = '192.168.151.60:8080';

const webpackBaseConfig = {
    entry: {
        'InterviewTool': path.resolve(__dirname,'./src/index.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist"
    },
    devtool: buildVariables.isProduction ? 'source-map' : 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "awesome-typescript-loader",
                    options: {
                        noEmit: true,
                        declaration: false,
                    }
                }],

            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
            },
            {
                test: /\.svg|ico|png|gif|jpg($|\?)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'public/[name].[ext]'
                    }
                }]
            },
        ]
    },
    // externals: {
    //     'react': true,
    //     'react-dom': true,
    //     'lodash': true,
    // },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss', '.png']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(buildVariables.isProduction ? 'production' : 'DEV'),
            'process.env.InterviewTool': JSON.stringify(buildVariables.INTERVIEW_TOOL_UI_VERSION),
        }),
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        // compress: true,
        port: DEV_PORT,
        filename: 'InterviewTool.bundle.js',
        proxy: {
            // Только для локальной заглушки
            '**/tasks/**': {
                target: 'http://' + BACKEND_HOST
            },
        }
    }
};

if (buildVariables.isProduction) {
    webpackBaseConfig.plugins = webpackBaseConfig.plugins.concat([
        new webpack.optimize.OccurrenceOrderPlugin(true),
    ]);
}


module.exports = webpackBaseConfig;