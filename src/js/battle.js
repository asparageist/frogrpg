
export default class Battle {
  constructor(attack, defense) {
    this.attack = attack;
    this.defense = defense;
  }

  getHit() {
    let damage = 0;
    if (this.attack > this.defense) {
      damage = this.attack - this.defense;
      return (damage);
    }
  }
}