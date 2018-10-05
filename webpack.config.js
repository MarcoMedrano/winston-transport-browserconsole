const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/app.ts'),
    output: {
        filename: 'app.js',
        path: __dirname + 'dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        })
    ]
};