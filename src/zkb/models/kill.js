import Attacker from './attacker';
import Item from './item';
import keysToLowerCase from '../../lib/keysToLowerCase';
import Position from './position';
import Victim from './victim';
import ZKB from './zkb';

export default class Kill {
  constructor(object) {
    object = keysToLowerCase(object);

    this.Attackers = object.attackers.map((attacker) =>
      new Attacker(attacker));
    this.Items = object.items.map((item) =>
      new Item(item));
    this.Position = new Position(object.position);
    this.Victim = new Victim(object.victim);
    this.ZKB = new ZKB(object.zkb);

    this.KillID = object.killid;
    this.SolarSystemID = object.solarsystemid;
    this.KillTime = object.killtime;
    this.MoonID = object.moonid;
  }
}
