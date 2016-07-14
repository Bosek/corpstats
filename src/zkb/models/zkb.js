import keysToLowerCase from '../../lib/keysToLowerCase';

export default class ZKB {
  constructor(object) {
    object = keysToLowerCase(object);

    this.LocationID = object.locationid;
    this.Hash = object.hash;
    this.TotalValue = object.totalValue;
    this.Points = object.points;
  }
}
