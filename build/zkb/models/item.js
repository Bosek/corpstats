'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keysToLowerCase = require('../../lib/keysToLowerCase');

var _keysToLowerCase2 = _interopRequireDefault(_keysToLowerCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Item {
  constructor(object) {
    object = (0, _keysToLowerCase2.default)(object);

    this.Flag = object.flag;
    this.Singleton = object.singleton;
    this.TypeID = object.typeid;
    this.QtyDropped = object.qtydropped;
    this.QtyDestroyed = object.qtydestroyed;
  }
}
exports.default = Item;
module.exports = exports['default'];