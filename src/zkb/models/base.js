import keysToLowerCase from '../../lib/keysToLowerCase';

class Entity {
  constructor(object) {
    object = keysToLowerCase(object);

    this.ID = object.id;
    this.Name = object.name;
  }
}

class Character extends Entity {}
class Corporation extends Entity {}
class Alliance extends Entity {}
class Faction extends Entity {}

export default {
  Entity: Entity,
  Character: Character,
  Corporation: Corporation,
  Alliance: Alliance,
  Faction: Faction,
};
