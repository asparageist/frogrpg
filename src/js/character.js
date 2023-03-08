export default class Character {
  constructor(name1, name2, strStat, spdStat, defStat, endStat, experience, level) {
    this.name1 = name1;
    this.name2 = name2;
    this.strStat = strStat;
    this.spdStat = spdStat;
    this.defStat = defStat;
    this.endStat = endStat;
    this.experience = experience;
    this.level = level;
  }

  getClass() {
    if (this.strStat >= 4) {
      return "berserker";
    } else if (this.spdStat >= 4) {
      return "ninja";
    } else if (this.defStat >= 4) {
      return "juggernaut";
    } else if (this.endStat >= 4) {
      return "fatso";
    } else {
      return "normal";
    }
  }

  levelUp() {
    let exp = this.experience;
    let lvl = this.level;
    let returnArray = [0 , 1];
    if (exp >= 100) {
      exp = 0;
      lvl += 1;

      returnArray = [exp, lvl];
      return returnArray;
    }
  }
}