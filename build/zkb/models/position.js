'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keysToLowerCase = require('../../lib/keysToLowerCase');

var _keysToLowerCase2 = _interopRequireDefault(_keysToLowerCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Position {
  constructor(object) {
    object = (0, _keysToLowerCase2.default)(object);

    this.X = object.x;
    this.Y = object.y;
    this.Z = object.z;
  }
}
exports.default = Position;
module.exports = exports['default'];