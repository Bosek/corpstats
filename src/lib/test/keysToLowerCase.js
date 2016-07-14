import chai from 'chai';
const assert = chai.assert;
import keysToLowerCase from '../keysToLowerCase';

describe('keysToLowerCase', () => {
  const obj = {
    ID: 1,
    Bool: true,
    Text: 'TEST',
    Arr: [2, false, 'TEST2', {
      ID: 3,
    }],
    Obj: {
      ID: 4,
    },
  };
  const lowered = keysToLowerCase(obj);
  it('should convert key with number', () =>
    assert.equal(lowered.id, obj.ID));
  it('should convert key with boolean', () =>
    assert.equal(lowered.bool, obj.Bool));
  it('should convert key with string', () =>
    assert.equal(lowered.text, obj.Text));
  it('should convert key with array', () => {
    assert.equal(lowered.arr[0], obj.Arr[0]);
    assert.equal(lowered.arr[1], obj.Arr[1]);
    assert.equal(lowered.arr[2], obj.Arr[2]);
    assert.equal(lowered.arr[3].id, obj.Arr[3].ID);
  });
  it('should convert key with object recursively', () =>
    assert.equal(lowered.obj.id, obj.Obj.ID));
});
