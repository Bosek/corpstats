import chai from 'chai';
const assert = chai.assert;
import { Entity, Character, Corporation, Alliance, Faction } from '../base';

function testEntity(Model) {
  return () => {
    const obj = {
      id: 1,
      name: 'TestEntity',
    };
    const entity = new Model(obj);
    const obj2 = {
      iD: 2,
      nAme: 'TestEntity2',
    };
    const entity2 = new Model(obj2);

    describe('ID', () => {
      it('should be set', () =>
        assert.equal(entity.ID, obj.id));
      it('should be number', () =>
        assert.equal(typeof(entity.ID), 'number'));
      it('should be case insensitive', () =>
        assert.equal(entity2.ID, obj2.iD));
    });
    describe('Name', () => {
      it('should be set', () =>
        assert.equal(entity.Name, obj.name));
      it('should be string', () =>
        assert.equal(typeof(entity.Name), 'string'));
      it('should be case insensitive', () =>
        assert.equal(entity2.Name, obj2.nAme));
    });
  };
}

describe('Base models', () => {
  describe('Entity', testEntity(Entity));
  describe('Character', testEntity(Character));
  describe('Corporation', testEntity(Corporation));
  describe('Alliance', testEntity(Alliance));
  describe('Faction', testEntity(Faction));
});
