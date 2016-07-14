import chai from 'chai';
const assert = chai.assert;
import ZKB from '../zkb';

describe('ZKB', () => {
  const obj = {
    locationid: 0,
    hash: 1,
    totalvalue: 2,
    points: 3,
  };
  const zkb = new ZKB(obj);
  const obj2 = {
    lOcationid: 4,
    hAsh: 5,
    tOtalvalue: 6,
    pOints: 7,
  };
  const zkb2 = new ZKB(obj2);

  describe('LocationID', () => {
    it('should be set', () =>
      assert.equal(zkb.LocationID, obj.locationid));
    it('should be number', () =>
      assert.equal(typeof(zkb.LocationID), 'number'));
    it('should be case insensitive', () =>
      assert.equal(zkb2.LocationID, obj2.lOcationid));
  });
});
