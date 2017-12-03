const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const dev = process.env.NODE_ENV === "development";

module.exports = {
  entry: [
    ...(dev ? ["react-hot-loader/patch"] : []),
    path.resolve(__dirname, "index")
  ],
  devtool: 'source-map',
  devServer: {
    hot: true
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
    library: "RegistrationForm",
    libraryTarget: "window"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    ...(dev
      ? [
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin()
        ]
      : [
        new UglifyJSPlugin({
          sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
      ])
  ]
};
