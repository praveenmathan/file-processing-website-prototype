`use strict`;

const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const isProduction = true;
let iAuditRendering = {  
  name: "iAudit",
  mode: 'production',
  devtool: (() => {
    if (isProduction) {
      return 'hidden-source-map';
    }
    return 'inline-source-map';
  })(),
  entry: {
    bundle: [      
      "./src/index.js"
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader","eslint-loader"]
        
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: isProduction,
      debug: !isProduction
    }),
  ],
  optimization: {
    nodeEnv: 'production',
    minimize: isProduction,
    concatenateModules: isProduction,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
    }
  }
};

module.exports = [iAuditRendering]