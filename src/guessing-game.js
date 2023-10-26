class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.res = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.res = Math.round((this.min + this.max) / 2);
    return this.res;
  }

  lower() {
    this.max = this.res;
  }

  greater() {
    this.min = this.res;
  }
}

module.exports = GuessingGame;
