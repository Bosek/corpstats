import chai from 'chai';
const assert = chai.assert;
import Attacker from '../attacker';
import { Character, Corporation, Alliance, Faction } from '../base';

describe('Attacker', () => {
  const obj = {
    characterid: 1,
    charactername: 'Char',
    corporationid: 2,
    corporationname: 'Corp',
    allianceid: 3,
    alliancename: 'Alli',
    factionid: 4,
    factionname: 'Fac',

    securitystatus: 10,
    damagedone: 1000,
    finalblow: 1,
    weapontypeid: 666,
    shiptypeid: 6666,
  };
  const attacker = new Attacker(obj);
  const obj2 = {
    cHaracterid: 5,
    cHaractername: 'Chara',
    cOrporationid: 6,
    cOrporationname: 'Corpo',
    aLlianceid: 7,
    aLliancename: 'Allia',
    fActionid: 8,
    fActionname: 'Fact',

    sEcuritystatus: 20,
    dAmagedone: 2000,
    fInalblow: 0,
    wAapontypeid: 66666,
    sHiptypeid: 666666,
  };
  const attacker2 = new Attacker(obj2);

  describe('Character', () => {
    it('should be instance of Character', () =>
      assert.equal(attacker.Character instanceof Character, true));
    it('should have ID', () =>
        assert.equal(attacker.Character.ID, obj.characterid));
    it('should have Name', () =>
      assert.equal(attacker.Character.Name, obj.charactername));
    it('should be case insensitive', () => {
      assert.equal(attacker2.Character instanceof Character, true);
      assert.equal(attacker2.Character.ID, obj2.cHaracterid);
      assert.equal(attacker2.Character.Name, obj2.cHaractername);
    });
  });
  describe('Corporation', () => {
    it('should be instance of Corporation', () =>
      assert.equal(attacker.Corporation instanceof Corporation, true));
    it('should have ID', () =>
        assert.equal(attacker.Corporation.ID, obj.corporationid));
    it('should have Name', () =>
      assert.equal(attacker.Corporation.Name, obj.corporationname));
    it('should be case insensitive', () => {
      assert.equal(attacker2.Corporation instanceof Corporation, true);
      assert.equal(attacker2.Corporation.ID, obj2.cOrporationid);
      assert.equal(attacker2.Corporation.Name, obj2.cOrporationname);
    });
  });
  describe('Alliance', () => {
    it('should be instance of Alliance', () =>
      assert.equal(attacker.Alliance instanceof Alliance, true));
    it('should have ID', () =>
        assert.equal(attacker.Alliance.ID, obj.allianceid));
    it('should have Name', () =>
      assert.equal(attacker.Alliance.Name, obj.alliancename));
    it('should be case insensitive', () => {
      assert.equal(attacker2.Alliance instanceof Alliance, true);
      assert.equal(attacker2.Alliance.ID, obj2.aLlianceid);
      assert.equal(attacker2.Alliance.Name, obj2.aLliancename);
    });
  });
  describe('Faction', () => {
    it('should be instance of Faction', () =>
      assert.equal(attacker.Faction instanceof Faction, true));
    it('should have ID', () =>
        assert.equal(attacker.Faction.ID, obj.factionid));
    it('should have Name', () =>
      assert.equal(attacker.Faction.Name, obj.factionname));
    it('should be case insensitive', () => {
      assert.equal(attacker2.Faction instanceof Faction, true);
      assert.equal(attacker2.Faction.ID, obj2.fActionid);
      assert.equal(attacker2.Faction.Name, obj2.fActionname);
    });
  });

  describe('SecurityStatus', () => {
    it('should be set', () =>
      assert.equal(attacker.SecurityStatus, obj.securitystatus));
    it('should be number', () =>
      assert.equal(typeof(attacker.SecurityStatus), 'number'));
    it('should be case insensitive', () =>
      assert.equal(attacker2.SecurityStatus, obj2.sEcuritystatus));
  });
  describe('DamageDone', () => {
    it('should be set', () =>
      assert.equal(attacker.DamageDone, obj.damagedone));
    it('should be number', () =>
      assert.equal(typeof(attacker.DamageDone), 'number'));
    it('should be case insensitive', () =>
      assert.equal(attacker2.DamageDone, obj2.dAmagedone));
  });
  describe('FinalBlow', () => {
    it('should be set', () =>
      assert.equal(attacker.FinalBlow, !!obj.finalblow));
    it('should be boolean', () =>
      assert.equal(typeof(attacker.FinalBlow), 'boolean'));
    it('should be case insensitive', () =>
      assert.equal(attacker2.FinalBlow, obj2.fInalblow));
  });
  describe('WeaponTypeID', () => {
    it('should be set', () =>
      assert.equal(attacker.WeaponTypeID, obj.weapontypeid));
    it('should be number', () =>
      assert.equal(typeof(attacker.WeaponTypeID), 'number'));
    it('should be case insensitive', () =>
      assert.equal(attacker2.WeaponTypeID, obj2.wEapontypeid));
  });
  describe('ShipTypeID', () => {
    it('should be set', () =>
      assert.equal(attacker.ShipTypeID, obj.shiptypeid));
    it('should be number', () =>
      assert.equal(typeof(attacker.ShipTypeID), 'number'));
    it('should be case insensitive', () =>
      assert.equal(attacker2.ShipTypeID, obj2.sHiptypeid));
  });
});
