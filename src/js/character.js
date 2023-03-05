export default class Character {
  constructor(name1, name2, strStat, spdStat, intStat, endStat) {
    this.name1 = name1;
    this.name2 = name2;
    this.strStat = strStat;
    this.spdStat = spdStat;
    this.intStat = intStat;
    this.endStat = endStat;
  }

  getClass() {
    if (this.strStat >= 4) {
      return "berserker";
    } else if (this.spdStat >= 4) {
      return "ninja";
    } else if (this.intStat >= 4) {
      return "oracle";
    } else if (this.endStat >= 4) {
      return "juggernaut";
    } else {
      return "normal";
    }
  }
}