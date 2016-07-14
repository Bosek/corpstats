import keysToLowerCase from '../../lib/keysToLowerCase';

export default class Item {
  constructor(object) {
    object = keysToLowerCase(object);

    this.TypeID = object.typeid;
    this.Flag = object.flag;
    this.QtyDropped = object.qtydropped;
    this.QtyDestroyed = object.qtydestroyed;
    this.Singleton = object.singleton;
  }
}
