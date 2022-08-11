const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "module"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 160000,
              name: "imgs/[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  }
};
