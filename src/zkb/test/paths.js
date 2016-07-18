import chai from 'chai';
const assert = chai.assert;
import paths from '../paths';


const id = 888;
const year = 2016;
const month = 7;
const page = 5;

describe('Alliance', () => {
  describe('Kills', () =>
    it('should create relative url', () =>
      assert.equal(paths.Alliance(id).Kills(year, month)(page - 1),
        `kills/allianceID/${id}/year/${year}/month/${month}/page/${page}/`)));
  describe('Losses', () =>
      it('should create relative url', () =>
        assert.equal(paths.Alliance(id).Losses(year, month)(page - 1),
          `losses/allianceID/${id}/year/${year}/month/${month}/page/${page}/`)));
});

describe('Character', () => {
  describe('Kills', () =>
    it('should create relative url', () =>
      assert.equal(paths.Character(id).Kills(year, month)(page - 1),
        `kills/characterID/${id}/year/${year}/month/${month}/page/${page}/`)));
  describe('Losses', () =>
      it('should create relative url', () =>
        assert.equal(paths.Character(id).Losses(year, month)(page - 1),
          `losses/characterID/${id}/year/${year}/month/${month}/page/${page}/`)));
});

describe('Corporation', () => {
  describe('Kills', () =>
    it('should create relative url', () =>
      assert.equal(paths.Corporation(id).Kills(year, month)(page - 1),
        `kills/corporationID/${id}/year/${year}/month/${month}/page/${page}/`)));
  describe('Losses', () =>
      it('should create relative url', () =>
        assert.equal(paths.Corporation(id).Losses(year, month)(page - 1),
          `losses/corporationID/${id}/year/${year}/month/${month}/page/${page}/`)));
});
