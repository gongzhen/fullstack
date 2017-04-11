module.exports = {
    entry: './src/index.js',
    output: {
        devtoolLineToLine: true,
        sourceMapFilename: "./bundle.js.map",
        pathinfo: true,
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
