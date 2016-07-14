import chai from 'chai';
const assert = chai.assert;
import Item from '../item';

describe('Item', () => {
  const obj = {
    typeid: 1,
    flag: 2,
    qtydropped: 10,
    qtydestroyed: 1000,
    singleton: 3,
  };
  const item = new Item(obj);
  const obj2 = {
    tYpeid: 5,
    fFag: 6,
    qTydropped: 20,
    qTydestroyed: 2000,
    sIngleton: 7,
  };
  const item2 = new Item(obj2);

  describe('TypeID', () => {
    it('should be set', () =>
      assert.equal(item.TypeID, obj.typeid));
    it('should be number', () =>
      assert.equal(typeof(item.TypeID), 'number'));
    it('should be case insensitive', () =>
      assert.equal(item2.TypeID, obj2.tYpeid));
  });
  describe('Flag', () => {
    it('should be set', () =>
      assert.equal(item.Flag, obj.flag));
    it('should be number', () =>
      assert.equal(typeof(item.Flag), 'number'));
    it('should be case insensitive', () =>
      assert.equal(item2.Flag, obj2.fLag));
  });
  describe('QtyDropped', () => {
    it('should be set', () =>
      assert.equal(item.QtyDropped, obj.qtydropped));
    it('should be number', () =>
      assert.equal(typeof(item.QtyDropped), 'number'));
    it('should be case insensitive', () =>
      assert.equal(item2.QtyDropped, obj2.qTydropped));
  });
  describe('QtyDestroyed', () => {
    it('should be set', () =>
      assert.equal(item.QtyDestroyed, obj.qtydestroyed));
    it('should be number', () =>
      assert.equal(typeof(item.QtyDestroyed), 'number'));
    it('should be case insensitive', () =>
      assert.equal(item2.QtyDestroyed, obj2.qTydestroyed));
  });
  describe('Singleton', () => {
    it('should be set', () =>
      assert.equal(item.Singleton, obj.singleton));
    it('should be number', () =>
      assert.equal(typeof(item.Singleton), 'number'));
    it('should be case insensitive', () =>
      assert.equal(item2.Singleton, obj2.sIngleton));
  });
});
