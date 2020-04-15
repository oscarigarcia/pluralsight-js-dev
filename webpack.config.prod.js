import path from "path";
import webpack from "webpack";
import WebpackMd5Hash from "webpack-md5-hash";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index"),
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    new ExtractTextPlugin("[name].[contenthash].css"),

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }),

    new WebpackMd5Hash(),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
    }),
    //TODO: Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    //TODO: Minify js
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css?sourceMap") },
    ],
  },
};
