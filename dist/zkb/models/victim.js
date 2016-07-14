'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keysToLowerCase = require('../../lib/keysToLowerCase');

var _keysToLowerCase2 = _interopRequireDefault(_keysToLowerCase);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _prefixToArray = require('../../lib/prefixToArray');

var _prefixToArray2 = _interopRequireDefault(_prefixToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Victim {
  constructor(object) {
    object = (0, _keysToLowerCase2.default)(object);

    this.Character = new _base2.default.Character((0, _prefixToArray2.default)('character', object));
    this.Corporation = new _base2.default.Corporation((0, _prefixToArray2.default)('corporation', object));
    this.Alliance = new _base2.default.Alliance((0, _prefixToArray2.default)('alliance', object));
    this.Faction = new _base2.default.Faction((0, _prefixToArray2.default)('faction', object));

    this.DamageTaken = object.damagetaken;
    this.ShipTypeID = object.shiptypeid;
  }
}
exports.default = Victim;
module.exports = exports['default'];