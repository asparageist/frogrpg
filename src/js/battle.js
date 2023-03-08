
export default class Battle {
  constructor(attack, speed, speed2, defense) {
    this.attack = attack;
    this.speed = speed;
    this.speed2 = speed2;
    this.defense = defense;
  }

  getHit() {
    let damage = 0;
    let critical = 0;
    if (this.attack > this.defense) {
      damage = this.attack - this.defense;
      return (damage);
    }
    if (this.speed > this.speed2) {
      critical = attack * 2;
      return (critical);
    }
  }
}