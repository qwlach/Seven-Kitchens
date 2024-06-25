const { merge } = require("webpack-merge");
const path = require("path");
const commonWebpackConfig = require("./webpack.common");

module.exports = merge(commonWebpackConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3004,
    compress: false,
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "../public")
    }
  }
});
