class Math {
  current = 0;

  constructor(value = 0) {
    this.current = value;
  }

  get() {
    return this.current;
  }

  add(value = 0) {
    this.current += value;
  }

  divide(value = 1) {
    this.current = this.current / value;
  }

  mult(value = 1) {
    this.current = this.current * value;
  }

  sub(value = 0) {
    this.current -= value;
  }
}

module.exports = Math;
