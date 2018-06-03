var path = require('path');

module.exports = {
    entry: "./js/zadanie1.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'js'),
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }

            }

        ]
    }
}
