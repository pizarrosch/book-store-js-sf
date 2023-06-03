const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].bundle.js',
    clean: true,
    assetModuleFilename: "assets/[name][ext]"
  },
  devServer: {
    static: './dist',
    port: 3001,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  mode: "development",
  devtool: 'source-map',
  stats: {
    children: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test : /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: "defaults"}]
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new HTMLWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
    ]
  }
}
