const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'assets/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images'},
        { from: 'src/assets/downloads', to: 'assets/downloads'},
        { from: 'src/index.html', to: 'index.html'}
      ]
    }) 
  ],
  devServer: {
    // 404s fallback to root file
    historyApiFallback: true,
  }
}