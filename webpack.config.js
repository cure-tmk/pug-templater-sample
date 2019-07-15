const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  mode: process.env.NODE_ENV || 'production',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  devtool: process.env.NODE_ENV && 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
    ]
  }
};
