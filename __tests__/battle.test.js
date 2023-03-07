import Battle from '../src/js/battle.js';

describe('Battle', () => {
  let battle;
  
  beforeEach(() => {
    battle = new Battle(4, 2);
  });

  test('should roll a dice for attack', () => {
    expect(battle.attack).toEqual(4);
  });

  test('should return damage equal to attack - defense', () => {
    expect(battle.getHit()).toEqual(2);
  });
});