'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keysToLowerCase = require('../../lib/keysToLowerCase');

var _keysToLowerCase2 = _interopRequireDefault(_keysToLowerCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ZKB {
  constructor(object) {
    object = (0, _keysToLowerCase2.default)(object);

    this.LocationID = object.locationid;
    this.Hash = object.hash;
    this.TotalValue = object.totalValue;
    this.Points = object.points;
  }
}
exports.default = ZKB;
module.exports = exports['default'];