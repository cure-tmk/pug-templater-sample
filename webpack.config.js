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
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        loaders: ['pug-loader']
      }
    ]
  }
};
