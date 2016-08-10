'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require('../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  apiUrl: 'https://zkillboard.com/api/',
  debug: false,
  maxEntriesPerPage: 200,
  startPage: 1,
  userAgent: `corpstats v${ _package2.default.version } (bosektom@gmail.com) public`
};
module.exports = exports['default'];