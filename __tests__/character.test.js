import Character from '../src/js/character.js';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("biff", "croakinsen");
  });

  test('should create a character object with a name', () => {
    expect(character.name1).toEqual("biff");
    expect(character.name2).toEqual("croakinsen");
  });
});