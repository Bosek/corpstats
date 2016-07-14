'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (path, userAgent) => (0, _nodeFetch2.default)(path, {
  headers: {
    'User-Agent': userAgent
  }
});

module.exports = exports['default'];