module.exports = {
  ignore: [/\/core-js/],
  sourceType: 'unambiguous',
  presets: [['@babel/env', { modules: false, useBuiltIns: 'usage', corejs: '3' }], '@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-typescript'],
    ['@babel/plugin-transform-runtime'],
  ],
  env: {
    test: {
      presets: ['@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
