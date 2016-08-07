import chai from 'chai';
const assert = chai.assert;
import paths from '../paths';

import Kill from '../models/kill';

const id = 888;
const year = 2016;
const month = 7;
const page = 5;

describe('Alliance', () => {
  describe('Kills', () => {
    const obj = paths.Alliance(id).Kills(year, month)(page);
    it('should create relative url', () =>
      assert.equal(obj.URL,
        `kills/allianceID/${id}/year/${year}/month/${month}/page/${page}/`));
    it('should return Kill model', () =>
      assert.equal(obj.Model, Kill));
  });
});

describe('Character', () => {
  describe('Kills', () => {
    const obj = paths.Character(id).Kills(year, month)(page);
    it('should create relative url', () =>
      assert.equal(obj.URL,
        `kills/characterID/${id}/year/${year}/month/${month}/page/${page}/`));
    it('should return Kill model', () =>
      assert.equal(obj.Model, Kill));
  });
});

describe('Corporation', () => {
  describe('Kills', () => {
    const obj = paths.Corporation(id).Kills(year, month)(page);
    it('should create relative url', () =>
      assert.equal(obj.URL,
        `kills/corporationID/${id}/year/${year}/month/${month}/page/${page}/`));
    it('should return Kill model', () =>
      assert.equal(obj.Model, Kill));
  });
});
