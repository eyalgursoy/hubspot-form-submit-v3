const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');
const PrettierPlugin = require('prettier-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { version, name, license, repository, author } = getPackageJson(
  'version',
  'name',
  'license',
  'repository',
  'author'
);

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, ' ')} and project contributors.

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/index.ts'],
  output: {
    filename: 'hubspot-form-submit-v3.js',
    path: path.resolve(__dirname, 'build'),
    library: 'hubspot-form-submit-v3',
    libraryTarget: 'umd',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  module: {
    rules: [
      {
        test: /\.([mjt])s$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PrettierPlugin(),
    new webpack.BannerPlugin(banner),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
