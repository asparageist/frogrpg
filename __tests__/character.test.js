import Character from '../src/js/character.js';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("biff", "croakinsen",5,1,1,2,100,1);
  });

  test('should create a character object with a name', () => {
    expect(character.name1).toEqual("biff");
    expect(character.name2).toEqual("croakinsen");
  });

  test('should give attributes to the character', () => {
    expect(character.strStat).toEqual(5);
    expect(character.spdStat).toEqual(1);
    expect(character.defStat).toEqual(1);
    expect(character.endStat).toEqual(2);
  });

  test('should assign class from given stats', () => {
    expect(character.getClass()).toEqual("berserker");
  });

  test('should level a character stats up when 100 experience is gained', () => {
    expect(character.levelUp()[0]).toEqual(0);
    expect(character.levelUp()[1]).toEqual(2);
  });
});