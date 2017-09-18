const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: [
      './src/main.jsx',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/,
        options: {
          presets: ['react', 'es2017','stage-0']
        }
      },
      { test: /\.(scss|css)$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'ypling-material-ui': path.resolve(__dirname, '../index.js'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    port: 8002,
    historyApiFallback: true
  },
};