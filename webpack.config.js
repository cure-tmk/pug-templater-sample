const path = require('path');
const mode = process.env.NODE_ENV || 'production';
const isDev = mode === 'development'

module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  mode,
  devtool: isDev && 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  }
};
