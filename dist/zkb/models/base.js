'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keysToLowerCase = require('../../lib/keysToLowerCase');

var _keysToLowerCase2 = _interopRequireDefault(_keysToLowerCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Entity {
  constructor(object) {
    object = (0, _keysToLowerCase2.default)(object);

    this.ID = object.id;
    this.Name = object.name;
  }
}

class Character extends Entity {}
class Corporation extends Entity {}
class Alliance extends Entity {}
class Faction extends Entity {}

exports.default = {
  Entity: Entity,
  Character: Character,
  Corporation: Corporation,
  Alliance: Alliance,
  Faction: Faction
};
module.exports = exports['default'];