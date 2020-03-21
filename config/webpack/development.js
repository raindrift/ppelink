process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');

environment.loaders.prepend(
  'Eslint',
  {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      failOnError: true
    }
  }
);

module.exports = environment.toWebpackConfig();
