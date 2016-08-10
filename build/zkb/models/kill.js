'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attacker = require('./attacker');

var _attacker2 = _interopRequireDefault(_attacker);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _keysToLowerCase = require('../../lib/keysToLowerCase');

var _keysToLowerCase2 = _interopRequireDefault(_keysToLowerCase);

var _position = require('./position');

var _position2 = _interopRequireDefault(_position);

var _victim = require('./victim');

var _victim2 = _interopRequireDefault(_victim);

var _zkb = require('./zkb');

var _zkb2 = _interopRequireDefault(_zkb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Kill {
  constructor(object) {
    object = (0, _keysToLowerCase2.default)(object);

    this.Attackers = object.attackers.map(attacker => new _attacker2.default(attacker));
    this.Items = object.items.map(item => new _item2.default(item));
    this.Position = new _position2.default(object.position);
    this.Victim = new _victim2.default(object.victim);
    this.ZKB = new _zkb2.default(object.zkb);

    this.KillID = object.killid;
    this.KillTime = object.killtime;
    this.MoonID = object.moonid;
    this.SolarSystemID = object.solarsystemid;
  }
}
exports.default = Kill;
module.exports = exports['default'];