import keysToLowerCase from '../../lib/keysToLowerCase';

export default class Item {
  constructor(object) {
    object = keysToLowerCase(object);

    this.Flag = object.flag;
    this.Singleton = object.singleton;
    this.TypeID = object.typeid;
    this.QtyDropped = object.qtydropped;
    this.QtyDestroyed = object.qtydestroyed;
  }
}
