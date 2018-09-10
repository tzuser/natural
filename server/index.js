require('babel-polyfill');
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'stage-0'],
  plugins: [
    'add-module-exports',
    'syntax-dynamic-import',
    'dynamic-import-node',
    'transform-decorators-legacy',
    'transform-decorators',
  ],
});

var alias = require('../alias');
require('node-require-alias').setAlias(alias);
require('./server');
