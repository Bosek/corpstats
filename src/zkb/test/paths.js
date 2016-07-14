import chai from 'chai';
const assert = chai.assert;
import paths from '../paths';


const charId = 888;
const year = 2016;
const month = 7;
const page = 5;

describe('Kills', () => {
  describe('Alliance', () =>
    it('should create relative url', () =>
      assert.equal(paths.Kills.Alliance(charId, year, month)(page - 1),
        `kills/allianceID/${charId}/year/${year}/month/${month}/page/${page}/`)));

  describe('Character', () =>
    it('should create relative url', () =>
      assert.equal(paths.Kills.Character(charId, year, month)(page - 1),
        `kills/characterID/${charId}/year/${year}/month/${month}/page/${page}/`)));

  describe('Corporation', () =>
    it('should create relative url', () =>
      assert.equal(paths.Kills.Corporation(charId, year, month)(page - 1),
        `kills/corporationID/${charId}/year/${year}/month/${month}/page/${page}/`)));
});

describe('Losses', () => {
  describe('Alliance', () =>
    it('should create relative url', () =>
      assert.equal(paths.Losses.Alliance(charId, year, month)(page - 1),
        `losses/allianceID/${charId}/year/${year}/month/${month}/page/${page}/`)));

  describe('Character', () =>
    it('should create relative url', () =>
      assert.equal(paths.Losses.Character(charId, year, month)(page - 1),
        `losses/characterID/${charId}/year/${year}/month/${month}/page/${page}/`)));

  describe('Corporation', () =>
    it('should create relative url', () =>
      assert.equal(paths.Losses.Corporation(charId, year, month)(page - 1),
        `losses/corporationID/${charId}/year/${year}/month/${month}/page/${page}/`)));
});
