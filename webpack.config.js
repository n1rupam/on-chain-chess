var path = require('path');

var web3provider = process.env.WEB3_PROVIDER || 'http://localhost:8545';

module.exports = {
  entry: [
    './index',
  ],
  output: {
    path: path.resolve('./static/bundles/'),
    publicPath: '/static/bundles/',
    filename: '[name].js',
  },
  web3Loader: {
    provider: web3provider,
    constructorParams: {
      Chess: []
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/, /\.tmp/ ],
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.sol$/,
        loaders: ['web3', 'solc']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  jshint: {
    emitErrors: true,
    failOnHint: false
  }
};
