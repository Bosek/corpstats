import keysToLowerCase from '../../lib/keysToLowerCase';

export default class Position {
  constructor(object) {
    object = keysToLowerCase(object);

    this.X = object.x;
    this.Y = object.y;
    this.Z = object.z;
  }
}
