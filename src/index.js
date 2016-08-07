import Attacker from './zkb/models/attacker';
import { Alliance, Character, Corporation, Entity, Faction } from './zkb/models/base';
import Item from './zkb/models/item';
import Kill from './zkb/models/kill';
import Position from './zkb/models/position';
import Victim from './zkb/models/victim';
import ZKB from './zkb/models/zkb';

import fetchData from './fetchData';
import paths from './zkb/paths';

export default {
  Alliance: Alliance,
  API: paths,
  Attacker: Attacker,
  Character: Character,
  Corporation: Corporation,
  Entity: Entity,
  Faction: Faction,
  Item: Item,
  Kill: Kill,
  Position: Position,
  Pull: fetchData,
  Victim: Victim,
  ZKB: ZKB,
};
