const path = require('path')

module.exports = {
  mode: "development",
  watch: true,
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'out.js'
  },
  module: {
    rules: [{
      test: /\.js$/, exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {  presets: ['@babel/preset-env']
      }
      }
    }]
}}