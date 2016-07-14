'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require('../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  userAgent: `Corpstats v${ _package2.default.version } (bosektom@gmail.com) public`,
  maxEntriesPerPage: 200,
  apiUrl: 'https://zkillboard.com/api/'
};
module.exports = exports['default'];