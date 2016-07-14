import chai from 'chai';
const assert = chai.assert;
import prefixToArray from '../prefixToArray';

const obj = {
  field1: 1,
  pre_field2: 2,
};
const out = prefixToArray('pre_', obj);

describe('prefixToArray', () => {
  it('should not pass not prefixed field', () =>
    assert.equal(out.field1, undefined));
  it('should pass prefixed field', () =>
    assert.equal(out.field2, obj.pre_field2));
});
