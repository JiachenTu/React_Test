const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './reactApp/app.js',
  output: {
    //path package
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        //
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  //make webpack output colorful
  stats: {
    colors: true
  },
  //mapping line numbers of input and output files
  devtool: 'source-map'
};
