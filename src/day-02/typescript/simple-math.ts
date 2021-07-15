export default class SimpleMath {
  current = 0;

  constructor(value = 0) {
    this.current = value;
  }

  static parseValue(val) {
    if (typeof val === 'number') {
      return val;
    }

    return parseInt(val, 10);
  }

  get() {
    return this.current;
  }

  add(value) {
    this.current += SimpleMath.parseValue(value);
  }

  divide(value) {
    this.current /= SimpleMath.parseValue(value);
  }

  mult(value) {
    this.current *= SimpleMath.parseValue(value);
  }

  sub(value) {
    this.current -= SimpleMath.parseValue(value);
  }
}
