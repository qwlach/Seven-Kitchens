const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    filename: "static/js/[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    publicPath: process.env.NODE_ENV === "local" ? "/" : "https:/qwlach.github.io/Seven-Kitchens/"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ["babel-loader", "ts-loader"],
        include: [path.resolve(__dirname, "../src")]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
    // 缩小模块查找范围
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      favicon: path.resolve(__dirname, "../public/kitchen.png"),
      inject: "body",
      hash: true
    })
  ]
};
