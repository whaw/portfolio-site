const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const currentTask = process.env.npm_lifecycle_event;
const publicDirectoryRoot = path.resolve(__dirname, 'dist');
const webpack = require('webpack');

const config = {
  entry: '/src/index.js',
  output: {
    filename: 'assets/js/bundle.[hash].js',
    path: publicDirectoryRoot,
  },
  devServer: {
    port: 3000,
    contentBase: publicDirectoryRoot,
    historyApiFallback: true,
  },
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  plugins: [
    new MiniCssExtractPlugin({filename: 'assets/css/main.[hash].css'}),
    new HtmlWebpackPlugin({template: "src/index.html"}),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/downloads', to: 'assets/downloads' },
      ]
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // include node_modules (eg. for bootstrap scss)
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
          },
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // set to deploy server setup
              // github treats 'dist' folder as root, no need to state it in 'publicPath'
              publicPath: '/',
              name() {
                return `assets/images/[name].[hash].[ext]`;
              },
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            // babel options updated to handle unsupported fringe cases (at this time, an example: async await)
            presets: [['@babel/preset-env', {"useBuiltIns": "usage", "corejs": 3, "targets": "defaults"}], '@babel/preset-react']
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
}

if (currentTask === 'build') {
  config.mode = 'production';
}

module.exports = config;