const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: '/src/index.js',
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // include node modules for third party scss
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
              publicPath: '/dist/',
              name() {
                const imagePath = 'assets/images/';
                if (process.env.NODE_ENV === 'development') {
                  return `${imagePath}[name].[ext]`;
                }
                return `${imagePath}[name].[hash].[ext]`;
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
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: {
            list: [
              // All default supported tags and attributes
              '...',
            ]
            // todo
            // mountain image not showing
            // overwrite images
            // add cash busting to js and css
            // add watch and hot reload
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'assets/css/main.css'}),
    new HtmlWebpackPlugin({template: "src/index.html"}),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/downloads', to: 'assets/downloads'},
      ]
    }) 
  ],
  devServer: {
    // 404s fallback to root file
    historyApiFallback: true,
  }
}