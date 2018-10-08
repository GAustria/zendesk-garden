const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
      historyApiFallback: true,
      compress: true
    },
    module: {
      rules: [
        {
          use: {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ['es2015', 'react'],
              plugins: ['inline-react-svg', 'transform-object-assign', 'styled-components']
            }
          },
          test: /\.js?$/,
          exclude: /node_modules/
        },
        {
          use: ["file-loader"],
          test: /\.(jpe?g|png|gif)$/i
        },
        {
          use: ["raw-loader"],
          test: /\.svg$/
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: false,
                localIdentName: '[local]___[hash:base64:5]'
              },
            },
          ]
        }
      ]
    }
};


/**
 *      options: {
            babelrc: false,
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['inline-react-svg', 'transform-object-assign', 'styled-components']
          }
 */