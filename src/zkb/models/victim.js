import keysToLowerCase from '../../lib/keysToLowerCase';
import models from './base';
import prefixToArray from '../../lib/prefixToArray';

export default class Victim {
  constructor(object) {
    object = keysToLowerCase(object);

    this.Alliance = new models.Alliance(prefixToArray('alliance', object));
    this.Character = new models.Character(prefixToArray('character', object));
    this.Corporation = new models.Corporation(prefixToArray('corporation', object));
    this.Faction = new models.Faction(prefixToArray('faction', object));

    this.DamageTaken = object.damagetaken;
    this.ShipTypeID = object.shiptypeid;
  }
}
