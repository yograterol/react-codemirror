const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './examples/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    'react-codemirror': './src/index.js',
    example: './examples/example.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].entry.js'
  },
  plugins: [HtmlWebpackPluginConfig],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
