const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html"
    })],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [ 
          "style-loader", //3. injects style to DOM
          "css-loader",  //2. convert css to commonjs
          "sass-loader" //1. convert sass to css
        ]
        },
        {
          test: /\.html$/,
          use: [ "html-loader" ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          loaders: ["file-loader", "webp-loader?{quality: 85}"],
          }
      ]
    }
};