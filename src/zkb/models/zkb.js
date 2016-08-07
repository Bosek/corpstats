import keysToLowerCase from '../../lib/keysToLowerCase';

export default class ZKB {
  constructor(object) {
    object = keysToLowerCase(object);

    this.Hash = object.hash;
    this.LocationID = object.locationid;
    this.Points = object.points;
    this.TotalValue = object.totalValue;
  }
}
