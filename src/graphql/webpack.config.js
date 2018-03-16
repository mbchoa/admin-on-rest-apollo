const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'eval-source-map',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    }]
  },
  externals: [nodeExternals()]
}
