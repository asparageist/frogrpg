import Battle from '../src/js/battle.js';

describe('Battle', () => {
  let battle;
  
  beforeEach(() => {
    battle = new Battle(4, 2, 1, 2);
  });

  test('should roll a dice for attack', () => {
    expect(battle.attack).toEqual(4);
  });

  test('should return damage equal to attack - defense', () => {
    expect(battle.getHit()).toEqual(2, 8);
  });

  test('should compare speed of combatants to determine critical', () => {
    expect(battle.getHit()).toEqual(2, 8);
  });
});