const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].bundle.js',
    clean: true,
    assetModuleFilename: './assets/[name][ext]'
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
        test: /\.(svg|png)$/i,
        type: "asset/resource",
        // options: {
        //   name: '[path][name].[ext]',
        // },
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
