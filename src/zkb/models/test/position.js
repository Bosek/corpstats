import chai from 'chai';
const assert = chai.assert;
import Position from '../position';

describe('Position', () => {
  const obj = {
    x: 1,
    y: 2,
    z: 3,
  };
  const position = new Position(obj);
  const obj2 = {
    X: 4,
    Y: 5,
    Z: 6,
  };
  const position2 = new Position(obj2);

  describe('X', () => {
    it('should be set', () =>
      assert.equal(position.X, obj.x));
    it('should be number', () =>
      assert.equal(typeof(position.X), 'number'));
    it('should be case insensitive', () =>
      assert.equal(position2.X, obj2.X));
  });
  describe('Y', () => {
    it('should be set', () =>
      assert.equal(position.Y, obj.y));
    it('should be number', () =>
      assert.equal(typeof(position.Y), 'number'));
    it('should be case insensitive', () =>
      assert.equal(position2.Y, obj2.Y));
  });
  describe('Z', () => {
    it('should be set', () =>
      assert.equal(position.Z, obj.z));
    it('should be number', () =>
      assert.equal(typeof(position.Z), 'number'));
    it('should be case insensitive', () =>
      assert.equal(position2.Z, obj2.Z));
  });
});
